import React from 'react'

function Contact() {

  const [firstName, setFirstName] = React.useState('');


  const handleFirstName = (event) =>{
    //console.log(event.target.value);
    //now create state
    setFirstName(event.target.value);
  }
  return (
    <form>
      <input type="text" value={firstName} placeholder="First name" onChange={handleFirstName}></input>
    </form>
  )
}

export default Contact