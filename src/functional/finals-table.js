import React from 'react';
import {Card, DataTable, TableHeader } from 'react-mdl';

// refactor tomorrow
const ClassesTable = (props) => {
  const schedule = props.schedule;
  const schedules_finals = props.data;
  const rowsForTable =
      schedules_finals.filter(course => (course.weeklySched === schedule)).map(function(course){
                let obj = {}
                obj.classHours = course["classHours"]
                obj.examDate = course["examDate"]
                obj.examSched = course["examSched"]
                return obj
              })

  return(
    <Card shadow={0} style={props.style}>
      <h3> Possible exam results</h3>
      <DataTable
          shadow={0}
          style={{width: '100%'}}
          rows={rowsForTable}>
              <TableHeader
                name="classHours"
                tooltip="When Your Class Meets">
                    Class Hours
              </TableHeader>
              <TableHeader
                name="examDate"
                tooltip="Date of Your Final">
                    Exam Date
              </TableHeader>
              <TableHeader
                name="examSched"
                tooltip="Hours of your Final">
                    Exam Schedule
              </TableHeader>
      </DataTable>
    </Card>
  )
}

export default ClassesTable;
