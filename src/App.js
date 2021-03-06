import React, { Component } from 'react';
import {ProgressBar} from 'react-mdl';
import ClassesTable from './functional/finals-table.js'
import DaysButtons from './functional/days-buttons.js'
import CreditsMenu from './functional/credits-buttons.js'
import PartiallyHidden from './layout/partially-hidden.js'
import UGRAD_FOUR_JSON from './finals/ugrad_four.json'
import UGRAD_THREE_JSON from './finals/ugrad_three.json'
import SINGLES_JSON from './finals/all_singles.json'
import './App.css';

const styles = {
  card: {
    width: 'auto',
    margin: '10px 0px'
  }
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: '',
      showDays: false,
      showFinalsTable: false,
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
      showDays: true,
      showFinalsTable: false,
      arrayToShow: this.getArray(hours),
    });
  }

  getClasses = (schedule) => {
    this.setState({
      showFinalsTable: true,
      currSched: schedule,
      classes: this.getFinals(),
    });
  }

  // HELPER FUNCTIONS
  getArray = (hours) => {
    switch (hours) {
      case 1:
        return this.state.single_hours;
        break;
      case 3:
        return this.state.three_hours;
        break;
      case 4:
        return this.state.four_hours;
        break;
    }
  }

  getFinals = () => {
    switch (this.state.hours) {
      case 1:
        return SINGLES_JSON;
        break;
      case 3:
        return UGRAD_THREE_JSON;
        break;
      case 4:
        return UGRAD_FOUR_JSON;
        break;
    }
  }

  getProgress = () => {
    if (this.state.showDays && this.state.showFinalsTable) return 100;
    else if (this.state.showDays) return 66;
    else return 33;
  }

  render() {

    return (
      <div className="App">
        <ProgressBar
              style={{width: 'auto'}}
              progress={this.getProgress()}/>

        <CreditsMenu
              style={styles.card}
              handleClick={(i) => this.showArray(i)}/>
        {
          this.state.showDays ?
              <DaysButtons  style={styles.card}
                            args={this.state.arrayToShow}
                            handleClick={this.getClasses}
                            hours={this.state.hours} />
              :
              <PartiallyHidden title="Days Your Class Meets"/>
        }
        {
          this.state.showFinalsTable ?
              <ClassesTable   style={styles.card}
                              schedule={this.state.currSched}
                              data={this.state.classes}
                              hours={this.state.hours}
                              />
              :
              <PartiallyHidden title="Possible Exam Date"/>
        }
      </div>
    );
  }
}


export default App;
