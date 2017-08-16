import React from 'react';
import {Card, Tooltip} from 'react-mdl';
import { Table } from 'reactstrap';

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
      <h3> Your Final Exam Schedule </h3>
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
