import React from 'react'
import './ServiceTouch.css'
import { ServiceTouchImg, serviceText, serviceText2, serviceText3 } from './utill'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceTouch = () => {
    return (
        <>
            <div className='Service-Touch-img'>
                <img className='Service' src={ServiceTouchImg} />
            </div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className='serviceText'>{serviceText}</p>
                        <p className='serviceText2'>{serviceText2}</p>
                        <p className='serviceText3'>{serviceText3}</p>
                     <center>
                     <button className='drop-btn'>DROP US A LINE</button>
                     </center>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ServiceTouch