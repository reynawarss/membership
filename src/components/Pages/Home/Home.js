import React from 'react'
import './Home.css'
import { banner, get, membership } from './utill'
import About from '../About/About'
import Pricing from '../Pricing/Pricing'
import Blog from '../Blog/Blog'
import Service from '../Service/Service'
import { Col, Container, Row } from 'react-bootstrap'

const Home = () => {
  return (
   <>
   
   <div className='home-container'>
    <Container fluid>
      <Row>
        <Col sm={6} className='px-0'>
          <p className='membership'>{membership}</p>
          <p className='get'>{get}</p>
          <button className='start-now-btn'>START NOW</button>
        </Col>
        <Col sm={6} className='px-0'>
          <div className='Banner-img'>
                <img className='Banner-img-fill' src={banner} />
          </div>
        </Col>
      </Row>
    </Container>

   </div>
   <About />
   <Pricing />
   <Blog />
   <Service />
   </>
  )
}

export default Home