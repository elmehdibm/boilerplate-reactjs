import greetingSaga from "./greeting/greetingSaga";
import { fork, all } from "redux-saga/effects";

export default function* allSagas() {
  yield all([
      fork(greetingSaga)
  ]);
};
