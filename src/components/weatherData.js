import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const WeatherData=(props)=>{
	const data=props.weather.map((city)=>{
		return(
				<Card  key={city.location.name}>
      				<Card.Content style={{float:"right"}}>
				        <Image
				          floated='right'
				          size='mini'
				          src={city.current.weather_icons}
				        />
        				<Card.Header>{city.location.name}</Card.Header>
        				<Card.Meta>{city.current.weather_descriptions}</Card.Meta>
			        	<Card.Description>
				          Temperature: <strong>{city.current.temperature}</strong><br/>
				          Humidity: <strong>{city.current.humidity}</strong><br/>
				          Pressure: <strong>{city.current.pressure}</strong><br/>
				        </Card.Description>
	      			</Card.Content>  
    			</Card>
    	)
	})
	return   <Card.Group>{data}</Card.Group>

}

export default WeatherData;