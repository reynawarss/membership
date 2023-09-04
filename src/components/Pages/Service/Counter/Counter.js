import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Counter.css'
import { Counterimg, MainCounter, facts, lastFacts } from './utill'

const Counter = () => {
    return (
        <>




            <div className='Background-img-box'>
                <Container >
                    <Row >
                        <p className='facts'>{facts}</p><br />
                            {MainCounter}
                    </Row>
                    <p className='facts-last-text'>{lastFacts}</p>
                </Container>
            </div>
        </>
    )
}

export default Counter