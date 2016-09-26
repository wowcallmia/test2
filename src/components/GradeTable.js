import React, {Component} from 'react';
import GradeStore from '../store/store'
import GradeActions from '../actions/Action';


const GradeTable = props => {
  const { grades } = props;


  return(
    <table className='table'>
      <thead>
        <tr>
          <th>name</th>
          <th>score</th>
          <th>total score</th>
        </tr>
      </thead>
      <tbody>
        {grades.map(grade => (
          <tr key={grade.id}>
            <td>{grade.name}</td>
            <td>{grade.score}</td>
            <td>{grade.totalScore}</td>
            <td><button id='del' className='btn btn-med' onClick={GradeActions.remove.bind(null, grade.id)}>X</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GradeTable;
