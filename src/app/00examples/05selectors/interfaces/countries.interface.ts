export interface Country {
  name: CountryName;
  cioc: string;
  borders: string[];
}

export interface CountryName {
  common: string;
}
