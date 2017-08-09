import React, { Component } from 'react';
import { Button, DataTable, TableHeader } from 'react-mdl';
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
      three_hours: ["M,W", "M,Th", "M,W,Th", "T,W,F", "T,F", "T,Th", "W", "W,S"],
      four_hours: ["M,W", "M,Th", "T,F", "T,Th", "W,S"],
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
      <div className="App">
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
        <p>
        <Button
            raised
            ripple
            onClick={() => {this.showArray(5)}}
            >
                  100-120-150
        </Button>
        </p>
        {weekButtons}
        {finalSchedTables}

      </div>
    );
  }
}



function DaysButtons(props) {
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
function ClassesTable(props){
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
