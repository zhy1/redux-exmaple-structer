/**
 * Created by zy on 16/11/18.



 import React from 'react';
 import { render } from 'react-dom';


 render(
 <div>
 abc
 </div>,
 document.getElementById('app')
 );

 */




import React from 'react'
//import { Router } from 'react-router';
import { render } from 'react-dom'
//import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import createLogger from 'redux-logger'
// import thunk from 'redux-thunk'
//import reducer from './reducers'
import routes from './routes';
//import configureStore from './store';



import configureStore from './store';
let store = configureStore();
/*const store = configureStore(
    reducer
)

import { startLesson }  from './actions/student'
store.dispatch(startLesson(123));*/


// render ->  provider -> router -> store -> reducer



render(
    <div>
        <Provider store={store}>
            {routes}
        </Provider>
    </div>,
    document.getElementById('app')
);
