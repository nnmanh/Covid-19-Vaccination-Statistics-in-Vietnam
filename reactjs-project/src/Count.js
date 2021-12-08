import CountUp from 'react-countup';
import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function Count() {
    const [total_count, set_total] = useState (null)
    const [second_count, set_second] = useState (null)
    const [first_count, set_first] = useState (null)
    
    useEffect (() => {
        Aos.init ({duration : 3000})
    })

    useEffect( async () => {
        const url = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/So_nguoi_tiem.json'
        const response = await fetch (url)
        const data = await response.json()
        const data_count = data[data.length - 1]

        set_total (data_count['total_injected'])
        set_second (data_count['second_dose_injected'])
        set_first (data_count['total_injected'] - data_count['second_dose_injected'] )
    })
    console.log(first_count)

    return (
      
        <div>
            <div style={{ fontSize: 50, textAlign: "center", display: 'inline-flex', color: 'orange', fontFamily: "Arial" }}>

                <div data-aos = "fade-left" style={{ marginRight: 200, marginLeft: 30 }}>
                    <h1 style={{ fontSize: 18, lineHeight: "1.6", color: "white"}}>Total Dose Injected </h1>
                    <CountUp style = {{fontFamily: "helvetica"}} start={total_count/2} end={total_count} duration={3} separator="," />
                </div>
                <div data-aos = "fade-up" style={{ marginRight: 200 }}>
                    <h1 style={{ fontSize: 18, lineHeight: "1.6" ,color: "white"}}>First Dose Injected </h1>
                    <CountUp style = {{fontFamily: "helvetica"}} start={first_count/2} end={first_count} duration={3} separator="," />
                </div>
                <div data-aos = "fade-right" style={{ marginRight: 100 }}>
                    <h1 style={{ fontSize: 18, lineHeight: "1.6",color: "white" }}>Second Dose Injected </h1>
                    <CountUp style = {{fontFamily: "helvetica"}} start={second_count/2} end={second_count} duration={3} separator="," />
                </div>
            </div>
        </div>
    )
}

export default Count

