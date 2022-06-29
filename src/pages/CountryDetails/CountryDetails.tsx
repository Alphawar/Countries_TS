import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavigateFunction, Params } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { getCountryByName } from '../../API';
import Loader from '../../components/Loader/Loader';
import classes from './CountryDetails.module.css';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import { SelectedCountry } from '../../types';

const CountryDetails: React.FC = () => {

    const { name } = useParams<Readonly<Params<string>>>()
    const history: NavigateFunction = useNavigate()
    const [country, setCountry] = useState<SelectedCountry>({})
    const [borderCountries, setBorderCountries] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setErorr] = useState<string>('')

    useEffect(() => {
        getCountryByName(name!, setCountry, setBorderCountries, setIsLoaded, setErorr)
    }, [name])

    useEffect(() => {
        error && history(`/NotFoundPage`)
        //eslint-disable-next-line
    }, [error])

    return (
        <>
        {isLoaded ? 
        <div>
            <button className={classes.backButton} onClick={() => history(-1)}>
                <IoArrowBack /> Back
            </button>
            {country && <CountryInfo country={country} borderCountries={borderCountries}/>}
        </div>
        : <Loader/>}
        </>
    );
};

export default CountryDetails;