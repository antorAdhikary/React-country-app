import React from 'react';
import {v4 as uuidv4} from 'uuid';
import Country from '../Country/Country';
import './Countries.css'
const Countries = (props) => {
    
    return (
        <section className='countries'>
            {
                props.countries.map((country) => {
                    const newCountry = {country, id : uuidv4()}
                    return <Country onRemove={props.onRemove} {...newCountry} key={newCountry.id}/>
                })
            }
        </section>
    );
};

export default Countries;