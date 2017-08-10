import React from 'react';
import { DataTable, TableHeader } from 'react-mdl';

// refactor tomorrow
const ClassesTable = (props) => {
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
    </div>
  )
}

export default ClassesTable;