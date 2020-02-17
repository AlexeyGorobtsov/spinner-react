import React, {useEffect} from 'react';
import './style.css'

export const Spinner = ({color = '#fff'}) => {
    useEffect(() => {
        const style = document.head.appendChild(document.createElement('style'));
        style.setAttribute('type', 'text/css');
        style.innerHTML = `.wrap-spinner div:after {background: ${color};}`;
    }, []);

    return (
        <div className="wrap-spinner">
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