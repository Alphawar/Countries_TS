import React from 'react';
import classes from './SearchPanel.module.css';
import { IoSearch } from 'react-icons/io5';

interface ISearchPanelProps {
    search: string
    setSearch: (value: string) => void
}

const SearchPanel: React.FC<ISearchPanelProps> = ({ search, setSearch }) => {
    return (
        <label className={classes.inputContainer}>
            <IoSearch />
            <input 
                placeholder='Search for a country...'
                type="search" 
                value={search}
                className={classes.input}
                onChange={e => setSearch(e.target.value)}
            />
        </label>
    );
};

export default SearchPanel;