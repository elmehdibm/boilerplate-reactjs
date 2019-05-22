import {takeEvery} from "redux-saga/effects";

function* sayHelloSaga(){
    yield console.log("Hello World From Saga !");
}

function* watchGreeting() {
    yield takeEvery('SAY_HELLO', sayHelloSaga);
}

export default watchGreeting;
