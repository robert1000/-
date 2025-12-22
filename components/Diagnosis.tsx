import React, { useMemo, useState } from 'react';
import { DIAGNOSIS_PROFILES, DIAGNOSIS_QUESTIONS } from '../constants';
import { DiagnosisAnswers, DiagnosisProfile } from '../types';
import { Lock, Check, ArrowRight, Mail, LineChart } from 'lucide-react';

const Diagnosis: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswers>({});
  const [showForm, setShowForm] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formState, setFormState] = useState({
    company: '',
    name: '',
    contact: '',
    advisor: 'yes',
  });

  const totalQuestions = DIAGNOSIS_QUESTIONS.length;
  const isComplete = Object.keys(answers).length === totalQuestions;

  const currentQuestion = DIAGNOSIS_QUESTIONS[currentIndex];

  const selectedProfile = useMemo<DiagnosisProfile | null>(() => {
    if (!isComplete) return null;

    const getProfile = (id: string) => DIAGNOSIS_PROFILES.find((p) => p.id === id)!;

    const q1 = answers['q1'];
    const q2 = answers['q2'];
    const q4 = answers['q4'];
    const q5 = answers['q5'];

    if (q4 === 'consensus' || q5 === 'need-plan') {
      return getProfile('consensus');
    }
    if (q2 === 'unknown' || ['how-to-start', 'what-materials', 'budget'].includes(q5)) {
      return getProfile('not-ready');
    }
    if (q1 === 'activity-forgotten' || q2 === 'expo') {
      return getProfile('activity');
    }
    if (q1 === 'repeat-symbol' || q1 === 'brand-no-icon') {
      return getProfile('brand-reinforce');
    }

    return getProfile('brand-reinforce');
  }, [answers, isComplete]);

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const goNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((idx) => idx + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((idx) => idx - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.company.trim() || !formState.name.trim() || !formState.contact.trim()) {
      return;
    }
    setIsUnlocked(true);
  };

  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <section id="diagnosis" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14 space-y-3">
          <p className="text-auri-gold uppercase tracking-[0.2em] text-xs font-bold">3 分鐘決策診斷</p>
          <h2 className="text-4xl md:text-5xl font-serif text-auri-charcoal">你的企業適不適合做形象角色？</h2>
          <p className="text-auri-charcoal/70 font-light max-w-3xl mx-auto">
            不評分好壞，只幫你判斷「是否該做」與「怎麼做才不會出事」。完成後會整理成可內部討論的規劃摘要。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Question Flow */}
          <div className="bg-auri-base/70 p-8 rounded-sm border border-auri-sand/60 shadow-sm">
            <div className="flex items-center justify-between mb-6 text-sm uppercase tracking-widest text-auri-charcoal/70">
              <span>前置顧問</span>
              <span>{progress}% 完成</span>
            </div>
            <div className="w-full bg-auri-sand/30 h-2 rounded-full overflow-hidden mb-6">
              <div className="bg-auri-charcoal h-full transition-all" style={{ width: `${progress}%` }} />
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-auri-charcoal/60">Q{currentIndex + 1}/{totalQuestions}</p>
              <h3 className="text-2xl font-serif text-auri-charcoal">{currentQuestion.title}</h3>
              {currentQuestion.helper && (
                <p className="text-sm text-auri-charcoal/60">{currentQuestion.helper}</p>
              )}
            </div>

            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(currentQuestion.id, option.value)}
                    className={`w-full text-left p-4 border rounded-sm transition-all ${
                      isSelected
                        ? 'border-auri-charcoal bg-white shadow-sm'
                        : 'border-auri-sand/60 bg-white/60 hover:border-auri-charcoal/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-1 w-4 h-4 rounded-full border ${
                          isSelected ? 'border-auri-charcoal bg-auri-charcoal' : 'border-auri-charcoal/30'
                        }`}
                      />
                      <div className="flex-1 space-y-1">
                        <p className="text-auri-charcoal font-medium">{option.label}</p>
                        {option.emphasis && (
                          <p className="text-auri-gold text-xs uppercase tracking-[0.2em]">{option.emphasis}</p>
                        )}
                        {option.note && <p className="text-xs text-auri-charcoal/60">{option.note}</p>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="text-sm uppercase tracking-widest text-auri-charcoal/70 disabled:opacity-40"
              >
                上一步
              </button>
              <div className="space-x-3">
                {currentIndex < totalQuestions - 1 && (
                  <button
                    onClick={goNext}
                    disabled={!answers[currentQuestion.id]}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-auri-charcoal text-white text-sm uppercase tracking-widest disabled:opacity-40"
                  >
                    下一題 <ArrowRight size={16} />
                  </button>
                )}
                {currentIndex === totalQuestions - 1 && (
                  <button
                    onClick={() => setCurrentIndex(currentIndex)}
                    disabled={!answers[currentQuestion.id]}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-auri-charcoal text-white text-sm uppercase tracking-widest disabled:opacity-40"
                  >
                    檢視結果 <Check size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Result & CTA */}
          <div className="space-y-6">
            <div className="p-8 border border-auri-sand/70 bg-white/80 rounded-sm shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="text-auri-brown" size={20} />
                <p className="text-xs uppercase tracking-[0.2em] text-auri-charcoal/70">診斷結果</p>
              </div>

              {!isComplete && (
                <p className="text-auri-charcoal/60 font-light">
                  完成所有題目後，系統會生成一份「企業形象規劃摘要」草稿，協助你向內部說明是否該做、如何做。
                </p>
              )}

              {isComplete && selectedProfile && (
                <div className="space-y-4">
                  <p className="text-sm text-auri-gold uppercase tracking-[0.2em]">{selectedProfile.readiness}</p>
                  <h3 className="text-2xl font-serif text-auri-charcoal">
                    你的企業目前屬於【{selectedProfile.label}】
                  </h3>
                  <p className="text-auri-charcoal/80 font-serif italic">{selectedProfile.headline}</p>

                  <div className="p-4 bg-auri-base/70 border border-auri-sand/60 rounded-sm">
                    <p className="text-auri-charcoal/70 text-sm mb-2">先給你 30%：為什麼這樣判斷？</p>
                    <p className="text-auri-charcoal/80 leading-relaxed">{selectedProfile.summary}</p>
                  </div>

                  <div className="border border-dashed border-auri-charcoal/20 rounded-sm p-4 bg-white/70">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock size={16} className="text-auri-brown" />
                      <p className="text-sm font-semibold text-auri-charcoal">完整《企業形象規劃摘要》尚未解鎖</p>
                    </div>
                    <ul className="text-auri-charcoal/70 text-sm space-y-1 list-disc pl-5">
                      <li>適合的形象方向建議</li>
                      <li>建議製作順序（先角色？先小量？）</li>
                      <li>常見風險提醒</li>
                      <li>下一步行動建議</li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => setShowForm(true)}
                        className="bg-auri-charcoal text-white px-4 py-2 text-sm uppercase tracking-widest"
                      >
                        填寫聯絡方式解鎖
                      </button>
                      <a
                        href="https://line.me/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 text-sm uppercase tracking-widest border border-auri-charcoal text-auri-charcoal hover:bg-auri-charcoal hover:text-white transition-colors"
                      >
                        加入 LINE 解鎖
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="p-8 border border-auri-sand/70 bg-white rounded-sm shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-auri-brown" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-auri-charcoal/70">解鎖摘要</p>
                    <p className="text-auri-charcoal/60 text-sm">填寫後立即顯示摘要預覽，並寄送完整版本</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="公司/單位名稱"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full border border-auri-sand/70 p-3 text-sm focus:border-auri-charcoal outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="聯絡人姓名"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full border border-auri-sand/70 p-3 text-sm focus:border-auri-charcoal outline-none"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Email 或 LINE ID（擇一即可）"
                  value={formState.contact}
                  onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                  className="w-full border border-auri-sand/70 p-3 text-sm focus:border-auri-charcoal outline-none"
                  required
                />
                <div className="flex flex-wrap gap-4 text-sm text-auri-charcoal/70">
                  <span className="uppercase tracking-[0.2em] text-xs">是否希望顧問協助說明？</span>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="advisor"
                      value="yes"
                      checked={formState.advisor === 'yes'}
                      onChange={(e) => setFormState({ ...formState, advisor: e.target.value })}
                    />
                    <span>是的，想聽建議</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="advisor"
                      value="no"
                      checked={formState.advisor === 'no'}
                      onChange={(e) => setFormState({ ...formState, advisor: e.target.value })}
                    />
                    <span>暫時不用，先自行評估</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-auri-charcoal text-white py-3 uppercase tracking-widest text-sm hover:bg-auri-brown transition-colors"
                >
                  解鎖並寄送摘要
                </button>

                {isUnlocked && selectedProfile && (
                  <div className="mt-4 border border-auri-sand/60 bg-auri-base/70 p-4 rounded-sm">
                    <p className="text-sm text-auri-gold uppercase tracking-[0.2em] mb-2">摘要預覽</p>
                    <p className="text-auri-charcoal font-serif mb-2">{selectedProfile.headline}</p>
                    <ul className="list-disc pl-5 text-sm text-auri-charcoal/80 space-y-1">
                      {selectedProfile.nextMoves.map((move) => (
                        <li key={move}>{move}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-auri-charcoal/60 mt-3">
                      我們也會寄送完整 PDF 並說明接下來的節奏（摘要 → 案例 → 對談）。
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
