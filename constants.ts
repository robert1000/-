import { ProductItem } from './types';
import { DiagnosisQuestion, DiagnosisProfile } from './types';

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: '1',
    name: '極致霧黑禮盒',
    description: '採用 400g 重磅黑卡紙，燙金邊緣處理。適合高級珠寶、精品香氛或限量版禮品，展現低調奢華。',
    price: 'MOQ 500 pcs',
    category: 'box',
    image: 'https://i.postimg.cc/sxxyv2qG/packaging-box-black.png' 
  },
  {
    id: '2',
    name: '琥珀光影玻璃瓶',
    description: '抗 UV 琥珀色玻璃，搭配胡桃木紋旋蓋。專為頂級精油、精華液設計，完美保存活性成分。',
    price: 'MOQ 1000 pcs',
    category: 'bottle',
    image: 'https://i.postimg.cc/WzqXq2yT/packaging-bottle-amber.png'
  },
  {
    id: '3',
    name: '雲霧與杉・環保立袋',
    description: '可生物降解材質，模擬和紙觸感。適合精品咖啡豆、有機茶葉，兼顧防潮與環保美學。',
    price: 'MOQ 2000 pcs',
    category: 'bag',
    image: 'https://i.postimg.cc/FR7Q6yvJ/packaging-pouch.png'
  },
  {
    id: '4',
    name: '絲絨觸感內襯',
    description: '高密度 EVA 覆蓋頂級絲絨，依產品形狀客製化開模。為您的易碎藝術品提供最溫柔的保護。',
    price: 'Custom Order',
    category: 'accessory',
    image: 'https://i.postimg.cc/Xv2qZz1h/packaging-insert.png'
  }
];

export const GALLERY_IMAGES = [
  'https://i.postimg.cc/WzqXq2yT/packaging-bottle-amber.png', // Portrait
  'https://i.postimg.cc/sxxyv2qG/packaging-box-black.png', // Landscape
  'https://i.postimg.cc/FR7Q6yvJ/packaging-pouch.png',  // Square
  'https://i.postimg.cc/Xv2qZz1h/packaging-insert.png', // Portrait
];

export const DIAGNOSIS_QUESTIONS: DiagnosisQuestion[] = [
  {
    id: 'q1',
    title: '你目前最常遇到的情境是？',
    helper: '判斷動機來源',
    options: [
      { value: 'activity-forgotten', label: '活動很多，但每次都很快被忘記' },
      { value: 'brand-no-icon', label: '品牌規模不小，但沒有代表性形象' },
      { value: 'leader-asks', label: '老闆/主管想要「看得到的成果」' },
      { value: 'repeat-symbol', label: '需要一個能被重複使用的品牌符號' },
    ],
  },
  {
    id: 'q2',
    title: '你希望「形象」主要用在什麼地方？',
    helper: '判斷應用場景',
    options: [
      { value: 'expo', label: '展覽 / 活動現場' },
      { value: 'social', label: '社群 / 宣傳視覺' },
      { value: 'gift', label: '禮贈品 / 紀念品' },
      { value: 'internal', label: '內部文化 / 員工凝聚' },
      { value: 'unknown', label: '還不確定，想先釐清方向', emphasis: '超高價值名單' },
    ],
  },
  {
    id: 'q3',
    title: '目前公司是否已有明確的品牌元素？',
    helper: '判斷設計起點',
    options: [
      { value: 'full-ci', label: '有完整 CI / 吉祥物' },
      { value: 'logo-only', label: '有 Logo，但沒有角色' },
      { value: 'fuzzy', label: '形象很模糊，每次都重新想' },
      { value: 'none', label: '完全沒有，想從零開始' },
    ],
  },
  {
    id: 'q4',
    title: '你最擔心做形象會發生什麼事？',
    helper: '直接打痛點',
    options: [
      { value: 'off-brand', label: '做出來不像、不好用' },
      { value: 'one-off', label: '花很多錢但只用一次' },
      { value: 'timeline', label: '交期來不及活動' },
      { value: 'consensus', label: '內部沒共識，容易被打槍' },
    ],
  },
  {
    id: 'q5',
    title: '這件事目前卡在哪一關？',
    helper: '判斷決策摩擦',
    options: [
      { value: 'how-to-start', label: '不知道該怎麼開始' },
      { value: 'what-materials', label: '不知道要準備什麼資料' },
      { value: 'budget', label: '不確定預算與規模' },
      { value: 'need-plan', label: '需要一個能說服內部的方案' },
    ],
  },
  {
    id: 'q6',
    title: '你的角色是？',
    helper: '分眾用',
    options: [
      { value: 'marketing', label: '行銷 / 公關' },
      { value: 'brand', label: '品牌 / 設計' },
      { value: 'procurement', label: '採購 / 專案' },
      { value: 'decision', label: '決策者' },
    ],
  },
];

export const DIAGNOSIS_PROFILES: DiagnosisProfile[] = [
  {
    id: 'activity',
    label: '活動導向型',
    readiness: '適合立即展開',
    headline: '先做可重複使用的形象套件，快速上線',
    summary: '你的主要需求是活動亮點與記憶點，建議優先設計可模組化的角色元素，方便在展場、背板、社群視覺快速套用。',
    nextMoves: [
      '先產出 1 套核心角色 + 2-3 個動態姿勢',
      '同步規劃易製作的實體載體（桌卡、抱枕、貼紙）',
      '設定「30 天內可上線」的時程表，控制風險',
    ],
  },
  {
    id: 'brand-reinforce',
    label: '品牌補強型',
    readiness: '適合立即展開',
    headline: '建立能被重複使用的品牌符號，提升記憶度',
    summary: '你已有品牌基礎，但缺少代表性符號。建議先從 Logo 衍生角色或品牌元素，確保視覺一致，再擴充到贈品與社群。',
    nextMoves: [
      '先確認品牌色、字體與語調，避免跑版',
      '以「可長期使用」為設計原則，避免一次性風格',
      '優先製作內外部都能用的素材包，降低採購阻力',
    ],
  },
  {
    id: 'consensus',
    label: '內部共識型',
    readiness: '需先釐清方向',
    headline: '先把決策疑慮拆清楚，再投入設計資源',
    summary: '目前最大的風險在於內部共識與資料準備。建議用小型工作坊或決策簡報，先對齊「為什麼要做」與「可以怎麼用」。',
    nextMoves: [
      '整理 2-3 組風格示例，讓利害關係人先選方向',
      '用小量試作或情境圖，降低「做了不用」的疑慮',
      '設定評估清單（用途、時程、預算），避免被打槍',
    ],
  },
  {
    id: 'not-ready',
    label: '尚未準備型',
    readiness: '需先釐清方向',
    headline: '先釐清用途與預期成果，再啟動角色開發',
    summary: '目前資料與決策尚未成熟，直接製作形象風險高。建議先釐清使用場景、預算範圍，並蒐集必要的品牌素材與參考。',
    nextMoves: [
      '列出「一定會用到」的 3 個場景，確認優先順序',
      '盤點現有素材：Logo、品牌色、故事、口號',
      '設定預算級距與時程，避免臨時卡關',
    ],
  },
];
