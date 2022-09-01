import React from 'react'
import Carousel from 'nuka-carousel'
import Img1 from '../carousel2/imagens-carousel/imc1.png'
import Img2 from '../carousel2/imagens-carousel/imc2.png'

import './carousel2.css'
const carouselImage = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
]
export default function CarouNuka() {
  return (
    <Carousel
      className="carouselwhidth"
      cellAlign="center"
      slidesToShow={1}
      defaultControlsConfig={{
        nextButtonText: 'Next',
        prevButtonText: 'Prev',
        pagingDotsStyle: { fill: 'red' },
      }}
      autoplay={true}
      autoplayInterval={2000}
      wrapAround={true}
      withoutControls={true}
      transitionMode={'fade'}
      pauseOnHover={false}
      swiping={false} //Enable touch swipe/dragging
      //speed = {2000}
    >
      {carouselImage.map((item, i) => (
        <img
          key={i}
          src={item.img}
          className="CarouselImg"
          height="100%"
          width="100%"
          alt="..."
        />
      ))}
    </Carousel>
  )
}
