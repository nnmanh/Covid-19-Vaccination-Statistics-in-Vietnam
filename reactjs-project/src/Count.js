import CountUp from 'react-countup';
import React, {useState, useEffect} from 'react';


function Count() {
    const [total_count, set_total] = useState (null)
    const [second_count, set_second] = useState (null)
    const [first_count, set_first] = useState (null)

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
            <div style={{ fontSize: 40, textAlign: "center", display: 'inline-flex', backgroundColor: 'green', color: 'white' }}>

                <div style={{ marginRight: 200, marginLeft: 100 }}>
                    <h1 style={{ fontSize: 14 }}>Injected Population</h1>
                    <CountUp start={0} end={total_count} duration={2} />
                </div>
                <div style={{ marginRight: 200 }}>
                    <h1 style={{ fontSize: 14 }}>First Dose Injected Population</h1>
                    <CountUp start={0} end={first_count} duration={2} />
                </div>
                <div style={{ marginRight: 100 }}>
                    <h1 style={{ fontSize: 14 }}>Second Dose Injected Population</h1>
                    <CountUp start={0} end={second_count} duration={2} />
                </div>
            </div>
        </div>
    )
}

export default Count

