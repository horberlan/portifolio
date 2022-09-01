import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Imggrid from './imagem_grid/perfil.png'
// import Imggrid1 from "./imagem_grid/Frame.png";

import './grid.css'
import Carrossel from '../carrossel/carrossel'
import CarouNuka from '../carousel2/carousel2'

export function GridPerfil() {
  const textArray = [
    {
      photo: Imggrid,
      pre: "I'm",
      name: 'Patriky',
      title:
        'Front End Developer who focuses <br></br>on writing clean, elegant and efficient code.<br></br>',
      desc:
        'My market experience combined with my professional networking <br></br>can help you solve your problems in the digital environment,<br></br> whatever your demand',
    },
  ]
  return (
    <>
      {textArray.map((item, i) => (
        <Container fluid className="margemgeral" key={i}>
          <Row>
            <Col lg={6} className="grid">
              <img className="imagemgrid" src={item.photo} alt="..." />
            </Col>
            <Col lg={6}>
              <h2 className="textobranco">
                {item.pre} <span className="textoamarelo">{item.name}</span>
              </h2>
              <p
                className="textobranco"
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></p>
              <p
                className="textobranco mt-5"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></p>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  )
}

export function GridCarousel() {
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h2 className="textstyle sizebox2"> My Projects</h2>
          <Col className="centralized mt-5">
            <Carrossel />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export function GridSkills() {
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="margens">
          <h1 className="textobranco"> My Skills</h1>{' '}
        </Row>

        <Row className="margens">
          <Col lg={6}>
            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> html</p>
              </Col>
              <Col lg={9}>
                <div className="container1">
                  <div className="progress-bar1">
                    {' '}
                    <span className="txtbranco">70%</span>
                  </div>
                </div>{' '}
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> CSS</p>
              </Col>
              <Col lg={9}>
                <div className="container1">
                  <div className="progress-bar1">
                    {' '}
                    <span className="txtbranco">70%</span>
                  </div>
                </div>{' '}
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> JAVA SCRIPT</p>
              </Col>
              <Col lg={9}>
                <div className="container2">
                  <div className="progress-bar2">
                    <span className="txtbranco">50%</span>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> REACT</p>
              </Col>
              <Col lg={9}>
                <div className="container3">
                  <div className="progress-bar3">
                    {' '}
                    <span className="txtbranco">40%</span>{' '}
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="margens">
              <Col lg={2} className="sizebox">
                <p className="nomecurso"> FIGMA</p>
              </Col>
              <Col lg={9}>
                <div className="container4">
                  <div className="progress-bar4">
                    {' '}
                    <span className="txtbranco">60%</span>{' '}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <CarouNuka />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export function GridEducation() {
  const textArray = [
    {
      title:
        'Graduado em Redes de computadores pela Universidade Paulista UNIP, Sousa-PB',
      desc:
        'Suporte aos sistemas de computadores de uma organização, incluindo redes locais (LANs), redes de longa distância (WANs), segmentos de rede, intranets e outros sistemas de comunicação de dados.',
    },
    {
      title: 'IFPB - Instituto Federal de Ciências e Técnologia da Paraíba.',
      desc:
        'Ensino médio Integrado ao Técnico em Informática Voltada para programação web e manutenção e suporte de equipamentos de informática.',
    },
  ]
  return (
    <>
      <Container fluid className="mt-5 ">
        <Row className="imagemBG bgsize">
          {textArray.map((item, i) => (
            <Col className="textstyle" key={i}>
              <p className="title">{item.title}</p>
              <p className="texto">{item.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
