import React from "react";
import './Label.scss'

export default function Label(props) {
    return (
        <label 
        htmlFor={props.for}>
        {props.val}
        </label>
    );
}