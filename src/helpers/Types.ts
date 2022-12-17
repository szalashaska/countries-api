export type ApiCountriesType = {
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[] | undefined;
};

export type CountriesType = {
  flagURL: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};
