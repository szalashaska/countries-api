export type ApiCountriesType = {
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[] | undefined;
  cioc: string;
};

export type ApiCountryType = {
  flags: { png: string };
  name: { common: string; nativeName: { official: string } };
  population: number;
  region: string;
  subregion: string;
  capital: string[] | undefined;
  tld: string[];
  cioc: string;
  currencies: { [key: string]: string };
  languages: object;
  borders: string[];
};

export type CountriesType = {
  code: string;
  flagURL: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

export type CountryType = {
  code: string;
  flagURL: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  currencies: string;
  languages: string[];
  borderCountries: string[];
};
