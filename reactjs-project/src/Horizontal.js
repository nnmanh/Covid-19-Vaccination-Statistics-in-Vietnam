import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'


const Horizontal = () => {
    const [date, setDate] = useState(null)
    const [firstDose, setFirst] = useState(null)
    const [secondDose, setSecond] = useState(null)
    const [totalDose, setTotal] = useState(null)

    const [filteredDate, setfDate] = useState(null)
    const [filteredFirst, setfFirst] = useState(null)
    const [filteredSecond, setfSecond] = useState(null)
    const [filteredTotal, setfTotal] = useState(null)

    useEffect(async () => {

        var date_ = []
        var firstDose_ = []
        var secondDose_ = []
        var totalDose_ = []

        const url = "https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/So_nguoi_tiem.json"
        const response = await fetch(url)
        const data = await response.json()
        for (const dataObj of data) {
            date_.push(dataObj.date)
            totalDose_.push(parseInt((dataObj.total_injected)/98000000*100).toFixed(2))
            secondDose_.push(parseInt((dataObj.second_dose_injected)/98000000*100).toFixed(2))
            firstDose_.push(((parseInt(dataObj.total_injected)-parseInt(dataObj.second_dose_injected))/98000000*100).toFixed(2))

        }
        setTotal(totalDose_)
        setSecond(secondDose_)
        setFirst(firstDose_)
        setDate(date_)

        setfDate(['2021-11-11'])
        setfTotal([64.9])
        setfSecond([33.5])
        setfFirst([31.4])
    },
        []
    );

    function changeDate() {
        const date_2 = [...date]
        const first_2 = [...firstDose]
        const second_2 = [...secondDose]
        const total_2 = [...totalDose]

        const startdate = document.getElementById('startdate_');
        const indexstartdate = date_2.indexOf(startdate.value)

        setfDate(date_2.slice(indexstartdate, indexstartdate + 1))
        setfFirst(first_2.slice(indexstartdate, indexstartdate + 1))
        setfSecond(second_2.slice(indexstartdate, indexstartdate + 1))
        setfTotal(total_2.slice(indexstartdate, indexstartdate + 1))

        console.log(filteredDate)
    }
    return (
        <div style = {{backgroundColor: "rgb(238, 243, 244)", padding: "70px"}}>
        <div >
            <div style = {{textAlign: 'center'}}>
                <input onChange={changeDate} type="date" id="startdate_" defaultValue='2021-11-11' />
            </div>
            <div className="graph_item">
                <Bar
                    data={{
                        labels: filteredDate,
                        datasets: [
                            {
                                label: "Share of people fully vaccinated against COVID-19",
                                data: filteredSecond,
                                backgroundColor: 'rgb(66, 174, 131)'
                            },
                            {
                                label: "Share of people only partly vaccinated against COVID-19",
                                data: filteredFirst,
                                backgroundColor: 'rgb(2, 121, 104)'
                            },

                        ]
                    }}
                    plugins= {[ChartDataLabels]}
                    options = {{
                        indexAxis: 'y',
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    font: {size: 20, weight: "650"}
                                    },
                                grid:{
                                    display : false
                                    },
                                min : 0,
                                max : 100
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    font: {size: 20, weight: "bold"}
                                    },
                                display: false
                                
                            },
                            xAxes: [{
                                categorySpacing: 0
                            }],
                            borderWidth: 1,
                            barThickness: 18
                        },
                        aspectRatio : 5,
                        plugins: {
                            datalabels: {
                               display: true,
                               color: "white",
                               font: {size:25, weight:"bold"}
                            },
                            legend: {
                                font: {weight: "bold"}
                             },
                             title:{
                                display: true,
                                text: 'Share of people vaccinated against COVID-19 (%)',
                                color: '#black',
                                font: {size: 40, weight: 'bold',family: "Times New Roman, Times, serif"}
                            },
                            subtitle: {
                                display: true,
                                text: 'Assuming population of Vietnam is 98 000 000',
                                position: 'bottom',
                                align: "end",
                                font: {size:20, style: "italic"}
                            }
                            
                         }
                      
                        
                    }}
                     />
            </div>
        </div>
        </div>
    )
}
export default Horizontal