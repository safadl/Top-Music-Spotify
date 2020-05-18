 import React, { Component} from 'react'
 import {Navbar, Nav} from 'react-bootstrap'
 import spotify from './images/spotify.png'
 
 class NavBar extends Component{
render(){
    return(
        <div>
       
        <Navbar bg="dark" expand="lg" className='navbar'>
  <Navbar.Brand href="https://www.spotify.com/us/"><img className='spotifyimg' src={spotify} alt='spotify' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Item> 

</Nav.Item>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>
    )
}
 }
 export default NavBar;