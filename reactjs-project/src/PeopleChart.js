
import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";


function PeopleChart() {
  const [date_, setDate] = useState(null)
  const [first_, setFirst] = useState(null)
  const [second_, setSecond] = useState(null)

  const [filteredDate, setfDate] = useState(null)
  const [filteredFirst, setfFirst] = useState(null)
  const [filteredSecond, setfSecond] = useState(null)


  var date = []
  var first = []
  var second = []
  useEffect(async () => {
    const url = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/So_nguoi_tiem.json'
    const response = await fetch(url);
    const datapoints = await response.json()
    for (const objects of datapoints) {
      date.push(objects.date)
      first.push(objects['first_dose_injected'])
      second.push(objects['second_dose_injected'])
    }
    setDate(date)
    setFirst(first)
    setSecond(second)
    setfDate(date)
    setfFirst(first)
    setfSecond(second)

  }, []);
  function changeDate() {
    const date_2 = [...date_]
    const first_2 = [...first_]
    const second_2 = [...second_]
    const startdate = document.getElementById('startdate');
    const enddate = document.getElementById('enddate');
    const indexstartdate = date_2.indexOf(startdate.value)
    const indexenddate = date_2.indexOf(enddate.value)

    setfDate(date_2.slice(indexstartdate, indexenddate + 1))
    setfFirst(first_2.slice(indexstartdate, indexenddate + 1))
    setfSecond(second_2.slice(indexstartdate, indexenddate + 1))
  }
  return (
    <div>
      <div>
        
      </div>
      <div style = {{textAlign : 'center'}}>
        <input onChange={changeDate} type="date" id="startdate" defaultValue='2021-08-18' />
        <input onChange={changeDate} type="date" id="enddate" defaultValue='2021-11-18' />
      </div>
      <div>
        <Line
          data={{
            labels: filteredDate,
            datasets: [
              {
                type : "line",
                label: "Second Dose Injected",
                backgroundColor: "#b0c7c0",
                borderColor: "#2f7365",
                fill: true,
                tension: 1.0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#2f7365",
                pointHoverBorderColor: "white",
                pointHitRadius: 10,
                pointRadius: 1,
                data: filteredSecond,
              },
              {
                label: "First Dose Injected",
                data: filteredFirst,
                backgroundColor: "#d7e3e0",
                borderColor: "#63974b",
                fill: true,
                lineTension: 0.1,
                pointBackgroundColor: "#63974b",
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "#63974b",
                pointHoverBorderColor: "white",
                pointRadius: 1,
                pointHitRadius: 10

              }
            ],
          }
          }
          options={{
            interaction: {
                intersect: false,
                mode: 'index',
            },
            plugins: {
                title: {
                    display: true,
                    text: 'COVID-19 INJECTION PROCESS IN VIETNAM',
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
                    yAlign : "center",
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
        }} 
        />
      </div>
    </div>
    
  )
}

export default PeopleChart