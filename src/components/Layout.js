import React, {Component} from 'react';
import GradeForm from './GradeForm';
import GradeContainer from './GradeContainer';


export default class Layout extends Component {
  render() {
    return(
      <div className="container">

        <h1 className = 'text-center'>Grade List</h1>
        <GradeForm/>
        <GradeContainer/>
      </div>
              
    )
  }
}
