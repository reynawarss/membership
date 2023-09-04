import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AboutPara, AboutTitle, AwardImg, BlackImg, CardCenterImg, CardPara, CardText, CardText2, FColumn,
     What, mainCards } from './utill'
import './About.css'
import VideoSection from './VideoSection/VideoSection'

const About = () => {
    return (
        <>
            <div id="About-bg">
                <Container className='About-container'>
                    <p className='Tilte-text'>{AboutTitle}</p>
                    <p className='Para-text'>{AboutPara}</p>
                    <Row>
                        {mainCards}
                    </Row>
                </Container>
            </div>


            <Container fluid>
                <Row>
                    <Col sm={4} className='px-0'>
                        <div className='About-column-bg'>
                            <p className='CardText'>{CardText}</p>
                            <hr className='horizontel' />
                            <p className='CardPara'>{CardPara}</p>
                        </div>
                    </Col>
                    <Col sm={4} className='px-0'>
                        <div className='Center-Img'>
                            <img className='Center-Img-fit' src={CardCenterImg} />
                        </div>
                    </Col>
                    <Col sm={4} className='px-0'>
                        <div className='About-column-bg'>
                            <p className='CardText'>{CardText2}</p>
                            <hr className='horizontel' />
                            <p>{CardPara}</p>
                        </div>
                    </Col>
                </Row>
            </Container>



            <Container fluid>
                <Row>
                    <Col sm={4} className='px-0'>
                        <div className='Fcolumn'>
                            <img className='Fcolumn2' src={FColumn} />
                        </div>
                    </Col>
                    <Col sm={4} className='px-0'>
                        <div className='About-column-bg'>
                            <p className='CardText'>{What}</p>
                            <hr className='horizontel' />
                            <p className='CardPara'>{CardPara}</p>
                        </div>
                    </Col>
                    <Col sm={4} className='px-0'>
                        <div className='Black-img-section'>
                            <img className="Black-img-section-fit" src={BlackImg} />
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col sm={4} className='px-0'>
                        <div className='award-bg-color'>
                            <div className='award-text-section'>
                                <p className='CardText'>{CardText}</p>
                                <hr className='horizontel' />
                                <p className='CardPara'>{CardPara}</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm={4} className='px-0'>
                        <div className='award-bg-color'>
                            <div className='Award-img-box' >
                            <img className='Award-img-fit' src={AwardImg} />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <br/>
            <VideoSection />
        </>
    )
}

export default About