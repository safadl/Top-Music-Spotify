import React, {Component} from 'react';
import './App.css'
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap'
import { FaSearch} from 'react-icons/fa'
import Profile from './Profile';
import Gallery from './Gallery'
import DarkMode from './DarkMode'
import NavBar from './NavBar'
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            query:'',
            artist:null,
            tracks:[],
           albums:[],
           album:null
        }
    }
     redirectToSpotifyAuthentication() {
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const clientId = '7d8f0531e653455c9f443941a1679e1c';
        const redirectUri = `${window.location.protocol}//${window.location.host}/`;
        let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
        window.location = `${authEndpoint}?${query}`;
    } 
 

  
  search(){
    let token = window.location.hash.substr(1);
    if (token) {
        const o = Object.fromEntries(new URLSearchParams(token));
        var AccessToken = o.access_token;
    } else {
        // If there is no token, redirect to Spotify authorization
        this.redirectToSpotifyAuthentication();
    }
console.log('this.state', this.state);
const BASE_URL = 'https://api.spotify.com/v1/search?';
let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
const ARTIST_URL='https://api.spotify.com/v1/artists/';

var myOptions = {
method: 'GET',
headers: {
'Authorization': 'Bearer ' + AccessToken,

},
mode: 'cors',
cache: 'default'

};
fetch(FETCH_URL, myOptions )
.then(response => response.json())
.then(json => {
const artist = json.artists.items[0];

console.log('artist',artist);
console.log('albumm : ',json.artists.items[0].albums);
this.setState({artist});
FETCH_URL= `${ARTIST_URL}${artist.id}/top-tracks?country=TN&`;

fetch(FETCH_URL,{
    method: 'GET' , 
    headers: {
        'Authorization': 'Bearer ' + AccessToken
        },
        mode: 'cors',
        cache: 'default'  
}
    )
    .then(response=> response.json())
    .then(json => {
        console.log('artist"s top tracks : ',json);
        const tracks = json.tracks;
        this.setState({tracks});
    })

})

    }
 
    render(){

        return(
           
            <div>
            <NavBar />
            <DarkMode />
      <div className='App'> 
          <div className='App-title'>
              <div className='w3-center w3-animate-top'>Top Music </div>
              </div>
              <div className='divv'>
              <FormGroup className='form-group'  >
                  <InputGroup className='input-group'>
                  <FormControl 
                  className="text-center"
                  type='text'
                  placeholder='Search for an artist'
                  value={this.state.query}
                  onChange={event => {this.setState({query:event.target.value})}}
                  onKeyPress={event =>{
                      if(event.key==='Enter'){
                          this.search()
                      }
                  }}
                  />
                  <InputGroup.Append onClick={()=> this.state.query===""? 
                     alert('Please enter an artist')
                    : this.search() 
                     }
                >
                  <Button className='button' id='button' > <span><FaSearch /></span> </Button>
                  </InputGroup.Append>
                   </InputGroup> 
                 
              </FormGroup>
              </div>
     
               {
                   this.state.artist !==null
                   ?  
                    <div>
                       <Profile 
                     artist={this.state.artist} 
                     />

                    <Gallery
                    tracks={this.state.tracks}

                    />
                     </div>

                    : <div></div>
               }
                       
                        </div>
                        </div>
                     
              
        )
    }
}
export default App;