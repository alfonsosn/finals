import React, { Component } from 'react';
import { Button, DataTable, TableHeader } from 'react-mdl';
import four from './finals/four_hours.json'
import three from './finals/three_hours.json'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: '',
      showOrHide: false,
      showClasses: false,
      three_hours: ["M,W", "M,Th", "M,W,Th", "T,W,F", "T,F", "T,Th", "W", "W,S"],
      four_hours: ["M,W", "M,Th", "T,F", "T,Th", "W,S"],
      currSched: "",
      arrayToShow: [],
      classes: []
    }
  }

  showArray = (hours) => {
    this.setState({
      hours: hours,
      showOrHide: true,
      arrayToShow: (hours === 3) ? this.state.three_hours : this.state.four_hours
    });
  }

  getClasses = (schedule) => {
    this.setState({
      showClasses: true,
      currSched: schedule,
      classes: (this.state.hours === 3) ? three : four,
    })
  }

  render() {

    const showOrHide = this.state.showOrHide;
    const showClasses = this.state.showClasses;
    const arrayToShow = this.state.arrayToShow

    let button = null;
    let list = null;

    if (showOrHide) {
      button = <MoreButtons
                  args={arrayToShow}
                  func={this.getClasses}
                  />
    }

    if (showClasses) {
      list = <Classes data={this.state.classes} sched={this.state.currSched}/>
    }

    return (
      <div className="App">
        <div>
          <h1> Final Schedule 2017 </h1>
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

        {button}
        {list}

      </div>
    );
  }
}

// refactor tomorrow

function MoreButtons(props) {
  const array = props.args;
  const listItems = array.map((element) =>
     <Button
        raised
        ripple
        onClick={()=>props.func(element)}
        key={element}
        >
          {element}
    </Button>
   );

   return (
     <div>
     <h3> Which day a week? </h3>
      {listItems}
     </div>
   );
}

// refactor tomorrow

function Classes(props){
  const classes = props.data;
  const sched = props.sched;
  const rowsForTable = classes
              .filter(classe => (classe.weeklySched === sched))
              .map(function(classe){
                let obj = {}
                obj.classHours = classe["classHours"]
                obj.examDate = classe["examDate"]
                obj.examSched = classe["examSched"]
                return obj
              })

  return(
    <div>
    <h3> Possible exam results</h3>
    <DataTable
        shadow={0}
        rows={rowsForTable}>
        <TableHeader name="classHours" tooltip="When Your Class Meets">Class Hours</TableHeader>
        <TableHeader name="examDate" tooltip="Date of Your Final">Exam Date</TableHeader>
        <TableHeader name="examSched" tooltip="Hours of your Final">Exam Schedule</TableHeader>
    </DataTable>
    </div>
  )
}

export default App;
