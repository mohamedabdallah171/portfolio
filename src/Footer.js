import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <Col md="4" sm="12">
                        <Link to="/">
                        <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt=""  className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s"/>
                        </Link>
                    </Col>
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                        <HashLink to="/#latest">Latest Builds</HashLink>
                        <HashLink to="/#process">Process</HashLink>
                        <HashLink to="/#service">Services</HashLink>
                        <HashLink to="/#contact">Contact Us</HashLink>
                        <Link to="/Projects">Projects</Link>
                        </div>
                    </Col>
                  
                </Row>
                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p>© 2022 Your Name</p>
                    <p>Email: info@shilohcreative.com</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer