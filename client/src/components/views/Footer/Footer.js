import React from 'react';
import './Footer.scss';

import {
    Navbar,
    Container,
    Nav,
    Button,
    Form,
    FormControl,
    Modal,
    Row,
    Col
} from 'react-bootstrap';

import {
    AiFillGithub
} from 'react-icons/ai'

function Footer() {
    return (
        <Container style={{ marginTop: "-5rem" }} fluid>
            <Row style={{ height: "5rem" }} className="bg-light">
                <Col className="text-left m-auto">
                    <p className="m-auto">여기 뭘 넣으면 좋을까?</p>
                </Col>
                <Col className="text-center m-auto">
                    <p className="m-auto">Why Are you Programming?</p>
                </Col>
                <Col className="text-right m-auto">
                    <a className="m-auto" href="https://github.com/Jii-Yeong/2-9blog">
                        <AiFillGithub color="black" size="2rem" />
                    </a>
                </Col>
            </Row>
        </Container>
        // <div>
        //     <Navbar style={{ height: '5rem' }} bg="light">
        //         <Navbar.Collapse className="justify-content-start">
        //             <Navbar.Text>Why Are you Programming?</Navbar.Text>
        //         </Navbar.Collapse>
        //         <Navbar.Collapse className="justify-content-center">
        //             <Navbar.Text>Why Are you Programming?</Navbar.Text>
        //         </Navbar.Collapse>
        //         <Navbar.Collapse className="justify-content-end">
        //             <Nav>
        //                 <Nav.Link href="https://github.com/Jii-Yeong/2-9blog">
        //                     <AiFillGithub size="2rem"></AiFillGithub>
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </div>
    )
}

export default Footer
