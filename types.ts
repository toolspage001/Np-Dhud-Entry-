
export interface User {
  username: string;
  password?: string;
}

export type PricingMode = 'FIXED' | 'FAT';

export interface Customer {
  id: string;
  name: string;
  mobile: string;
  defaultRate: number; // For Fixed mode
  defaultFatRate: number; // For FAT mode (price per 1 FAT point)
  pricingMode: PricingMode;
  createdAt: number;
}

export enum MilkTime {
  MORNING = 'Morning',
  EVENING = 'Evening'
}

export interface MilkEntry {
  id: string;
  customerId: string;
  date: string; // YYYY-MM-DD
  quantity: number; // liters
  rate: number; // Effective rate per liter
  fat?: number;
  fatRate?: number; // Rate per 1 FAT point
  pricingMode: PricingMode;
  time: MilkTime;
  amount: number;
}

export interface CalculationResult {
  totalMilk: number;
  totalAmount: number;
  entryCount: number;
}
