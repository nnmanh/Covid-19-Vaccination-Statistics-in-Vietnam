import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const VaccinationsChart = () => {
    const [average, setAverage] = useState(null)
    const [date, setDate] = useState(null)
    const [firstDose, setFirst] = useState(null)
    const [secondDose, setSecond] = useState(null)

    const [filteredDate, setfDate] = useState(null)
    const [filteredFirst, setfFirst] = useState(null)
    const [filteredSecond, setfSecond] = useState(null)
    const [filteredAverage, setfAverage] = useState(null)

    useEffect(async () => {

        var date_ = []
        var firstDose_ = []
        var secondDose_ = []
        var average_ = []

        const url = "https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/Vaccinations%20per%20day/Vaccinations%20per%20day3.json"
        const response = await fetch(url)
        const data = await response.json()
        for (const dataObj of data) {
            date_.push(dataObj['Date'])
            firstDose_.push(dataObj['First dose injected'])
            secondDose_.push(dataObj['Second dose injected'])
            average_.push(dataObj['7-day average'])
        }
        setAverage(average_)
        setFirst(firstDose_)
        setSecond(secondDose_)
        setDate(date_)

        setfDate(date_)
        setfAverage(average_)
        setfFirst(firstDose_)
        setfSecond(secondDose_)
    },
        []
    );

    function changeDate() {
        const date_2 = [...date]
        const first_2 = [...firstDose]
        const second_2 = [...secondDose]
        const average_2 = [...average]

        const startdate = document.getElementById('startdate_');
        const enddate = document.getElementById('enddate_');
        const indexstartdate = date_2.indexOf(startdate.value)
        const indexenddate = date_2.indexOf(enddate.value)

        setfDate(date_2.slice(indexstartdate, indexenddate + 1))
        setfFirst(first_2.slice(indexstartdate, indexenddate + 1))
        setfSecond(second_2.slice(indexstartdate, indexenddate + 1))
        setfAverage(average_2.slice(indexstartdate, indexenddate + 1))
        console.log(filteredDate)
    }
    return (
        <div>
            <div style = {{textAlign: 'center'}}>
                <input onChange={changeDate} type="date" id="startdate_" defaultValue='2021-08-18' />
                <input onChange={changeDate} type="date" id="enddate_" defaultValue='2021-11-18' />
            </div>
            <div>
                <Bar
                    data={{
                        labels: filteredDate,
                        datasets: [
                            {
                                type: 'line',
                                label: "7-day average",
                                data: filteredAverage,
                                backgroundColor: 'rgba(0,128,0,1)',
                                borderColor: 'rgba(0,128,0,1)'
                            },
                            {
                                label: "Second dose injected",
                                data: filteredSecond,
                                backgroundColor: 'rgba(77,112,101, 0.8)'
                            },
                            {
                                label: "First dose injected",
                                data: filteredFirst,
                                backgroundColor: 'rgba(119,147,91, 0.8)'
                            }
                        ]
                    }}
                    options={{
                        interaction: {
                            intersect: false,
                            mode: 'index',
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'COVID-19 VACCINE DOSES PER DAY',
                                color: 'black',
                                font: { size: 25, weight: 'bold' }
                            },
                            legend: {
                                display: true,
                                reverse: true
                            },
                            tooltip: {
                                backgroundColor: 'rgb(0,0,0,0.75)',
                                titleColor: 'white',
                                yAlign: 'bottom',
                                reverse: true
                            },
                            datalabels: {
                                color: 'white'
                            }
                        },
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    font: { weight: "650" }
                                },
                                grid: {
                                    display: false,
                                    borderColor: 'grey',
                                }
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    font: { weight: "bold" }
                                },
                                title: {
                                    display: true,
                                    text: 'Doses',
                                    color: 'black',
                                    font: { size: 15, weight: 'bold', lineHeight: 1.2 }
                                },
                                grid: {
                                    color: 'darkgrey',
                                    borderDash: [8, 4]
                                }
                            }
                        }
                    }} />
            </div>
        </div>
    )
}
export default VaccinationsChart