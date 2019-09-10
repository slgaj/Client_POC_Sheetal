import React from "react";

export default function InputField(props) {
    return (

    <input 
        className={props.className}
        autoComplete={props.pr}
        name={props.name} 
        placeholder= {props.desc}
        type={props.type}
        onChange={(e)=>props.onChangeVal(e.target.value)}
     ></input>
    );
}
