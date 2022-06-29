import React, { useEffect, useState } from 'react';
import classes from './Controls.module.css';
import SearchPanel from './SearchPanel/SearchPanel';
import SelectPanel from './SelectPanel/SelectPanel';
import { SelectedValue } from '../../types';

interface IControlsProps {
    handleSearch: (search: string, region: string | undefined) => void
}

const Controls: React.FC<IControlsProps> = ({handleSearch}) => {

    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<SelectedValue>(null)

    useEffect(() => {
        const selectedRegion = region?.value
        handleSearch(search, selectedRegion)
        //eslint-disable-next-line
    }, [search, region])

    return (
        <div className={classes.wrapper}>
            <SearchPanel search={search} setSearch={setSearch}/>
            <SelectPanel 
                region={region}
                setRegion={setRegion}
            />
        </div>
    );
};

export default Controls;