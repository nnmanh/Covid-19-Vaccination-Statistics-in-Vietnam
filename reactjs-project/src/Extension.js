import React from "react";
import Map from "./Map";
import BarChart from "./BarChart";
import Header2 from "./Header2";
import Dataset from './Dataset'

const Extension = () => {
    return (
        <div>
            <Header2/>
            <Dataset/>
            <Map/>
            <BarChart/>
        </div>
    )
}

export default Extension