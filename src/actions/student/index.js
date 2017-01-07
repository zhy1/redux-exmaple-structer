
//import Types from '../../constants/ActionTypes';
import * as types from '../../constants/ActionTypes';

import axios from 'axios';

function fetchStudents () {
    return axios.get('/mock/student.json');
}

export function getStudent() {
    return function (dispatch) {
        return fetchStudents().then((ret) => {
            if(ret.status === 200) {
                dispatch(startLesson(ret.data));
            }
        });
    };
}

export function startLesson(data) {
    return {
        type: types.START_LESSON,
        data
    };
}