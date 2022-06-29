import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import classes from './SelectPanel.module.css';
import { SelectedValue } from '../../../types';
import { CSSObject } from '@emotion/serialize'

interface ISelectPanelProps {
    region: SelectedValue
    setRegion: (value: SelectedValue) => void
}

const SelectPanel: React.FC<ISelectPanelProps> = ({ region, setRegion }) => {

    const options: OptionsOrGroups<SelectedValue, GroupBase<SelectedValue>> = [
        {value: 'Africa', label: 'Africa'},
        {value: 'America', label: 'America'},
        {value: 'Asia', label: 'Asia'},
        {value: 'Europe', label: 'Europe'},
        {value: 'Oceania', label: 'Oceania'}
    ]
    
    const styles = {
        options: (styles: CSSObject, state: any): CSSObject => ({
            ...styles,
            cursor: 'pointer',
            color: 'var(--colors_text)',
            backgroundColor: 'var(--colors_bg)',
            "&:hover": {
                backgroundColor: state.isFocused ? "red" : "pink"
            },
        }),
        option: (styles: CSSObject, { isSelected }: {isSelected: boolean}): CSSObject => ({
            ...styles,
            backgroundColor: isSelected ? 'blue' : 'none',
        }),
        control: (styles: CSSObject): CSSObject => ({
            ...styles,
            backgroundColor: 'var(--coolors_ui_base)',
            color: 'var(--colors_text)',
            borderRaduis: '0.5rem',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--colors_shadow)',
            height: '50px',
        }),
        dropdownIndicator: (styles: CSSObject, state: any): CSSObject => ({
            ...styles,
            transition: '0.3s',
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)'
        }),
        singleValue: (styles: CSSObject): CSSObject => ({
            ...styles,
            color: "var(--colors_text)",
        }),
        menu: (styles: CSSObject): CSSObject => ({
            ...styles,
            backgroundColor: "var(--colors_bg)",
            color: "var(--colors_text)",
        }),
    }
    return (
        <Select 
            options={options}
            styles={styles}
            isClearable
            isSearchable={false}
            placeholder="Filter by region"
            value={region}
            onChange={e => setRegion(e)}
            className={classes.select}
        />
    );
};

export default SelectPanel;