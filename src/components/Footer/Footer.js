import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { CompanyName, CompanyName2, CompanyName3, CompanyName4, CompanyName5, CompanyName6, follow, follow1, follow2, follow3, follow4, follow5, footerLogo, hog, hog2, member, member1, member2, member3, member4, member5, member6 } from './utill'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <Container>
        <Row>
            <Col sm={6}>
                <p className='hog'>{hog}</p>
                <p className='hog2'>{hog2}</p>
                <div className='footer-logo'>
                    <img className='footer-logo-fill' src={footerLogo} />
                </div>
            </Col>
            <Col sm={2}>
                <p className='Company-Name'>{CompanyName}</p>
                <p className='Company-Name2'>{CompanyName2}</p>
                <p className='Company-Name2'>{CompanyName3}</p>
                <p className='Company-Name2'>{CompanyName4}</p>
                <p className='Company-Name2'>{CompanyName5}</p>
                <p className='Company-Name2'>{CompanyName6}</p>
            
            </Col>
            <Col sm={2}>
                <p className='Company-Name'>{member}</p>
                <p className='Company-Name2'>{member1}</p>
                <p className='Company-Name2'>{member2}</p>
                <p className='Company-Name2'>{member3}</p>
                <p className='Company-Name2'>{member4}</p>
                <p className='Company-Name2'>{member5}</p>
                <p className='Company-Name2'>{member6}</p>
            </Col>
            <Col sm={2}>
            <p className='Company-Name'>{follow}</p>
            <p className='Company-Name2'>{follow1}</p>
            <p className='Company-Name2'>{follow2}</p>
            <p className='Company-Name2'>{follow3}</p>
            <p className='Company-Name2'>{follow4}</p>
            <p className='Company-Name2'>{follow5}</p>
            </Col>
            <hr className='Color-horizontal' />
        </Row>
    </Container>
    
    </div>
    </>
  )
}

export default Footer