import {combineReducers} from 'redux'
import {FETCH_WEATHER,FETCH_WEATHERS} from '../actions'

const weather=(state=[],action)=>{
	switch(action.type){
		case FETCH_WEATHER:
			return [action.payload];
		case FETCH_WEATHERS:
			return [...action.payload];
		default:
			return state;
	}
}

export default combineReducers({
weather
})