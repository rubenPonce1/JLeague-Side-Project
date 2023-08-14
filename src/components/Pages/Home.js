import React, {useState} from 'react';
import { TeamList } from './TeamList';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';


import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

export default function Home(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
    <div>
      <h1 className='HeaderName'>
        J.LEAGUE
      </h1>


      {/*This Container is for the Youtube Video */}
      <Container className='videoContainer'>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/Mu3H6-SbGGQ" 
                  title="YouTube video" allowFullScreen></iframe>
        </div>  
      </Container>


      {/* This is the list of all the J1 Teams*/}
      <>
        <ul className='team-list'>
          {TeamList.map((item, index) => {
            return(
              <li key={index} >
                <Link className={item.cName}
                      to = {item.path}>

                    <img src= {item.image} className= "team-logo"></img>
                    {item.title}  
                    
                </Link>   
              </li>
            )
          })}
        </ul>
      </>
    </div>
    );
       
}
