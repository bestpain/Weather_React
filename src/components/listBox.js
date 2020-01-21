import React from 'react'
import { Dropdown,Button } from 'semantic-ui-react'

let myInput = React.createRef();
const options = [
  { key: 'Minneapolis', text: 'Minneapolis', value: '55422' },
  { key: 'Jersey', text: 'Jersey', value: '30018' },
  { key: 'Buffalo', text: 'Buffalo', value: '14219' },
  { key: 'New York', text: 'New York', value: '10286' },
  { key: 'Denville', text: 'Denville', value: '07834' },
  { key: 'Cincinnati', text: 'Cincinnati', value: '45238' },
  { key: 'Miami', text: 'Miami', value: '33265' },
  { key: 'Washington', text: 'Washington', value: '20594' },
  { key: 'Orlando', text: 'Orlando', value: '32889' },
  { key: 'Dallas', text: 'Dallas', value: '75315' },
  { key: 'Montreal', text: 'Montreal', value: '54550' },
  { key: 'Philadelphia', text: 'Philadelphia', value: '19104' },
  { key: 'Houston', text: 'Houston', value: '77005' },
  { key: 'Brooklyn', text: 'Brooklyn', value: '31192' },
  { key: 'Atlanta', text: 'Atlanta', value: '30301' }
]

const DropdownMenu=(props)=>{
  
  const handleSelect=(e)=>{
    e.preventDefault();
    if(myInput.current.state.value.length>0)
      props.onSubmit(myInput.current.state.value);
  }

return(
  
  <div >   
      <form style={{display: "flex"}} id="city" onSubmit={handleSelect}> 
          <Dropdown ref={myInput} placeholder='Cities' 
          fluid multiple selection clearable options={options} form="city"/>
          <Button >Submit</Button>
      </form>
  </div>
  )

}

export default DropdownMenu;
