import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {Link} from 'react-router-dom';

import '../Styles/TeamPage.css';


export default function Albirex(){
    return(
      <div>
        <h1 className='teamName'> Albirex </h1>

        <Container className='video-cntr'>
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/O8PXLauk_V8?si=6Z4gHMr4UXJ4aYXN" 
                    title="YouTube video" allowFullScreen></iframe>
          </div> 
        </Container>
      </div>

    );
}   