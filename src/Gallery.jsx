import React, {Component} from 'react';
import './App.css'


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            playingUrl:'',
            audio:null,
            playing:false
        }
    }
    playAudio(previewUrl){
        let audio= new Audio(previewUrl);
        if(!this.state.playing){
            audio.play()
            this.setState({
                playing:true,
                playingUrl:previewUrl,
                audio
            })
        }
        else{
            if(this.state.playingUrl===previewUrl){
                this.state.audio.pause();
                this.setState({
                    playing:false
                })
            } else{
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing:true,
                    playingUrl:previewUrl,
                    audio

                })
            }
        }

    }
    render(){

        const tracks=this.props.tracks;
        return (
               <div>
                {tracks.map((track,k)=>{
                    console.log('track',track);
                    const trackImg=track.album.images[0].url;
                   return(
                   <div
                    key ={k}
                    className='track'
                    onClick={()=>this.playAudio(track.preview_url)}
                    >
                        <img 
                        src={trackImg}
                        className='track-img'
                        alt='track'
                        />
                        {  track.preview_url!=null ?
                        
                        <div className='track-play'>
                            <div className='track-play-inner'>
                          
                            {

                                this.state.playingUrl===track.preview_url
                                ? <span className='stop'>| |</span>
                                : <span className='play'>&#9655;</span>
                                
                            }
                          
                            </div>

                        </div>
                            : 
                            <div className='no-preview'>
                                <p className='no-preview-text'>There is no preview available</p>


                            </div>

                        }
                        <p className='track-text'>
                            {track.name}
                        </p>

                    </div>
                   )
                }
                )
                }
                
       
                </div>
        )
    }
        
    
}

export default Gallery;