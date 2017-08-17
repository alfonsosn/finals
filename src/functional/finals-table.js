import React from 'react';
import {Card, Tooltip, Button} from 'react-mdl';
import { Table } from 'reactstrap';
import AddToCalendar from 'react-add-to-calendar';

let event: {
      title: 'Final Exam',
      description: 'Registrar Office - Hunter College',
      location: 'New York City, NY',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    }

// refactor tomorrow
const ClassesTable = (props) => {
  const schedule = props.schedule;
  const schedules_finals = props.data;
  const rowsForTable =
      schedules_finals
      .filter(course => (course.weeklySched === schedule))
      .map((course, index) => (
          <tr>
            <td>{index}</td>
            <td>{course["classHours"]}</td>
            <td>{course["examDate"]}</td>
            <td>{course["examSched"]} </td>
            <td>
              <AddToCalendar
                  buttonLabel="Add To Calendar"
                  buttonClassClosed="mdl-button mdl-js-button"
                  rootClass="dropdown"
                  dropdownClass="dropdown-content"
                  event={event}
                  listItems={[ { apple: 'Apple' }, { google: 'Google' }]}/>
            </td>
          </tr>
        )
      )

  return(
    <Card shadow={0} style={props.style} className="padding-bottom">
      <h3> Possible Exam Date </h3>
      <addToCal/>
      <Table hover style={{width: '90%', textAlign:"left"}}>
        <thead>
          <tr>
            <th>#</th>
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
