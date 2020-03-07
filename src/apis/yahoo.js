import axios from 'axios';

export default axios.create({
	baseURL:'https://weatherappserver.herokuapp.com/'
})
