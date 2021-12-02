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
    const url = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/main/Data/So_nguoi_tiem.json'
    const response = await fetch (url);
    const datapoints = await  response.json()
    for (const objects of datapoints) {
      date.push(objects.date)
      first.push (objects['first_dose_injected'])
      second.push (objects['second_dose_injected'])
    }
    setDate (date)
    setFirst (first)
    setSecond (second) 
  }, []); 
  const [filteredDate, setfDate] = useState (null)
  const [filteredFirst, setfFirst] = useState(null)
  const [filteredSecond, setfSecond] = useState (null)

  function changeDate () {
      const date_2 = [...date_]
      const first_2 = [...first_]
      const second_2 = [...second_]
      const startdate = document.getElementById ('startdate');
      const enddate = document.getElementById ('enddate');
      const indexstartdate = date_2.indexOf (startdate.value)
      const indexenddate = date_2.indexOf (enddate.value)

      setfDate(date_2.slice(indexstartdate, indexenddate +1))
      setfFirst(first_2.slice(indexstartdate, indexenddate+1))
      setfSecond(second_2.slice(indexstartdate, indexenddate+1))
    }
    return (
    <div>
      <div>
      <h1 style ={{textAlign: 'center'}}>COVID-19 INJECTION PROCESS IN VIETNAM</h1>
      <p style = {{textAlign: 'center'}}>(Unit: People)</p>
      </div>
      <div style = {{tabSize: "200", alignItems: "right"}}>
        
        <input onChange = {changeDate}  type = "date" id = "startdate" defaultValue = '2021-08-18'/>
        <input onChange =  {changeDate} type =  "date" id = "enddate" defaultValue = '2021-11-18'/>  
      </div>
      <div style= {{justifyContent: 'center', alignItems: 'center',  width:"90%", height:"350px"}}>
      <Line
        data = {{
          labels : filteredDate,
          datasets : [
            {
              label: "Second Dose Injected",
              backgroundColor: "#FFC7A1",
              fill: false,
              tension: 0.4,
              borderColor: "orange",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.9,
              borderJoinStyle: 'miter', 
              pointBorderColor: "orange",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 6,
              pointHoverRadius: 6,
              pointHoverBackgroundColor: "rgba (75, 192, 192, 1)",
              pointHoverBorderColor: "rgba (220, 220, 220, 1)",
              pointRadius: 2,
              pointHitRadius: 10,
              data: filteredSecond,
            },
            {
              label: "First Dose Injected",
              data: filteredFirst,
              backgroundColor: "#A1D7FF",
              fill: false,
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
      options = {{
        animation : {
          type: "number",
          easing : 'linear',
        },
        layout : {
          padding : {
            top: 20,
            left: 100
          }
        }
      }}        
  />
  </div>
  </div>
  )
}
  
export default PeopleChart