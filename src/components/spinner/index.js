import React from 'react';
import './style.css'

export const Spinner = ({color = '#fff'}) => {

    return (
        <div className="wrap-spinner" style={{color}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};