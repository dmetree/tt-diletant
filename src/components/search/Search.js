import React from 'react';

import close from './../../assets/imgs/close.svg';
import s from './Search.module.css';

function Search() {
    return (
        <div className={s.componentSearch}>
            <div className={s.search}>
                <input className={s.input} placeholder="Крым"></input>
                <img className={s.closeimg}src={close} alt={"close"} /> 
            </div>
        </div>
    )
}

export default Search
