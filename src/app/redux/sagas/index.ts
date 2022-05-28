import { takeEvery } from 'redux-saga/effects'
import { hitSagaTestApi } from '../actions/hitApiAction';
import { API_REQUEST } from '../constants'
export function* reduxSagas(){
    yield takeEvery(API_REQUEST, hitSagaTestApi);
} 