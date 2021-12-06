
import React, { useEffect, useState } from 'react';
import { Line, Bar } from "react-chartjs-2";
import Horizontal from './Horizontal';
import CountUp from 'react-countup';


function PeopleChart() {
  const [date_people, setDatePeople] = useState(null)
  const [first_people, setFirstPeople] = useState(null)
  const [second_people, setSecondPeople] = useState(null)

  const [filteredDatePeople, setfDatePeople] = useState(null)
  const [filteredFirstPeople, setfFirstPeople] = useState(null)
  const [filteredSecondPeople, setfSecondPeople] = useState(null)

  const [average_vac, setAverageVac] = useState(null)
  const [date_vac, setDateVac] = useState(null)
  const [firstDose_vac, setFirstVac] = useState(null)
  const [secondDose_vac, setSecondVac] = useState(null)

  const [filteredDate_vac, setfDateVac] = useState(null)
  const [filteredFirst_vac, setfFirstVac] = useState(null)
  const [filteredSecond_vac, setfSecondVac] = useState(null)
  const [filteredAverage_vac, setfAverageVac] = useState(null)

  const [first_count, setfirst_count] = useState(null)
  const [second_count, setsecond_count] = useState(null)
  const [total_count, settotal_count] = useState(null)



  useEffect(async () => {
    var date_people_ = []
    var first_people_ = []
    var second_people_ = []

    var date_vac_ = []
    var firstDose_vac_ = []
    var secondDose_vac_ = []
    var average_vac_ = []


    const url_people = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/So_nguoi_tiem.json'
    const response_people = await fetch(url_people);
    const datapoints_people = await response_people.json()
    for (const objects of datapoints_people) {
      date_people_.push(objects.date)
      first_people_.push(objects['total_injected'])
      second_people_.push(objects['second_dose_injected'])
    }

    const url_vac = "https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/Vaccinations%20per%20day/Vaccinations%20per%20day3.json"
    const response_vac = await fetch(url_vac)
    const data_vac = await response_vac.json()
    for (const dataObj of data_vac) {
      date_vac_.push(dataObj['Date'])
      firstDose_vac_.push(dataObj['First dose injected'])
      secondDose_vac_.push(dataObj['Second dose injected'])
      average_vac_.push(dataObj['7-day average'])
    }



    setDatePeople(date_people_)
    setFirstPeople(first_people_)
    setSecondPeople(second_people_)
    setfDatePeople(date_people_)
    setfFirstPeople(first_people_)
    setfSecondPeople(second_people_)

    setAverageVac(average_vac_)
    setFirstVac(firstDose_vac_)
    setSecondVac(secondDose_vac_)
    setDateVac(date_vac_)

    setfDateVac(date_vac_)
    setfAverageVac(average_vac_)
    setfFirstVac(firstDose_vac_)
    setfSecondVac(secondDose_vac_)

    settotal_count(first_people_[first_people_.length - 1])
    setsecond_count(second_people_[second_people_.length - 1])
    setfirst_count(first_people_[first_people_.length - 1] - second_people_[second_people_.length - 1])

  }, []);

  function changeDate() {
    const date_people2 = [...date_people]
    const first_people2 = [...first_people]
    const second_people2 = [...second_people]

    const first_vac2 = [...firstDose_vac]
    const second_vac2 = [...secondDose_vac]
    const average_vac2 = [...average_vac]

    const startdate = document.getElementById('startdate');
    const enddate = document.getElementById('enddate');
    const indexstartdate = date_people2.indexOf(startdate.value)
    const indexenddate = date_people2.indexOf(enddate.value)

    setfDatePeople(date_people2.slice(indexstartdate, indexenddate + 1))
    setfFirstPeople(first_people2.slice(indexstartdate, indexenddate + 1))
    setfSecondPeople(second_people2.slice(indexstartdate, indexenddate + 1))

    setfDateVac(date_people2.slice(indexstartdate, indexenddate + 1))
    setfFirstVac(first_vac2.slice(indexstartdate, indexenddate + 1))
    setfSecondVac(second_vac2.slice(indexstartdate, indexenddate + 1))
    setfAverageVac(average_vac2.slice(indexstartdate, indexenddate + 1))
  }
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

      <div style={{ textAlign: 'center' }}>
        <input onChange={changeDate} type="date" id="startdate" defaultValue='2021-08-18' />
        <input onChange={changeDate} type="date" id="enddate" defaultValue="2021-11-18" />
      </div>
      <div>
        <div style={{ width: "50%", float: "left" }}>
          <Bar
            data={{
              labels: filteredDate_vac,
              datasets: [
                {
                  type: 'line',
                  label: "7-day average",
                  data: filteredAverage_vac,
                  backgroundColor: 'rgba(0,128,0,1)',
                  borderColor: 'rgba(0,128,0,1)'
                },
                {
                  label: "Second dose injected",
                  data: filteredSecond_vac,
                  backgroundColor: 'rgba(77,112,101, 0.8)'
                },
                {
                  label: "First dose injected",
                  data: filteredFirst_vac,
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
                  text: 'COVID-19 VACCINE INJECTED',
                  color: 'black',
                  font: { size: 14, weight: 'bold' }
                },
                legend: {
                  display: true,
                  reverse: true
                },
                tooltip: {
                  backgroundColor: 'rgb(0,0,0,0.75)',
                  titleColor: 'white',
                  yAlign: "center",
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
        <div style={{ width: "50%", float: "right" }}>
          <Line
            data={{
              labels: filteredDatePeople,
              datasets: [
                {
                  type: "line",
                  label: "Both doses injected",
                  backgroundColor: "#b0c7c0",
                  borderColor: "#2f7365",
                  fill: true,
                  tension: 1.0,
                  pointHoverRadius: 6,
                  pointHoverBackgroundColor: "#2f7365",
                  pointHoverBorderColor: "white",
                  pointHitRadius: 10,
                  pointRadius: 1,
                  data: filteredSecondPeople,
                },
                {
                  type: "line",
                  label: "Injected (first or both)",
                  data: filteredFirstPeople,
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
                  text: 'COVID-19 INJECTED POPULATION PROCESS',
                  color: 'black',
                  font: { size: 14, weight: 'bold' }
                },
                legend: {
                  display: true,
                  reverse: true
                },
                tooltip: {
                  backgroundColor: 'rgb(0,0,0,0.75)',
                  titleColor: 'white',
                  yAlign: "center",
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
    </div>

  )
}

export default PeopleChart