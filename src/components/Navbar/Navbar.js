import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar(props) {

  //create state to hold user input
  const [navSearchInput, setNavSearchInput] = React.useState('');


  const handleSearchSubmission = (event) =>{
    event.preventDefault();  //refreshes page without this
    console.log('now you can send search input');
    console.log(navSearchInput);
    //send info to app
    props.handleProductSearch(navSearchInput);
    //clear out the textbox
    //setNavSearchInput('');//for this to work you need value set in textbox
  }

  function handleNavbarInput(searchInput){
    console.log('handleNavbarInput called');
    console.log('searchInput', searchInput);
    if (searchInput != ''){
        
        setNavSearchInput(searchInput); 
        
    }
    else{
      console.log('empty textbox', searchInput);
      //if textbox is empty need to activate search to filter properly
      setNavSearchInput(searchInput);
      props.handleProductSearch('');
      //props.handleProductSearch(searchInput); //does not work
    }
  }

  return (
    <div className="nav-bar">
      <Link className="nav-link" to='/'>Homepage</Link>
      <Link className="nav-link" to='/detail'>Product Detail</Link>
      <Link className="nav-link" to='/cart'>Cart</Link>
      <Link className="nav-link" to='/contact'>Contact Us</Link>

      <form onSubmit = {handleSearchSubmission}>

        <input type="text"
        placeholder="search for your product"
        value = {navSearchInput}
        
         onChange = {(event)=>handleNavbarInput(event.target.value)}
         //onChange = {(event)=> setNavSearchInput(event.target.value)}
        />
        
        <button>Submit Search</button>
      </form>


    </div>
  )
}

export default Navbar