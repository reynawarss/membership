import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './video.css'
import { Videoimg, mainIcon, para, title } from './utill'

const VideoSection = () => {
    return (
        <>
            <Container fluid className='video-section'>
                <Row>
                    <Col sm={7} className='px-0'>
                        <div className='video-img'>
                            <img className='video-img-fill' src={Videoimg} />
                        </div>
                    </Col>

                    <Col sm={5} className='px-0'>
                        <p className='V-title'>{title}</p>
                        <p className='V-para'>{para}</p>
                        {mainIcon}
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default VideoSection