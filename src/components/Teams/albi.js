/* 
Filename: albi.js
Date: 11/16/23
Authors: Ruben Ponce
Description: This is the team page for Albirex Niigata
*/

import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Styles/TeamPage.css';
import '../Styles/IndivTeamPageStyle.css'
import Albirex from "../images/Team_Logos/Albirex_Niigata.png"
import { Link } from 'react-router-dom';

export default function Albi(){
    return(
      <div className='albi'>
        <h1 className='header'> <img src={Albirex} alt = "logo"className ="team-logo"></img> 
        Albirex Niigata 
        </h1>
        
        {/*This is the container for the team info */}
        <div className='team-info'> 
          <div className='team-info-wrapper'>

            <div className='info-title'> Info </div>

            <div className='info-item'> EST: </div> 
              <div className='value'>1955</div>

            <div className='info-item'>Team names: </div>
              <div className='info-value'>
                Niigata Eleven SC (1955),
                Albireo Niigata FC (1995),
                Albirex Niigata (1997) <br/>
                Nickname: Albi
              </div> 
            
              <div className='info-item'> Stadium: </div>
                <div className='info-value'> 
                  Denka Big Swan Stadium<br/>
                  Capacity: 42,300<br/>
                  <i class="fas fa-map-marker-alt"> </i> Chuo-ku, Niigata<br/>
                </div>
                
              <div className='info-item'>Accomplishments: </div>
                <div className='info-value'>
                  J2 Champion (2003, 2022)
                </div>
          
          </div>
        </div>

        {/*This is the container for the team short youtube video*/}
        <Container className='video-cntr'>
          <h2 className='video-header'> Short Video of Albirex Niigata</h2>

          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/8CkmtM6R45M?si=6KHMyIp5bpOL3UAw" 
                    title="YouTube video" allowFullScreen></iframe>
          </div> 

          <div className='video-disc'>
              Title of Channel: &nbsp;
              <Link className='video-chnl-link' to={"https://www.youtube.com/@albirexniigata12"}> 
                Albirex Niigata Official Channel - Albirex Niigata <br/>
              </Link> 
              Title: Meiji Yasuda Life J2 League championship and J1 promotion commemorative parade
              
          </div>
        </Container>

        <footer className='social-media'>
          <h2 className='social-media-hdr'>
            <div className='social-media-hdr-title'>Albirex Niigata Social Pages</div>
            <div class="social-media-hdr-title-underline" />  
          </h2>
          <div className='social-media-area'>
            <ul className='social-media-list'>
              {/*<li className='social-media-item'>
                <a className='social-media-value' href='https://www.albirex.co.jp/en/' 
                target="_blank" rel="noreferrer"> 
                  <img src={Albirex} alt = "logo" className ="social-media-img"/> 
                  <div className='social-media-title'> Official Website </div>
                </a> 
              </li> */}

              <li className='social-media-item'>
                <a className='social-media-value' href='https://twitter.com/albirex_pr?lang=en' 
                target="_blank" rel="noreferrer">
                  <div alt='albi_twt' className ="social-media-img"> 
                  <FontAwesomeIcon icon="fab fa-twitter"/>
                  </div>
                  <div className='social-media-title'>@albirex_pr</div>
                </a>
              </li>

              <li className='social-media-item'>
                <a className='social-media-value' href='https://www.instagram.com/albirex_niigata_official/' 
                target="_blank" rel="noreferrer">
                  <div alt='albi_ig' className ="social-media-img">
                    <FontAwesomeIcon icon="fab fa-instagram" />
                  </div>
                  <div className='social-media-title'> @albirex_niigata_official </div>
                </a>
              </li>

              <li className='social-media-item'>
                <a className='social-media-value' href='https://www.youtube.com/user/albirexniigata12' 
                target="_blank" rel="noreferrer">
                  <div alt='albi_ig' className ="social-media-img">
                    <FontAwesomeIcon icon="fab fa-youtube" />
                  </div>
                  <div className='social-media-title'> Official Youtube </div>
                </a>
              </li>

              <li className='social-media-item'>
                <a className='social-media-value' href='https://www.tiktok.com/@albirex_official' 
                target="_blank" rel="noreferrer">
                  <div alt='albi_ig' className ="social-media-img">
                    <FontAwesomeIcon icon="fab fa-tiktok" />
                  </div>
                  <div className='social-media-title'> @albirex_official </div>
                </a>
              </li>

              <li className='social-media-item'>
                <a className='social-media-value' href='https://www.facebook.com/AlbirexNiigata' 
                target="_blank" rel="noreferrer">
                  <div alt='albi_ig' className ="social-media-img">
                    <FontAwesomeIcon icon="fab fa-facebook-f" />
                  </div>
                  <div className='social-media-title'> @アルビレックス新潟/Albirex Niigata </div>
                </a>
              </li>
            </ul>
          </div>
        </footer>
        
      </div>

    );
}   