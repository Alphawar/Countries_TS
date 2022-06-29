import React from 'react';
import classes from './CountryInfo.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { SelectedCountry } from '../../types';

interface ICountryInfoProps {
    country: SelectedCountry 
    borderCountries: string[]
}

const CountryInfo: React.FC<ICountryInfoProps> = ({country, borderCountries}) => {

    const history: NavigateFunction = useNavigate()

    return (
        <section className={classes.info}>
            <img className={classes.info__flag} src={country.flag} alt={country.name} />
            <div>
                <h1 className={classes.info__title}> {country.name} </h1>
                <div className={classes.info__wrapper}>
                    <ul className={classes.info__main}>
                        <li><strong>Native Name:</strong> {country.nativeName} </li>
                        <li><strong>Population:</strong> {country.population} </li>
                        <li><strong>Region:</strong> {country.region} </li>
                        <li><strong>Sub region:</strong> {country.subregion} </li>
                        <li><strong>Capital:</strong> {country.capital} </li>
                    </ul>
                    <ul className={classes.info__additional}>
                        <li><strong>Top level Domain:</strong>
                        {country.topLevelDomain?.map( el => 
                            <span key={el}> {el} </span>
                        )}</li>
                        <li><strong>Currency:</strong>
                        {country.currencies!?.map( el => 
                            <span key={el.code}> {el.name} </span>
                        )}</li>
                        <li><strong>Languages:</strong>
                        {country.languages!?.map( el => 
                            <span key={el.name}> {el.name} </span>
                        )}</li>
                    </ul>
                    <div className={classes.info__countries}>
                        <strong>Border Countries</strong>
                        {!borderCountries.length ? (
                            <span>There is no border countries</span>
                        ) :
                        (
                            <div className={classes.info__countries_container}>
                                {borderCountries.map( el => (
                                    <span onClick={() => history(`/country/${el}`)} key={el} className={classes.info__country}> {el} </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CountryInfo;