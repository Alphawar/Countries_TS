const BASE_URL: string = 'https://restcountries.com/v2/';

export const GET_ALL_COUNTRIES: string = `${BASE_URL}all?fields=name,capital,flags,population,region`;
export const searchCountryByName = (name: string): string => `${BASE_URL}name/${name}`
export const filterCountriesByCode = (codes: string[]): string => `${BASE_URL}alpha?codes=${codes?.join(',')}`