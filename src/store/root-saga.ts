import {spawn} from 'redux-saga/effects'
import conversionMiddleware from "@store/conversion/conversion-middleware";

export default function* rootSaga() {
  yield spawn(conversionMiddleware);
}
