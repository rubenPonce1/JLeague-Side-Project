import React, { useEffect, useState } from "react";

import "./Carousel.css";

function Carousel ({ images }){
  
  //This useState holds and sets the current img slide in the carousel
  const [current, setCurrent] = useState(0);

  //This useState runs the auto play of the carousesl
  const [autoPlay, setAutoPlay] = useState(true);

  let timeOut = null;

  useEffect(() =>{
    timeOut =
    autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500)
  })

  //These 2 functions will switch from img to img there are constraints
  //that will keep it from going to far left or right
  const slideLeft = () =>{
    setCurrent(current === 0 ? images.length -1 : current - 1);
  };

  const slideRight =() =>{ 
    setCurrent(current === images.length -1 ? 0 : current + 1);
  };


  return(
      <div 
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true)
        }}
        >
        

        {/* This is the carousel container for the img and title */}
        <div className="carousel-wrapper">
          {images.map((image, index) => {
            return(
              <div 
                key={index} 
                className={
                  index === current 
                  ? "carousel-card carousel-card-active" 
                  : "carousel-card"
                }
              >
                <img className="card-img" src={image.image} alt=""/>
                <div className="card-overlay"> 
                  <h2 className="card-title"> {image.title} </h2>
                </div>
              </div>  
              ); 
          })}

          {/* These are the arrows in the carousel */}
          <div className="carousel-arrow-left" onClick={slideLeft}>
            &lsaquo; 
          </div>
          <div className="carousel-arrow-right" onClick={slideRight}>
            &rsaquo; 
          </div>

          <div className="carousel-dots">
            {images.map( (_,index) =>{
              return(
                <div 
                  key={ index }
                  className={
                    index === current
                      ? "dot dot-active" 
                      : "dot"
                  }
                  onClick ={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>

        </div>
      </div>
  );
}

export default Carousel;