import React, { Component } from "react"
import {Container, Row, Col} from "reactstrap"
import { Helmet } from "react-helmet"

import Header from "../../../componets/Header"
import Form from "../../../componets/Form"
import Back from "../../../componets/Nav/Back"

import "../style.sass"

export default class Enter extends Component
{
    render()
    {
    return (
        <> 
            <Helmet>
                <title>Talktily - Talk with strangers</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Container className="default--container">
            <Row className="default--row">
                <Col className="default--col">
                    <Header />
                </Col>
            </Row>

            <Row className="default--row">
                <Col className="default--col col-content-center">
                    <Form />
                </Col>
            </Row>

            <Row className="default--row">
                <Col className="default--col">
                    <Back link="/" />
                </Col>
            </Row>
            </Container>
        </>
    )
    }
}