import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  width:"100%",
  height: '25vh'
}
const slideImages = [
  {
    url: './src/assets/projectImg/1.png',
  
  },
  {
    url: './src/assets/projectImg/2.png',
  },
  {
    url: './src/assets/projectImg/3.png',
  },
  {
    url: './src/assets/projectImg/4.png',
     
  },
  {
    url: './src/assets/projectImg/5.png',
     
  },
  {
    url: './src/assets/projectImg/6.png',
     
  }
];

const slideImages1 = [
  {
    url: './src/assets/projectImg/7.png',
  
  },
  {
    url: './src/assets/projectImg/8.png',
  },
  {
    url: './src/assets/projectImg/9.png',
  }
]
const slideImages2 = [
  {
    url: './src/assets/projectImg/14.png',
  
  },
  {
    url: './src/assets/projectImg/15.png',
  } 
]
const slideImages3 = [
  {
    url: './src/assets/projectImg/10.png',
  
  },
  {
    url: './src/assets/projectImg/11.png',
  } ,
  {
    url: './src/assets/projectImg/12.png',
  
  },
  {
    url: './src/assets/projectImg/13.png',
  }
]
export function ImageSlider3() {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages3.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
          
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export function ImageSlider2() {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages2.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
          
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export function ImageSlider1() {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages1.map((slideImage, index)=> (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
          
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

function ImageSlider() {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
            
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default ImageSlider;