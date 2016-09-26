import React, {Component} from 'react';
import uuid from 'uuid';
import GradeActions from '../actions/Action';

export default class GradeForm extends Component {
  constructor (props) {
    super(props);
     this._submitForm = this._submitForm.bind(this);

  }

_submitForm(e) {
  e.preventDefault();
  const { newGradeName, newGradeScore, totalGradeScore} = this.refs;



  let grade = {
  name: newGradeName.value,
  score: parseFloat(newGradeScore.value),
  totalScore: parseFloat(totalGradeScore.value),
  id: uuid()

}

newGradeName.value = '';
newGradeScore.value = '';
totalGradeScore.value = '';


GradeActions.create(grade);
                               
}

render() {
  return(
    <form onSubmit = {this._submitForm} className = 'form-inline'>
      <div className='form-group'>
        <label htmlFor='newGradeName'> Assignment: </label>

        <input
          ref = 'newGradeName'
          type = 'text'
          className = 'form-control'
          id='newGradeName'
          required />
      </div>

      <div className='form-group'>
        <label htmlFor='newGradeScore'>New Grade Score</label>
        <input
          ref='newGradeScore'
          type= "number"
          className = 'form-control'
          id ='newGradeScore'
          required min= '0'
          step = '0.01'/>
      </div>
      <div className='form-group'>
        <label htmlFor='totalGradeScore'>Total Grade Score</label>
        <input
          ref='totalGradeScore'
          type= "number"
          className = 'form-control'
          id ='totalGradeScore'
          required min= '0'
          step = '0.01'/>
      </div>

      <button className="btn btn-default"> Add Grade </button>
    </form>
  )
}
}
