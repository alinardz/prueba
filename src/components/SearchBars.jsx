import React from 'react';

export const SearchBars = ({onChange, value})=>{
    return(
        <div>
            <input type="text" name="amount" onChange={onChange} placeholder="amount" value={value}/>
            <input type="text" name="amount" onChange={onChange} placeholder="date"/>
            <input type="text" name="amount" onChange={onChange} placeholder="card last four digits"/>
        </div>
    )
}