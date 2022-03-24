import React from 'react'
import { fetchcountry, fetchInfoEachcountry } from '../../api/api.js';
import style from './search.module.css';
import { useState, useEffect } from 'react';
export default function Search({ showcountry }) {


    let [country, setCountry] = useState([]);

    useEffect(() => {
        const countriesfunc = async () => {
            setCountry(await fetchcountry());
        };
        countriesfunc();

    }, [])

    return (
        <div className='search'>
            <select className={style.searchSelect} onChange={(e) => showcountry(e.target.value)}>
                {country.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>

        </div>
    )
}
