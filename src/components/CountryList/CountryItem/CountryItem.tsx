import React from 'react';
import classes from './CountryItem.module.css';
import { ICountryInfo } from '../../../types';

interface ICountryItemProps {
    country: ICountryInfo
    handleClick: () => void
}

const CountryItem: React.FC<ICountryItemProps> = ({country, handleClick}) => {

    const {name, img, info = []} = country

    return (
        <article onClick={handleClick} className={classes.country}>
            <img src={img} alt={name} className={classes.country__img}/>
            <div className={classes.card__body}>
                <h3 className={classes.card__title}>{name}</h3>
                <ul className={classes.card__list}>
                    {info.map( el => (
                        <li 
                            className={classes.card__item}
                            key={el.title}
                        >
                            <strong>{el.title}:</strong> {el.description}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default CountryItem;