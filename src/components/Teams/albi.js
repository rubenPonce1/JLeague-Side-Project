import React from 'react';
import Container from 'react-bootstrap/esm/Container';

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

        <Container className='video-cntr'>
          <h2 className='video-header'> Short Video of Albirex Niigata</h2>

          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/8CkmtM6R45M?si=6KHMyIp5bpOL3UAw" 
                    title="YouTube video" allowFullScreen></iframe>
          </div> 

          <div className='video-disc'>
              Title of Channel: 
              <Link className='video-chnl-link' to={"https://www.youtube.com/@albirexniigata12"}> 
                Albirex Niigata Official Channel - Albirex Niigata <br/>
              </Link> 
              Title: Meiji Yasuda Life J2 League championship and J1 promotion commemorative parade
              
          </div>
        </Container>


        
      </div>

    );
}   