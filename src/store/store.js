import AppDispatcher from '../AppDispatcher';
import { EventEmitter} from 'events';
import Storage from '../Storage';

let _grades = Storage.read('grades') || [];



class GradeStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {

      switch(action.type) {
        case 'GRADE_CREATE':
          let {grade } = action.payload;
          _grades.push(grade);


          this.emit('CHANGE');
          break;

          case 'REMOVE_GRADE':
          removeGrade('grade');
          this.emit('CHANGE')
          break;
      }
    });
    this.on('CHANGE', () => {
      Storage.write('grades', _grades);
    })
  }

  startListening(callback){
    this.on('CHANGE', callback);
  }

  stopListening(callback){
    this.removeListener('CHANGE', callback);
  }

  getAll() {
    return _grades;
  }
  removeGrade(grade){
    let {grades} = _grades;
      this.setState({
        grades: grades.filter(grade => grade.id !== id)




      });
  }


}
export default new GradeStore();
