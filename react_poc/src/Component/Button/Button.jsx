import React from "react";
import './Button.scss'


export default function Button(props) {
    return (
    <button className= {props.class} type={props.type}>{props.value}</button>
    );
}