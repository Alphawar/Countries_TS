import axios, { AxiosResponse } from "axios";
import { GET_ALL_COUNTRIES, searchCountryByName, filterCountriesByCode } from "./config";
import { ICountry, SelectedCountry } from '../types';

export const getCountries = async (
    setCountries: (value: ICountry[]) => void, 
    setFilteredCountries: (value: ICountry[]) => void, 
    setIsLoaded: (value: boolean) => void
    ): Promise<void> => {
    setIsLoaded(false)
    setTimeout(async () => {
        const response: AxiosResponse<ICountry[]> = await axios.get(GET_ALL_COUNTRIES)
        setCountries(response.data)
        setFilteredCountries(response.data)
        setIsLoaded(true)
    }, 3000)
}

export const getCountryByName = async (
    name: string, 
    setCountry: (value: SelectedCountry) => void, 
    setBorderCountries: (value: string[]) => void, 
    setIsLoaded: (value: boolean) => void, 
    setError: (value: string) => void
    ): Promise<void> => {
    setIsLoaded(false)
    setTimeout(async () => {
        try {
            const countryByName: AxiosResponse<SelectedCountry[]> = await axios.get(searchCountryByName(name))
            setCountry(countryByName.data[0])
            if(countryByName.data[0].borders) {
                const CountriesNeighbors: AxiosResponse<SelectedCountry[]> = await axios.get(filterCountriesByCode(countryByName.data[0]?.borders))
                console.log(CountriesNeighbors.data)
                setBorderCountries(CountriesNeighbors.data.map( country => country.name!))
                setIsLoaded(true)
            }
            setError('')
        } catch(e) {
            if(e instanceof Error) {
                setError(e.message)
            }
            setError('Unexpected error')
        }

    }, 3000)
}
