import React from 'react';
import './Country.css'
const Country = (props) => {
    const handleRemoveCountry = (name) => {
        props.onRemove(name)
    }
    const { name, flags, capital, population, area } = props.country;
    return (
        <article className='country'>
            <div>
                <img className='flag' src={flags.png} alt={name.common} />
                <h3>{name.common}</h3>
                <h3>Population : {population}</h3>
                <h3>Capital : {capital}</h3>
                <h3>Area : {area}</h3>
                <button className='btn' onClick={()=> handleRemoveCountry(name.common)}>Remove Country</button>
            </div>
        </article>
    );
};

export default Country;