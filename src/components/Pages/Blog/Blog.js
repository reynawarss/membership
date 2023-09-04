import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Blog.css'
import { NewsImg, mainNews, mainNews2, newsData, topic } from './utill'

const Blog = () => {
    return (
        <>
            <div className='News-bg' >

                <Container>
                    <p className='newsData'>{newsData}</p>
                    <Row className='bottom-text'>
                        <Col sm={6}>
                            <div className='WordPress'>WordPress</div>
                            <div className='News-section-img'>
                                <img className='News-section-img-fill' src={NewsImg} />
                                <p className='topic'>{topic}</p>
                            </div>
                        </Col>

                        {mainNews}
                    </Row>
                  
                    <Row>
                        {mainNews2}
                    </Row>
                 <center>
                 <button className='read-more-btn'>REDE MORE</button>
                 </center>
                 <br />
                </Container>
            </div>


        </>
    )
}

export default Blog