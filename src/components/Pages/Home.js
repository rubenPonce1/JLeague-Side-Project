import React from 'react';

import '../Styles/Home.css';


import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

export default function Home(){
    return(
    <div>
      <h1>
        Jleague
      </h1>
      {/*This Container is for the Youtube Video */}
      <Container>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/Mu3H6-SbGGQ" title="YouTube video" allowFullScreen></iframe>
        </div>  
      </Container>

    </div>
    );
       
}
