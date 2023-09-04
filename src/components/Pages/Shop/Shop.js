import React from 'react'
import { MainShop, MainShop2, buy, choose, shopEndtext, shopText, show } from './utill'
import './Shop.css'
import { Col, Container, Row } from 'react-bootstrap'

const Shop = () => {
  return (
  <>
  <Container>
  <p className='shopText'>{shopText}</p>
  <p className='shopEndtext'>{shopEndtext}</p>
  <hr />
    <Row>
        <Col sm={8}>
            <p className='buy'>{buy}</p>
            <p>{choose}</p>
            <p>{show}</p>
        </Col>
        <Col sm={4}>
            <button className='membership-plan'>Membership Plan</button>
        </Col>
    </Row>
    <Row>
        {MainShop}
        {MainShop2}
    </Row>
  </Container>
  
  
  </>
  )
}

export default Shop