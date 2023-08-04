import React from 'react';

import '../Styles/Home.css';


import { Container } from  'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return(
      <div>
        <Container>

          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/Mu3H6-SbGGQ" title="YouTube video" allowFullScreen></iframe>
          </div>  
        </Container>
      


        
    </div>
       
    );
}

export default Home;