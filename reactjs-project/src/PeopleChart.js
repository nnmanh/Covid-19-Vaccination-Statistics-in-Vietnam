
import React, {useEffect, useState} from 'react';
import {Line} from "react-chartjs-2";


function PeopleChart() {
  const [date_, setDate] = useState(null)
  const [first_, setFirst] = useState(null)
  const [second_, setSecond] = useState(null)
  var date = []
  var first = []
  var second = []
  useEffect (async () => {
    const url = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/thanhnguyen/Data/So_nguoi_tiem.json'
    const response = await fetch (url);
    const datapoints = await response.json()
    for (const objects of datapoints) {
      date.push(objects.date)
      first.push (objects['first_dose_injected'])
      second.push (objects['second_dose_injected'])
    }
    setDate (date)
    setFirst (first)
    setSecond (second) 
  }, []);
    return (
    <div>
      <h1 style ={{textAlign: 'center'}}>COVID-19 INJECTION PROCESS IN VIETNAM</h1>
      <p style = {{textAlign: 'center'}}>(Unit: People)</p>
      <Line
        data = {{
          labels : date_,
          datasets : [
            {
              label: "Second Dose Injected",
              backgroundColor: "#FFC7A1",
              fill: true,
              tension: 0.4,
              borderColor: "orange",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter', 
              pointBorderColor: "orange",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 6,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba (75, 192, 192, 1)",
              pointHoverBorderColor: "rgba (220, 220, 220, 1)",
              pointRadius: 1,
              pointHitRadius: 10,
              data: second_,
            },
            {
              label: "First Dose Injected",
              data: first_,
              backgroundColor: "#A1D7FF",
              fill: true,
              lineTension: 0.1,
              borderColor: "blue",
              borderDash: [],
              borderDashOffset: 0.0,
              pointBorderColor: "blue",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 6,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba (75, 72, 192, 1)",
              pointHoverBorderColor: "black",
              pointRadius: 1,
              pointHitRadius: 10
              
            }
        ],
        }
      }  
            
  /> 
  </div>
  )
}
  
export default PeopleChart