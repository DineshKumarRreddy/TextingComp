import React from "react";
import './InputText.css';
export const InputText = React.memo(({type, onChange, placeholder, value}) => {
    return <>
        <input
            type={type} 
            onChange={onChange} 
            placeholder={placeholder} 
            value={value}
        />
    </>
});