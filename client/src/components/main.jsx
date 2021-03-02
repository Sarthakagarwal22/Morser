import React, { Component } from 'react';
import { Card, Button, Container, Row, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends Component {
    roomId = '';

    enterRoom = (role, id) => {
        window.open(`${window.location.href}${role}?id=${id}`, '_self');
    }

    handleKeyUp = (event, fn) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            fn();
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container >
                        <Navbar.Brand style={{ marginLeft: '20px' }}>
                            <img
                                alt=""
                                src="../../favicon.ico"
                                width="30"
                                height="30"
                                className="d-inline-block align-top flip-vertical"
                            />{'  '}
                        Morser
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Container className="align-items-center">
                        <h2>
                            Overview
                        </h2>
                        <p>
                            Morser is a platform that lets you send morse code to any one in the world.
                        </p>
                        <h3>
                            How to use:
                        </h3>
                        <p>
                            Create a room with some room id. Once you enter the room, share that room ID (or the full URL) with your friends.
                            <br />
                            One becomes a sender and other becomes a receiver. The sender can write text normally, it is converted into morse code by the website itself and sent to the receiver
                        </p>
                    <Row style={{
                        alignItems: 'center'
                    }}>
                        <Col>
                            <Card style={{ width: '18rem', margin: '4px', backgroundColor: '#f06292' }}>
                                <Card.Body>
                                    <Card.Title>Create Room as Sender</Card.Title>
                                    <Card.Text>Click below if you do not have a room number and would like to create a new room.</Card.Text>
                                    <Button onClick={() => this.enterRoom('sender', parseInt((new Date()).getTime() / 1000))} style={{ backgroundColor: '#ba2d65', 'borderColor': '#ba2d65' }}>Let's go</Button >
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', margin: '4px', backgroundColor: '#f06292' }}>
                                <Card.Body>
                                    <Card.Title>Join Room as sender</Card.Title>
                                    <Card.Text>Enter your Room number below</Card.Text>
                                    <input placeholder='Room #' type='text' ref={input => { this.roomId = input }} onKeyUp={event => this.handleKeyUp(event, () => this.enterRoom(this.roomId.value))} />
                                    <Button onClick={() => this.enterRoom('sender', this.roomId.value)} style={{ backgroundColor: '#ba2d65', 'borderColor': '#ba2d65', marginTop: '17px' }}>Let's go</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{
                        alignItems: 'center'
                    }}>
                       <Col>
                            <Card style={{ width: '18rem', margin: '4px', backgroundColor: '#f06292' }}>
                                <Card.Body>
                                    <Card.Title>Create Room as receiver</Card.Title>
                                    <Card.Text>Click below if you do not have a room number and would like to create a new room.</Card.Text>
                                    <Button onClick={() => this.enterRoom('receiver', parseInt((new Date()).getTime() / 1000))} style={{ backgroundColor: '#ba2d65', 'borderColor': '#ba2d65' }}>Let's go</Button >
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', margin: '4px', backgroundColor: '#f06292' }}>
                                <Card.Body>
                                    <Card.Title>Join Room as receiver</Card.Title>
                                    <Card.Text>Enter your Room number below</Card.Text>
                                    <input placeholder='Room #' type='text' ref={input => { this.roomId = input }} onKeyUp={event => this.handleKeyUp(event, () => this.enterRoom(this.roomId.value))} />
                                    <Button onClick={() => this.enterRoom('receiver', this.roomId.value)} style={{ backgroundColor: '#ba2d65', 'borderColor': '#ba2d65', marginTop: '17px' }}>Let's go</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Main;