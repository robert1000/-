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