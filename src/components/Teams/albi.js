import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import '../Styles/TeamPage.css';
import Albirex from "../images/Team_Logos/Albirex_Niigata.png"

export default function Albi(){
    return(
      <div>
        <h1 className='team-name'> Albirex Niigata </h1>
        <img src={Albirex} alt = "logo"className ="team-logo"></img> 

        <ol className='team-info'> 
          <li> <span class="bolded">EST:</span> 1955 </li>
          <li> 
            <span class="bolded">Team names: </span><br/>
              Niigata Eleven SC (1955)<br/>
              Albireo Niigata FC (1995)<br/>
              Albirex Niigata (1997) <br/>
              Nickname: Albi
          </li> 
          <li>
            <span class="bolded">Stadium: </span><br/>
              Name: Denka Big Swan Stadium<br/>
              Capacity: 42,300<br/>
              <i class="fas fa-map-marker-alt"> </i> Chuo-ku, Niigata<br/>
          </li>
          <li>
            Tropheys: <br/>
              J2 Champion (2003, 2022)
          </li>
          
        </ol>

        <Container className='video-cntr'>
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/O8PXLauk_V8?si=6Z4gHMr4UXJ4aYXN" 
                    title="YouTube video" allowFullScreen></iframe>
          </div> 
        </Container>


        
      </div>

    );
}   