export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: string; // Could be price per unit or MOQ description
  category: 'box' | 'bottle' | 'bag' | 'accessory';
  image?: string;
}

export interface MuseResponse {
  packagingSuggestion: string; // e.g. "Matte Glass Dropper Bottle"
  designConcept: string;       // e.g. "Use earth tones to convey organic trust"
  reasoning: string;           // Why this fits the user's product
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface DiagnosisOption {
  value: string;
  label: string;
  note?: string;
  emphasis?: string;
}

export interface DiagnosisQuestion {
  id: string;
  title: string;
  helper?: string;
  options: DiagnosisOption[];
}

export interface DiagnosisProfile {
  id: string;
  label: string;
  readiness: '適合立即展開' | '需先釐清方向';
  headline: string;
  summary: string;
  nextMoves: string[];
}

export type DiagnosisAnswers = Record<string, string>;
