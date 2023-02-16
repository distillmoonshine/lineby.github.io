import React from "react";
import { Container, Row, Col, Button, Card, Modal, ButtonGroup, ToggleButton, Nav, Navbar} from 'react-bootstrap';
import { motion } from 'framer-motion';

// CSS
import '../../css/HeliumPage.css'
import '../../css/custom.min.css';

// SVG
import RocketLogo from '../../img/LB_Rocket_logo.svg';

function TopBar() {
    const pos_size = {width:'100vw', height:'4.5vh'}

    return <>
        <div className="top_bar d-flex flex-row justify-content-between" style={pos_size}>
            <Navbar variant='dark' bg='altdark' style={{height:'100%', width:'100%'}}>
                <Container>
                    <Navbar.Brand href='#home' className="d-flex flex-row">
                        <motion.div
                            style={{alignSelf:'center', width:'80px', float:'right'}}
                            className="hover_label"
                            initial={{opacity:0, x:-40}}
                            whileHover={{opacity:1, x:5}}
                        >
                            Home
                        </motion.div>
                        <img
                        style={{height:'35px', alignSelf:'center'}}
                        src={RocketLogo}
                        />

                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href='#research'>Research</Nav.Link>
                        <Nav.Link href='#pricing'>Pricing</Nav.Link>
                        <Nav.Link href='#signin'>Sign In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
}

export default TopBar;