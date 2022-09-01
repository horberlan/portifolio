import React from 'react'
import Carousel from 'nuka-carousel'
import Imagem1 from '../imagens/imc1.png'
import Imagem2 from '../imagens/imc2.png'
import Imagem3 from '../imagens/imc3.png'
import Imagem4 from '../imagens/imc4.png'
import Imagem5 from '../imagens/imc5.png'
import Imagem6 from '../imagens/imc6.png'
import Imagem7 from '../imagens/imc7.png'
import Imagem8 from '../imagens/imc8.png'
import Imagem9 from '../imagens/imc9.png'
import Imagem10 from '../imagens/imc10.png'
import Imagem11 from '../imagens/imc11.png'
import Imagem12 from '../imagens/imc12.png'
import Imagem13 from '../imagens/imc13.png'

function Carrossel() {
  const myProjects = [
    {
      image: Imagem1,
    },
    {
      image: Imagem2,
    },
    {
      image: Imagem3,
    },
    {
      image: Imagem4,
    },
    {
      image: Imagem5,
    },
    {
      image: Imagem6,
    },
    {
      image: Imagem6,
    },
    {
      image: Imagem7,
    },
    {
      image: Imagem8,
    },
    {
      image: Imagem9,
    },
    {
      image: Imagem10,
    },
    {
      image: Imagem11,
    },
    {
      image: Imagem12,
    },
    {
      image: Imagem13,
    },
  ]
  return (
    <>
      <Carousel
        cellAlign="center"
        slidesToShow={4}
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
        withoutControls={true}
        transitionMode={'fade'}
        pauseOnHover={false}
        swiping={false}
      >
        {myProjects.map((item, i) => (
          <img
            src={item.image}
            height="400px"
            width="200px"
            alt="...."
            key={i}
          />
        ))}
      </Carousel>
    </>
  )
}

export default Carrossel
