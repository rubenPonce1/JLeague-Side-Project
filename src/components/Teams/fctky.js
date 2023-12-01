/*
Filename: fctky.js
Date: 11/31/23
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
        FC Tokyo
      </h1>
      
      {/*This is the container for the team info */}
      <div className='team-info'>
        <div className='team-info-wrapper'>
          <div className='info-title'> Info </div>


          <div className='info-item'> EST: </div>
            <div className='value'> 1935 </div>


          <div className='info-item'>Team names: </div>
            <div className='info-value'>
              Tokyo Gas SC (1935) <br/>
              FC Tokyo (1999) 
            </div>
          
          <div className='info-item'> Stadium: </div>
              <div className='info-value'>
                Ajinomoto Stadium <br/>
                Capacity: 49,970<br/>
                <i class="fas fa-map-marker-alt"> </i> Chofu, Tokyo <br/>
              </div>
              
            <div className='info-item'>Accomplishments: </div>
              <div className='info-value'>
                Tokyo Gas: <br />
                Japan Football League/J2 League (1998) <br/>
                Regional League Promotion Series (1990) <br/><br/>

                FC Tokyo: <br/>
                J2 League (2011)<br/>
                Emperor's Cup (2011) <br/>
                J.League Cup (2004, 2009, 2020)<br/>
                Suruga Bank Championship (2010)<br/>
              </div>
        
        </div>
      </div>


	    {/*This is the container for the team video*/}
      <Container className='video-cntr'>
        <h2 className='video-header'> Short Video of FC Tokyo</h2>


        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/SxtMsE5iTBQ?si=NCwRfSossy7Kjmfr"
                  title="YouTube video" allowFullScreen></iframe>
        </div>


        <div className='video-disc'>
            Title of Channel:
            <Link className='video-chnl-link' to={"https://www.youtube.com/@JLEAGUEInternational"}>
              J.LEAGUE International <br/>
            </Link>
            Title: GET TO KNOW J.LEAGUE: FC Tokyo
            
        </div>
      </Container>
	
      {/*This is the container for the team socials*/}


      <footer className='social-media'>
        <h2 className='social-media-hdr'>
          <div className='social-media-hdr-title'>
            FC Tokyo Social Pages
          </div>
          <div class="social-media-hdr-title-underline" /> 
        </h2>
          <div className='social-media-area'>
            <ul className='social-media-list'>
            
              <li className='social-media-item'>
                <a className='social-media-value'
                   href='https://twitter.com/fctokyoofficial'
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='fctk_twt'
                    className ="social-media-img" icon="fab fa-twitter"/>
                  </div>
                  
                  <div className='social-media-title'>@fctokyoofficial</div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href='https://www.instagram.com/fctokyoofficial'
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='fctk_ig'
                    className ="social-media-img" icon="fab fa-instagram" />
                  </div>
                  
                  <div className='social-media-title'> @fctokyoofficial </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href='https://www.youtube.com/user/fctokyochannel'
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon  alt='fctk_yt'
                    className ="social-media-img" icon="fab fa-youtube" />
                  </div>
                  
                  <div className='social-media-title'> Official Youtube </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href='https://www.tiktok.com/@tokyodorompa'
                   target="_blank" rel="noreferrer">
                 
                  <div>
                    <FontAwesomeIcon alt='***_tiktok'
                    className ="social-media-img" icon="fab fa-tiktok" />
                  </div>
                  
                  <div className='social-media-title'> @tokyodorompa </div>
                </a>
              </li>


              <li className='social-media-item'>
                <a className='social-media-value'
                   href='https://www.facebook.com/fctokyo'
                   target="_blank" rel="noreferrer">
                  
                  <div>
                    <FontAwesomeIcon alt='***_facebk'
                    className ="social-media-img" icon="fab fa-facebook-f" />
                  </div>
                  
                  <div className='social-media-title'> @fctokyo </div>
                </a>
              </li>
            </ul>
          </div>
      </footer>
      
    </div>


  );
}  


