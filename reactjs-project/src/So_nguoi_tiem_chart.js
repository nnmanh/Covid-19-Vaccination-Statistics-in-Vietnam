import React from 'react';
import {Line} from "react-chartjs-2";

class App extends React.Component {
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
                data: this.state.second,
                backgroundColor: "#427265",
                fill: true,
                borderColor: "white"
              },
              {
                label: "First Dose Injected",
                data: this.state.first,
                backgroundColor: '#6f9554',
                
                fill: true,
                borderColor: "black"
              }
              
            ]} 
          }
    
      
    /> 
    </div>
    )
  }
}
export default App

