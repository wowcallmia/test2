import AppDispatcher from '../AppDispatcher'

const GradeActions = {
  create(grade) { 
    AppDispatcher.dispatch({
      type: 'GRADE_CREATE',
      payload: {grade: grade}
    })

  },

  remove(){
    AppDispatcher.dispatch({
      type: 'REMOVE_GRADE'
    })
  },
}
export default GradeActions;
