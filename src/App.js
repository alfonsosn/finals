import React, { Component } from 'react';
import {Button, ProgressBar} from 'react-mdl';
import ClassesTable from './functional/table.js'
import DaysButtons from './functional/days-button.js'
import four from './finals/four_hours.json'
import three from './finals/three_hours.json'
import single from './finals/single_hours.json'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: '',
      showOrHide: false,
      showClasses: false,
      three_hours: ["M,W", "M,TH", "M,W,TH", "T,W,F", "T,F", "T,TH", "W", "W,S"],
      four_hours: ["M,W", "M,TH", "T,F", "T,TH", "W,S"],
      single_hours: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      currSched: "",
      arrayToShow: [],
      classes: []
    }
  }

  showArray = (hours) => {
    this.setState({
      hours: hours,
      showOrHide: true,
      arrayToShow: this.getArray(hours)
    });
  }

  getClasses = (schedule) => {
    this.setState({
      showClasses: true,
      currSched: schedule,
      classes: this.getFinals()
    })
  }

  getArray = (hours) => {
    if (hours === 3)
      return this.state.three_hours
    if (hours === 4)
      return this.state.four_hours
    if (hours === 5)
      return this.state.single_hours
  }

  getFinals = () => {
    if (this.state.hours === 3)
      return three
    if (this.state.hours === 4)
      return four
    if (this.state.hours === 5)
      return single
  }

  getProgress = () => {
    if (this.state.showOrHide && this.state.showClasses) return 100
    if (this.state.showOrHide) return 66
    else return 33

  }


  render() {

    const showOrHide = this.state.showOrHide;
    const showClasses = this.state.showClasses;
    const arrayToShow = this.state.arrayToShow

    let weekButtons = null;
    let finalSchedTables = null;

    if (showOrHide) {
      weekButtons = <DaysButtons
                  args={arrayToShow}
                  func={this.getClasses}
                  />
    }

    if (showClasses) {
      finalSchedTables = <ClassesTable data={this.state.classes} sched={this.state.currSched}/>
    }

    return (
      <div  className="App"
            style={{margin: '40px 28px'}}>

        <ProgressBar  style={{width: 'auto'}} 
                      progress={this.getProgress()}/>

        <div>
          <h3> How many hours does your class regularly meet? </h3>
        </div>

        <Button
            raised
            ripple
            onClick={() => {this.showArray(3)}}
            >
                  3 hours
        </Button>
        <Button
            raised
            ripple
            onClick={() => {this.showArray(4)}}
            >
                  4 hours
        </Button>
        <Button
            raised
            ripple
            onClick={() => {this.showArray(5)}}
            >
                  100-120-150
        </Button>


        {weekButtons}
        {finalSchedTables}

      </div>
    );
  }
}


export default App;
