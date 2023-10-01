import {Dropdown} from "bootstrap";
import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = () => {

    const { currency, dispatch } = useContext(AppContext);

    const currencyOptions = [
        { symbol: "$", name: "Dollar" },
        { symbol: "£", name: "Pound" },
        { symbol: "€", name: "Euro" },
        { symbol: "₹", name: "Rupee" },
    ]    

    const handleCurrencyChange = (value)=>{
        dispatch({type:"CHG_CURRENCY", payload: value});
    }

    return (

        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "#93e499", borderColor: "#93e499" }}>
                Currency ({currency} {currencyOptions.find((x)=> {return x.symbol === currency}).name})
            </button>
            <ul className="dropdown-menu" style={{ background: "#93e499"}}>
                {currencyOptions.map((item, index) => {
                    return (
                        <div key={index} onClick={()=>{handleCurrencyChange(item.symbol)}}><a className="dropdown-item" href="#">{item.symbol} {item.name}</a></div>
                    )
                })}
            </ul>
        </div>

    );
};
export default CurrencyDropdown;