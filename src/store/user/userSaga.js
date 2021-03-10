import axios from 'axios';
import { put} from 'redux-saga/effects';
import { userActions } from './userActions';

export function* getSagaData(action){
    
    const resp = yield axios.get(`https://api.github.com/repositories?since=500`)
    

    console.log('resp',resp.data)

    
    if (resp.status===200){
        yield put(userActions.setData(resp.data))
        

    }

}