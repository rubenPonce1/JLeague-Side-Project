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
import Avispa from "../images/Team_Logos/Avispa_Fukuoka.png"
import { Link } from 'react-router-dom';


export default function Avi(){
   return(
     <div className='Avi'>
      <h1 className='header'> <img src={Avispa}
        alt = "logo"className ="team-logo"></img> 
      </h1>
      
       {/*This is the container for the team info */}
      <div className='team-info'>
        <div className='team-info-wrapper'>
          <div className='info-title'> Info </div>


          <div className='info-item'> EST: </div>
            <div className='value'> 1982 </div>


          <div className='info-item'>Team names: </div>
            <div className='info-value'>
              Fujieda Blux (1994)<br/>
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
               J. League Cup (2023)
            </div>
        
        </div>
      </div>


      <Container className='video-cntr'>
        <h2 className='video-header'> Short Video of Avispa Fukuoka</h2>

        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/LfLepbWMpo4?si=LWjzgIUwP2PIFixX"
                  title="YouTube video" allowFullScreen></iframe>
        </div>


        <div className='video-disc'>
            Title of Channel: 

            <Link className='video-chnl-link' to={"https://www.youtube.com/@JLEAGUEInternational"}>
              J.LEAGUE International <br/>
            </Link>

            Title: Avispa Fukuoka Makes History in the 2023 Levain Cup!

        </div>
      </Container>


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
                 <FontAwesomeIcon  alt='***_ig'
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
                   <FontAwesomeIcon  alt='***_ig'
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
                   <FontAwesomeIcon alt='***_ig'
                   className ="social-media-img" icon="fab fa-tiktok" />
                 </div>
                 <div className='social-media-title'> @*** </div>
               </a>
             </li>


             <li className='social-media-item'>
               <a className='social-media-value'
               href='https://www.facebook.com/AlbirexNiigata'
               target="_blank" rel="noreferrer">
                 <div>
                   <FontAwesomeIcon alt='***_ig'
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

 

