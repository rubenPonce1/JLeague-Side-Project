/*
Filename: avi.js
Date: 11/30/23
Authors: Ruben Ponce
Description: This is the team page for Fukuoka Avispa
*/

import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Styles/TeamPage.css';
import '../Styles/IndivTeamPageStyle.css'
import Avispa from "../images/Team_Logos/Avispa_Fukuoka.png"
import { Link } from 'react-router-dom';


export default function Avi(){
  return(
    <div className='avi'>
      <h1 className='header'> <img src={Avispa}
        alt = "logo"className ="team-logo"></img> 
        Avispa Fukuoka
      </h1>
      
      {/*This is the container for the team info */}
      <div className='team-info'>
        <div className='team-info-wrapper'>
          <div className='info-title'> Info </div>


          <div className='info-item'> EST: </div>
            <div className='value'> 1982 </div>


          <div className='info-item'>Team names: </div>
            <div className='info-value'>
              Chūō Bōhan SC (1982)<br/>
              Fujieda Blux (1994)<br/>
              Fukuoka Blux (1995)<br/>
              Avispa Fukuoka (1996)<br/>
              Nickname: Avi, Hachi (Hornet, in Japanese), Meishu
            </div>
          
          <div className='info-item'> Stadium: </div>
            <div className='info-value'>
              Best Denki Stadium <br/>
              Capacity: 22,563<br/>
              <i class="fas fa-map-marker-alt"> </i> Hakata-ku, Fukuoka <br/>
            </div>
              
          <div className='info-item'>Accomplishments: </div>
            <div className='info-value'>
            Chuo Bohan:
            Japan Football League/J2 League (1992)<br/>
            <br/>

            Fujieda Blux:
            Japan Football League/J2 League (1995)<br/>
            <br/>
            Avispa Fukuoka:
            J. League Cup (2023)
            </div>
        
        </div>
      </div>

      {/*This is the container for the team video*/}
      <Container className='video-cntr'>
        <h2 className='video-header'> Short Video of Avispa Fukuoka</h2>

        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/-qKrse3t_xM?si=LfyfmYZrHb3SEifF"
                  title="YouTube video" allowFullScreen></iframe>
        </div>


        <div className='video-disc'>
            Title of Channel: 

            <Link className='video-chnl-link' to={"https://www.youtube.com/@JLEAGUEInternational"}>
              J.LEAGUE International <br/>
            </Link>

            Title: GET TO KNOW J.LEAGUE: Avispa Fukuoka
        </div>
      </Container>

      {/*This is the container for the team socials*/}
	    <footer className='social-media'>
        <h2 className='social-media-hdr'>
          <div className='social-media-hdr-title'>
            Avispa Fukuoka Social Pages
          </div>
          <div class="social-media-hdr-title-underline" /> 
        </h2>

        <div className='social-media-area'>
          <ul className='social-media-list'>
            
            <li className='social-media-item'>
              <a className='social-media-value'
                 href='https://twitter.com/AvispaF'
                 target="_blank" rel="noreferrer">

                  <div>
                    <FontAwesomeIcon  alt='avi_twt'
                    className ="social-media-img" icon="fab fa-twitter"/>
                  </div>

                  <div className='social-media-title'>@AvispaF</div>
              </a>
            </li>


            <li className='social-media-item'>
              <a className='social-media-value'
                 href='https://www.instagram.com/avispaf/'
                 target="_blank" rel="noreferrer">

                <div>
                  <FontAwesomeIcon  alt='avi_ig'
                  className ="social-media-img" icon="fab fa-instagram" />
                 </div>
                <div className='social-media-title'> @avispaf </div>
              </a>
            </li>


            <li className='social-media-item'>
              <a className='social-media-value'
                 href='https://www.youtube.com/avispachannel'
                 target="_blank" rel="noreferrer">

                <div>
                  <FontAwesomeIcon  alt='avi_yt'
                  className ="social-media-img" icon="fab fa-youtube" />
                </div>
                <div className='social-media-title'> Official Youtube </div>
              </a>
            </li>


            <li className='social-media-item'>
              <a className='social-media-value'
                 href='https://www.tiktok.com/@avispaf_'
                 target="_blank" rel="noreferrer">

                <div>
                  <FontAwesomeIcon alt='avi_tiktok'
                  className ="social-media-img" icon="fab fa-tiktok" />
                </div>
                
                <div className='social-media-title'> @avispaf_ </div>
              </a>
            </li>


            <li className='social-media-item'>
              <a className='social-media-value'
                 href='https://www.facebook.com/avispaf/'
                 target="_blank" rel="noreferrer">
                 
                <div>
                  <FontAwesomeIcon alt='avi_facebk'
                  className ="social-media-img" icon="fab fa-facebook-f" />
                </div>
                
                <div className='social-media-title'> @avispaf </div>
              </a>
            </li>

          </ul>
        </div>
      </footer>
      
    </div>


  );
}  

 

