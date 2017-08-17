import React from 'react';
import {Card, Tooltip, Button} from 'react-mdl';
import { Table } from 'reactstrap';
import AddToCalendar from 'react-add-to-calendar';

let event: {
      title: 'Final Exam',
      description: 'Registrar Office - Hunter College',
      location: 'New York City, NY',
    }

let makeDateFromCourse = (course) => (
     course.split("-")
     .map(function(hour){
          console.log(hour)
          var time = hour
          var hours = Number(time.match(/(\d+)/)[0]);
          var minutes = Number(time.match(/:(\d+)/)[1]);
          var AMPM = time.match(/(am|pm)/)[0];
          if(AMPM == "pm" && hours<12) hours = hours+12;
          if(AMPM == "am" && hours==12) hours = hours-12;
          var sHours = hours.toString();
          var sMinutes = minutes.toString();
          if(hours<10) sHours = "0" + sHours;
          if(minutes<10) sMinutes = "0" + sMinutes;
          return sHours + ":" + sMinutes;
      }
    )
  )

// refactor tomorrow
const ClassesTable = (props) => {
  const schedule = props.schedule;
  const schedules_finals = props.data;
  const rowsForTable =
      schedules_finals
      .filter(course => (course.weeklySched === schedule))
      .map((course, index) => (
            <tr>
              <td>{course["classHours"]}</td>
              <td>{course["examDate"]}</td>
              <td>{course["examSched"]} </td>
            </tr>
          )
        )

  return(
    <Card shadow={0} style={props.style} className="padding-bottom">
      <h3> Possible Exam Date </h3>
      <Table hover style={{width: '90%', textAlign:"left"}}>
        <thead>
          <tr>
            <th>
              <Tooltip label="When Your Class Meets">
                Class Hours
              </Tooltip>
            </th>
            <th>
              <Tooltip label="Your exam date">
                  Exam Date
              </Tooltip>
            </th>
            <th>
              <Tooltip label="Your exam time">
                  Exam Schedule
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsForTable}
        </tbody>
      </Table>
    </Card>
  )
}

export default ClassesTable;
