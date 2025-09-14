// types.ts
export interface Price {
  amount: number;
  currency: string;
  note: string;
}

export interface PackageData {
  duration?: string;
  type?: string;
  dates?: string[];
  price?: Price;
  departureLocation?: string;
  overview?: string;
  places?: string[];
  inclusions?: string[];
  exclusions?: string[];
}
