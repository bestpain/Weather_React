import yahoo from '../apis/yahoo'

export const FETCH_WEATHER='FETCH_WEATHER';
export const FETCH_WEATHERS='FETCH_WEATHERS';


export const fetchWeather=Value=>async (dispatch)=>{
	const response=await yahoo.get(`/city/${Value}`)
	dispatch({type:FETCH_WEATHER,payload:response.data}) 
}

export const fetchWeathers=Value=>async (dispatch)=>{
	const response=await yahoo.get(`/cities/${Value}`)
	dispatch({type:FETCH_WEATHERS,payload:response.data}) 
}

