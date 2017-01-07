/**
 * Created by zy on 16/12/28.
 */
//import {LESSON_FINISH,START_LESSON,LESSON_NOT_YET} from '../../constants/ActionTypes';
//import Types from '../../constants/ActionTypes';
//import initialState from './initialState';
import * as types from '../../constants/ActionTypes';


const initialState = {
    users: [],
    usersById: [],
    username: 'abc',
    password: 'ccc'
}

export default function Classroom(state = initialState, action = null) {
    switch (action.type) {
        case types.START_LESSON:
            if (action.data)
                //debugger;
                return {
                    ...state,
                    studentId: action.data.studentId,
                    student: action.data.student,
                    username: action.data.username,
                    password: action.data.password
                };
        /*        case '2':
         return {
         ...state,
         studentId: action.data.studentId,
         student: action.data.student
         };
         case '3':
         return {
         ...state,
         studentId: action.data.studentId,
         student: action.data.student
         };*/
        default:
            return state;
    }
}