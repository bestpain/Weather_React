import React from 'react';

const App extends React.Component{

	handleSelect=(e)=>{
		e.preventDefault();
		var sel=this.refs.country;
		var countrySelected = this.getSelectedOption(sel);
		console.log(countrySelected)
	}

	getSelectedOption(sel){
		var result=[];
		var opt;
	    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
	        opt = sel.options[i];
	        if ( opt.selected === true ) {
	            result.push(opt.value);
	        }
	    }
	    return result;
	}

	render(){
		return(
			<React.Fragment>

				<form action="" id="carform" onSubmit={this.handleSelect}>
  					<input type="submit" value="submit"/>
				</form>
			
				<select ref="country" required name="" size="3" multiple="multiple" form="carform">
				<option value="option1">Option1</option>
				<option  value="option2">Option2</option>
				<option  value="Option3">Option3</option>
				</select>
			
			</React.Fragment>
			)
	}
}

export default App;