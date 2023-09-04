import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { mainHorizon, plan } from './utill'
import './Pricing.css'

const Pricing = () => {
    return (
        <>
            <div className='background-img'>
                <Container >
                    <p className='white'>{plan}</p>
                    <Row className='row-padding'>
                        {mainHorizon}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Pricing