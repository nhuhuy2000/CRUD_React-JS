import { all } from "redux-saga/effects";
import usersSaga from "./Action_saga";

export default function* Saga() {
  yield all([usersSaga()]);
}
