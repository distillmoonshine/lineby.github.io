import React from "react";
import { Container, Row, Col, Button, Card, Modal, ButtonGroup, ToggleButton, Nav, Navbar} from 'react-bootstrap';

// CSS
import '../../css/HeliumPage.css'
import '../../css/custom.min.css';

// SVG
import LB_Text from '../../img/LB_Rocket_logo_text.svg';



function Footer() {
    const pos_size = {width:'100vw', height:'20vh', padding:'0.5%', background:'#1a1b25'}

    return <>
        <div className="d-flex flex-column" style={pos_size}>
            <div className="d-flex flex-column" style={{height:'100%', width:'60%', alignSelf:'center'}}>
                <div className="d-flex flex-row justify-content-between" style={{margin:'1% 0 0 0'}}>
                    <div className="d-flex flex-column">
                            <img 
                            style={{height:'48px', margin:'0 0 12% 0'}} 
                            src={LB_Text} 
                            alt='LB_Text'
                            />  
                        <Button 
                            variant="secondary" 
                            style={{alignSelf:'flex-start'}}
                            href='mailto:team@lineby.io'
                        >
                            Contact Us
                        </Button>
                    </div>

                    <div className="d-flex flex-row justify-content-between" style={{width:'20%'}}>
                        <div className="d-flex flex-column">
                            <p className="footer_text_white">Social</p>
                            <a className="footer_link_text" href="#twitter">Twitter</a>
                            <a className="footer_link_text" href='#linkedin'>LinkedIn</a>
                        </div>

                        <div className="d-flex flex-column">
                            <p className="footer_text_white">Resources</p>
                            <a className="footer_link_text" href='#github'>GitHub</a>
                            <a className="footer_link_text" href='#discord'>Discord</a>
                        </div>
                    </div>


                </div>
 

                <hr style={{width:'100%', color:'#fff'}}/>
                <Navbar variant='dark' bg='altdark'>
                    <Container>
                        <Navbar.Brand style={{fontWeight:'600'}}>LINEBY</Navbar.Brand>
                        <Nav>
                            <Nav.Link href='#tos'>Terms of Service</Nav.Link>
                            <Nav.Link href='#privacy'>Privacy Policy</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    </>
}

export default Footer;