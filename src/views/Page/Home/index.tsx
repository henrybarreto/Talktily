import React, { Component } from "react"
import {Container, Row, Col} from "reactstrap"
import {Helmet} from "react-helmet"

import Header from "../../../componets/Header"
import Presentaion from "../../../componets/Presentation"
import Next from "../../../componets/Nav/Next"

import "../style.sass"

export default class Home extends Component
{

    render()
    {
    return (
        <> 
            <Helmet>
                <title>Talktily - Talk with strangers</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
                
            </Helmet>
            <Container className="default--container">
            <Row className="default--row">
                <Col className="default--col" >
                    <Header />
                </Col>
            </Row>

            <Row className="default--row">
                <Col className="default--col">
                    <Presentaion/>
                </Col>
            </Row>

            <Row className="default--row">
                <Col className="default--col">
                    <Next link="/enter" />
                </Col>
            </Row>
            </Container>
        </>
    )
    }
}