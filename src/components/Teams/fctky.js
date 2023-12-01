/*
Filename: albi.js
Date: 11/16/23
Authors: Ruben Ponce
Description: This is the team page for 
*/


import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../Styles/TeamPage.css';
import '../Styles/IndivTeamPageStyle.css'
import FCTKY from "../images/Team_Logos/FC_Tokyo.png"
import { Link } from 'react-router-dom';


export default function FCTokyo(){
  return(
    <div className='fctk'>
      <h1 className='header'> <img src={FCTKY} alt = "logo"className ="team-logo"></img>

      </h1>
      
      {/*This is the container for the team info */}
      <div className='team-info'>
        <div className='team-info-wrapper'>
          <div className='info-title'> Info </div>


          <div className='info-item'> EST: </div>
            <div className='value'> *** </div>


          <div className='info-item'>Team names: </div>
            <div className='info-value'>
              **** <br/>
              Nickname: **
            </div>
          
          <div className='info-item'> Stadium: </div>
              <div className='info-value'>
                ***<br/>
                Capacity: <br/>
                <i class="fas fa-map-marker-alt"> </i> * <br/>
              </div>
              
            <div className='info-item'>Accomplishments: </div>
              <div className='info-value'>
                *****
              </div>
        
        </div>
      </div>


	    {/*This is the container for the team video*/}
      <Container className='video-cntr'>
        <h2 className='video-header'> Short Video of *****</h2>


        <div class="ratio ratio-16x9">
          <iframe src=" "
                  title="YouTube video" allowFullScreen></iframe>
        </div>


        <div className='video-disc'>
            Title of Channel:
            <Link className='video-chnl-link' to={"  "}>
              *** <br/>
            </Link>
            Title: *****
            
        </div>
      </Container>
	
      {/*This is the container for the team socials*/}


      <footer className='social-media'>
        <h2 className='social-media-hdr'>
          <div className='social-media-hdr-title'>
            *** Social Pages
          </div>
          <div class="social-media-hdr-title-underline" /> 
        </h2>
          <div className='social-media-area'>
            <ul className='social-media-list'>
            
              <li className='social-media-item'>
                <a className='social-media-value'
                   href=''
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='***_twt'
                    className ="social-media-img" icon="fab fa-twitter"/>
                  </div>
                  
                  <div className='social-media-title'>@***</div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href=''
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='***_ig'
                    className ="social-media-img" icon="fab fa-instagram" />
                  </div>
                  
                  <div className='social-media-title'> @*** </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href=''
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='***_yt'
                    className ="social-media-img" icon="fab fa-youtube" />
                  </div>
                  
                  <div className='social-media-title'> Official Youtube </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href=''
                   target="_blank" rel="noreferrer">
                 
                  <div>
                    <FontAwesomeIcon alt='***_tiktok'
                    className ="social-media-img" icon="fab fa-tiktok" />
                  </div>
                  
                  <div className='social-media-title'> @*** </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href=''
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon alt='***_facebk'
                    className ="social-media-img" icon="fab fa-facebook-f" />
                  </div>
                  
                  <div className='social-media-title'> @*** </div>
                </a>
              </li>
            </ul>
          </div>
      </footer>
      
    </div>


  );
}  


