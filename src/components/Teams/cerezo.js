/*
Filename: cerzo.js
Date: 11/16/23
Authors: Ruben Ponce
Description: This is the team page for 
*/


import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import '../Styles/TeamPage.css';
import '../Styles/IndivTeamPageStyle.css'
import Cerezo_Osaka from "../images/Team_Logos/Cerezo_Osaka.png"
import { Link } from 'react-router-dom';


export default function Cerezo(){
   return(
    <div className='cerezo'>
      <h1 className='header'> <img src={Cerezo_Osaka} 
      alt = "logo"className ="team-logo"></img>
      Cerezo Osaka 
      </h1>
      
      {/*This is the container for the team info */}
      <div className='team-info'>
        <div className='team-info-wrapper'>
          <div className='info-title'> Info </div>

          <div className='info-item'> EST: </div>
            <div className='value'> 
              1957 <br/> 
              Original Eight
            </div>


          <div className='info-item'>Team names: </div>
            <div className='info-value'>
              Yanmar Diesel(1957) <br/>
              Cerezo Osaka (1993)<br/>
              Nickname: Sakura (cherry blossoms)
            </div>
          
          <div className='info-item'> Stadium: </div>
              <div className='info-value'>
                Yodoko Sakura Stadium <br/>
                Capacity: 24,481 <br/>
                <i class="fas fa-map-marker-alt"> </i> Higashisumiyoshi-ku, Osaka <br/>
              </div>
              
            <div className='info-item'>Accomplishments: </div>
              <div className='info-value'>
                Yanmir Diesel: <br/>
                Japan Soccer League (1971, 1974, 1975, 1980)<br/>
                JSL Cup/J.League Cup (1973, 1983, 1984)<br/>
                Emperor's Cup (1968, 1970, 1974)<br/>
                Queen's Cup (1976) <br/>
                <br/>

                Cerezo Osaka:<br/>
                Japan Football League/J2 League (1994)<br/>
                J.League Cup (2017)<br/>
                Emperor's Cup (2017)<br/>
                Japanese Super Cup (2018)
              </div>
        </div>
      </div>


	    {/*This is the container for the team video*/}
      <Container className='video-cntr'>
        <h2 className='video-header'> Short Video of Cerezo Osaka </h2>


        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/FkCV7x68Tnw?si=01GHe4DK54kTDfJu"
                  title="YouTube video" allowFullScreen></iframe>
        </div>


        <div className='video-disc'>
          Title of Channel:
          <Link className='video-chnl-link' to={"https://www.youtube.com/@JLEAGUEInternational"}>
              J.LEAGUE International <br/>
          </Link>
            Title: GET TO KNOW J.LEAGUE: Cerezo Osaka
            
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

 

