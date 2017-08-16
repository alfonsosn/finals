import React from 'react';
import { Table } from 'reactstrap';
import {Card} from 'react-mdl';

// refactor tomorrow
const ClassesTable = (props) => {
  const schedule = props.schedule;
  const schedules_finals = props.data;
  const rowsForTable =
      schedules_finals.filter(course => (course.weeklySched === schedule)).map((course, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{course["classHours"]}</td>
                  <td>{course["examDate"]}</td>
                  <td>{course["examSched"]}</td>
                </tr>
              ))
  return(
    <Card shadow={0} style={props.style}>
      <h3> Possible exam results</h3>
      <Table hover style={{width: '100%', textAlign:"left"}}>
        <thead>
          <tr>
            <th>#</th>
            <th>
                  Class Hours
            </th>
            <th>
                  Exam Date
            </th>
            <th>
                  Exam Schedule
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
