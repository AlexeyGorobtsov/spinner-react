import React from "react";
import {Spinner} from "./components/spinner";

import "./styles.css";
import {RoundSpinner} from "./components/round-spinner";

export default function App() {
    return (
        <div className="App">
            <h1>Spinner</h1>
            <Spinner color={'red'}/>

            <div className={'center'}>
                <button>
                    <RoundSpinner size={'2px'} />
                    <span>click</span>
                </button>
            </div>
        </div>
    );
}
