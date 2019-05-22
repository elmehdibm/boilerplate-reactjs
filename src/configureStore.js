import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import allSagas from './sagas';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const thestore = createStore(allReducers ,composeEnhacers(middleware));
sagaMiddleware.run(allSagas);

export default thestore;
