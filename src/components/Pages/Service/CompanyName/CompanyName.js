import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CaroFirstText1, CaroFirstText2, CaroSecondText1, CaroSecondText2, CaroThirdText1,
     CaroThirdText2, Company, MainCompanyImg } from './utill'
import './CompanyName.css'
import Carousel from 'react-bootstrap/Carousel';

const CompanyName = () => {
    return (
        <>
            <Container className='Company-section-padding'>
                <p className='Company'>{Company}</p>
                <Row>
                    {MainCompanyImg}
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col sm={12}>
                        <Carousel fade>
                            <Carousel.Item>
                                <h3 className='heading'>{CaroFirstText1}</h3>
                                <p className='para'>{CaroFirstText2}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3 className='heading'>{CaroSecondText1}</h3>
                                <p className='para'>{CaroSecondText2}</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h3 className='heading'>{CaroThirdText1}</h3>
                                <p>{CaroThirdText2}</p>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default CompanyName