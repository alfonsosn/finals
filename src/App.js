import React, { Component } from 'react';
import Greeting from './functional/greeting-card.js'
import ClassesTable from './functional/finals-table.js'
import DaysButtons from './functional/days-buttons.js'
import HoursMenu from './functional/hours-buttons.js'
import UGRAD_FOUR_JSON from './finals/ugrad_four.json'
import UGRAD_THREE_JSON from './finals/ugrad_three.json'
import SINGLES_JSON from './finals/all_singles.json'
import './App.css';


const styles = {
  card: {
      margin: '40px 28px',
      paddingBottom: '28px',
      backgroundColor: 'white',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)',
    }
};


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
    };
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
    });
  }

  // HELPER FUNCTIONS
  getArray = (hours) => {
    if (hours === 3)
      return this.state.three_hours;
    if (hours === 4)
      return this.state.four_hours;
    if (hours === 5)
      return this.state.single_hours;
  }

  getFinals = () => {
    if (this.state.hours === 3)
      return UGRAD_THREE_JSON;
    if (this.state.hours === 4)
      return UGRAD_FOUR_JSON;
    if (this.state.hours === 5)
      return SINGLES_JSON;
  }

  getProgress = () => {
    if (this.state.showOrHide && this.state.showClasses) return 100;
    if (this.state.showOrHide) return 66;
    else return 33;
  }


  render() {

    const showOrHide = this.state.showOrHide;
    const showClasses = this.state.showClasses;
    const arrayToShow = this.state.arrayToShow;

    let weekButtons = null;
    let finalSchedTables = null;

    // this can be refactored

    if (showOrHide) {
      weekButtons = <DaysButtons
                        args={arrayToShow}
                        func={this.getClasses}
                        style={styles.card}/>
    }

    if (showClasses) {
      finalSchedTables = <ClassesTable
                            style={styles.card}
                            data={this.state.classes}
                            sched={this.state.currSched}/>
    }

    return (
      <div  className="App">
        <HoursMenu handleClick={(i) => this.showArray(i)}/>
        {weekButtons }
        {finalSchedTables }
      </div>
    );
  }
}


export default App;
