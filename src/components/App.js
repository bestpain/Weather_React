import React from 'react';
import DropdownMenu from './listBox';
import {connect} from 'react-redux'
import {fetchWeather,fetchWeathers} from '../actions'
import WeatherData from './weatherData'

const App=(props)=>{

	const getZipCodes=(zip)=>{
		if(zip.length>1)
			props.fetchWeathers(zip);
		else props.fetchWeather(zip[0]);
	}

	const renderWeather=()=>{
		if(props.weather[0]!==undefined){
			return (
				<WeatherData weather={props.weather}/>
			)
		}
	}

	return(
		<div className="ui container" style={{marginTop: '10px',width:"50%"}}>
			<DropdownMenu onSubmit={getZipCodes}/><br/>
			{renderWeather()}
		</div>
		)	
}

const mapStateToProps=(state)=>{
	return {weather:state.weather}
}
export default connect(mapStateToProps,{fetchWeather,fetchWeathers})(App);