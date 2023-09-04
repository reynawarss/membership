import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { mainService, mainService2, serviceData, servicelastPara, servicepara } from './utill'
import './Service.css'
import Counter from './Counter/Counter'
import CompanyName from './CompanyName/CompanyName'
import ServiceTouch from './ServiceTouch/ServiceTouch'

const Service = () => {
    return (
        <>
            <Container>
                <p className='service-data'>{serviceData}</p>
                <p className='service-para'>{servicepara}</p>
                <p className='service-lastpara'>{servicelastPara}</p>
                <Row className='Service-padding'>
                    <Col sm={6} className='left-column'>
                        {mainService}
                    </Col>
                    <Col sm={6} className='left-column2'>
                        {mainService2}
                    </Col>
                </Row>
            </Container>

        <Counter />
        <CompanyName />
        <ServiceTouch />
        </>
    )
}

export default Service