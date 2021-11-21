import React, {useEffect, useState} from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

export const VaccinationsChart = () => {
    const [chartdata, setchartdata] = useState()

    const chart=()=> {

        var date = []
        var firstDose = []
        var secondDose = []
        var average = []

        axios.get("https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/anhngo/Data/Vaccinations%20per%20day/Vaccinations%20per%20day.json")
        .then(res =>{
            for (const dataObj of res.data) {
                date.push(dataObj.Date)
                firstDose.push(dataObj['First dose injected'])
                secondDose.push(dataObj['Second dose injected'])
                average.push(dataObj['7-day average'])
            }
            setchartdata({
                labels:date,
                datasets:[
                    {
                        type: 'line',
                        label: "7-day average",
                        data: average,
                        backgroundColor: 'rgba(0,128,0,1)',
                        borderColor: 'rgba(0,128,0,1)'
                    },
                    {
                        label: "Second dose injected",
                        data: secondDose,
                        backgroundColor:'rgba(77,112,101, 0.8)'
                    },
                    {
                        label: "First dose injected",
                        data: firstDose,
                        backgroundColor: 'rgba(119,147,91, 0.8)'
                    }
                ]
                })
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div>
            <Bar data={chartdata}
                options={{
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        title:{
                            display: true,
                            text: 'COVID-19 VACCINE DOSES PER DAY',
                            color: 'black',
                            font: {size: 25, weight: 'bold'}
                        },
                        legend: {
                            display: true,
                            reverse: true
                         },
                         tooltip:{
                             backgroundColor:'rgb(0,0,0,0.75)',
                             titleColor: 'white',
                             yAlign: 'bottom',
                             reverse: true
                         },
                         datalabels:{
                             color: 'white'
                         }
                    },
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true,
                            ticks: {
                                font: {weight: "650"}
                                },
                            grid:{
                                display: false,
                                borderColor: 'grey',
                                }
                            },
                        y: {
                            stacked: true,
                            ticks: {
                                font: {weight: "bold"}
                                },
                            title: {
                                display: true,
                                text: 'Doses',
                                color: 'black',
                                font: {size: 15, weight: 'bold', lineHeight: 1.2}
                                },
                            grid:{
                                color: 'darkgrey',
                                borderDash: [8, 4]
                                }
                            }
                        }
                    }}/>
        </div>
    )
}

