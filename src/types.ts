export interface ICountry {
    capital: string
    flags: IFlags
    independent: boolean
    name: string
    population: number
    region: string
}

interface IFlags {
    svg?: string
    png?: string
}

export type Theme = 'light' | 'dark'

export interface ICountryInfo {
    img: string
    name: string
    info: IInfo[]
}

interface IInfo {
    title: string
    description: string
}

interface ISelectedCountryResponse {
    alpha2Code: string
    alpha3Code: string
    altSpellings: string[]
    area: number
    borders: string[]
    callingCodes: string[]
    capital: string
    cioc: string
    currencies: ICurrencies[]
    demonym: string
    flag: string
    flags: IFlags[]
    independent: boolean
    languages: ILanguages[]
    latlng: number[]
    name: string
    nativeName: string
    numericCode: string
    population: number
    region: string
    regionalBlocs: IRegionalBlocs[]
    subregion: string
    timezones: string[]
    topLevelDomain: string[]
    translations: ITranslations[]
}

export type SelectedCountry = Partial<ISelectedCountryResponse>

interface ICurrencies {
    code: string
    name: string
    symbol: string
}

interface ILanguages {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}

interface IRegionalBlocs {
    acronym: string
    name: string
}

interface ITranslations {
    br: string
    de: string
    es: string
    fa: string
    fr: string
    hr: string
    hu: string
    it: string
    ja: string
    nl: string
    pt: string
}

interface ISelectChange {
    value: string
    label: string
}

export type SelectedValue = ISelectChange | null