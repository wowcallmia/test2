import React, { Component } from 'react';
import GradeTable from './GradeTable';
import GradeStore from '../store/store';


export default class GradeContainer extends Component {
  constructor(props) {
    super(props);


   this.state = { grades: GradeStore.getAll()
   }
   this._onChange = this._onChange.bind(this);
}

componentWillMount() {
GradeStore.startListening(this._onChange)
}
componentWillUnmount(){
   GradeStore.stopListening(this._onChange)
}

_onChange() {
  this.setState({
    grades: GradeStore.getAll()
  })
}
  render() {
    const { grades } = this.state;
    return (

    <GradeTable grades={grades} />
  )
  }
}
