import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import '../Styles/TeamPage.css';
import Albirex from "../images/Team_Logos/Albirex_Niigata.png"

export default function Albi(){
    return(
      <div className='albi'>
        <h1 className='header'> Albirex Niigata </h1>
        <img src={Albirex} alt = "logo"className ="team-logo"></img> 

        <div className='team-info'> 
          <div className='info-title'> Info </div>

          <div className='title'> EST: </div> 
            <div className='value'>1955</div>
          
          <div className='title'>Team names: </div>
            <div className='value'>
              Niigata Eleven SC (1955)<br/>
              Albireo Niigata FC (1995)<br/>
              Albirex Niigata (1997) <br/>
              Nickname: Albi
            </div> 

          <div className='title'> Stadium: </div>
            <div className='value'> 
              Denka Big Swan Stadium<br/>
              Capacity: 42,300<br/>
              <i class="fas fa-map-marker-alt"> </i> Chuo-ku, Niigata<br/>
            </div>

          <div className='title'>Accomplishments: </div>
            <div className='value'>
              J2 Champion (2003, 2022)
            </div>
          
        </div>

        <Container className='video-cntr'>
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/O8PXLauk_V8?si=6Z4gHMr4UXJ4aYXN" 
                    title="YouTube video" allowFullScreen></iframe>
          </div> 
        </Container>


        
      </div>

    );
}   