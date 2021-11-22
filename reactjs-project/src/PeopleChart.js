import React from 'react';
import {Line} from "react-chartjs-2";

class PeopleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: null, first : null, second : null}
  }   

  async componentDidMount() {
    const url = 'https://raw.githubusercontent.com/VinceTruong/Visual_Analysis_Project/thanhnguyen/Data/So_nguoi_tiem.json';
    const response = await fetch (url);
    const datapoints = await response.json();
    const date_ = datapoints.map(
      function (index) {
        return (index.date)
      }
    );
    const second_ = datapoints.map(
      function (index) {
        return (index.second_dose_injected)
      }
    );
    const first_ = datapoints.map(
      function (index) {
        return (index.first_dose_injected)
      }
    )
    this.setState ({date: date_}); 
    this.setState ({first: first_});
    this.setState ({second : second_})
    console.log (this.state.date)

  };
  render () {
    return (
      <div>
        <h1 style ={{textAlign: 'center'}}>COVID-19 INJECTION PROCESS IN VIETNAM</h1>
        <p style = {{textAlign: 'center'}}>(Unit: People)</p>
        <Line
          data = {{
            labels : this.state.date,
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
                data: this.state.second,
              },
              {
                label: "First Dose Injected",
                data: this.state.first,
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
}
export default PeopleChart

