import React, { useEffect, useState } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { Theme } from '../../types';

const Header: React.FC = () => {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = (): void => setTheme(theme === 'light' ? 'dark' : 'light')
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <header className={classes.header}>
            <div className={classes.header__container}>
                <div className={classes.header__wrapper}>
                    <Link to="/" className={classes.header__title}>Where is the world?</Link>
                    <div className={classes.header__themeSwitcher} onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px"/>
                        ) : (
                            <IoMoon size="14px"/>
                        )}
                     <span className={classes.header__themeTitle}>{theme} Theme</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;