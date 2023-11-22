/* 
Filename: Home.js
Date: 08/22/23
Authors: Ruben Ponce
Description: File for the home page of the webpage
it shows a Youtube video, has a image carousel, and team pages
*/


import React from 'react';
import { TeamList } from './TeamList';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';


import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Carousel from '../Carousel/Carousel';
import { homeSlides } from '../Carousel/ImgSlideshow';



export default function Home(){
  return(
    <div>
      <div className='home'>
        <h1 className='HeaderName'> J.LEAGUE </h1>

        {/*This Container is for the Youtube Video */}
        <Container className='video-cntr'>
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/Mu3H6-SbGGQ" 
                    title="YouTube video" allowFullScreen></iframe>
          </div>  
        </Container>


        {/* This is an image slideshow */}
        <div className='home-carousel'>
          <Carousel images={homeSlides}/>
        </div>
        

        
        {/* This is the list of all the J1 Teams*/}
        <div className='team-list-cntr'>
        <h2 className='team-list-hdr'> TEAM LIST</h2>
          <ul className='team-list'>
            {TeamList.map((item, index) => {
              return(
                <li key={TeamList.index} >
                  <Link className={item.cName}
                        to = {item.path} target="_blank" rel="noreferrer">

                      <img src= {item.image} className= "team-logo" alt='teamLogo'></img>
                      {item.title}  
                      
                  </Link>   
                </li>
              )
            })}
          </ul>
        </div>
      
    </div>
    </div>
    );
       
}
