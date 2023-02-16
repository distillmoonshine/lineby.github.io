import React from "react";
import { Container, Row, Col, Button, Card, Modal, ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import { motion } from "framer-motion"

// Components
import TopBar from "../components/TopBar";
import Footer from "../components/footer";

// CSS
import '../../css/HeliumPage.css'
import '../../css/custom.min.css';

//SVG
import Rocket from '../../img/rocket.svg';


import { MdKeyboardArrowDown } from 'react-icons/md';

function Title() {
    const pos_size = {width:'100%', height:'75vh', background:'#1a1b25'}
    const top_bar_buffer = {height: '4.5vh'};

    const ani_duration = 1.5;
    const ani_delay = 0.5;

    return <>
        <div style={pos_size}>
            <div className="title_gradient d-flex flex-row" style={{width:'100%', height:'100%'}}>
                <div style={top_bar_buffer} />
                <div className="d-flex flex-column justify-content-between" style={{width:'100%', height:'65vh', alignSelf:'center'}}>
                    <motion.div 
                        style={{width:'900px', height:'300px', alignSelf:'center', y:200}}
                        animate={{y:0}}
                        transition={{delay:ani_delay+ani_duration, duration:0.5}}
                    >
                        <motion.div
                            className="big_yellow"
                            initial={{ x:439.47, y:159.98}}
                            animate={{ x:662.93, y:155.75 }}
                            whileHover={{ scale:1.1 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />
                        <motion.div
                            className="semi_orange"
                            initial={{ x:(343.57+91.505), y:60.29 }}
                            animate={{ x:(566.18+91.505), y:55.16, rotate:-0.83 }}
                            whileHover={{ scale:1.1 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />
                        <motion.div
                            className="title_text"
                            initial={{ x:25, y:-14, opacity:0 }}
                            animate={{ opacity:1 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        >
                            LineBy
                        </motion.div>
                        <motion.div
                            className="small_green"
                            initial={{ x:321, y:194.68 }}
                            animate={{ x:30.99, y:190.18 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />

                        <motion.div
                            className="big_black"
                            initial={{ x:349.18, y:109.55 }}
                            animate={{ x:397, y:94.2, opacity: 0}}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />

                        <motion.div
                            className="mid_blue"
                            initial={{ x:410, y:111.61 }}
                            animate={{ x:309.15, y:107.22 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />
                        <motion.div
                            className="small_purple"
                            initial={{ x:349.45, y:49 }}
                            animate={{ x:196.91, y:42.15 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        />
                        <motion.div
                            initial={{ x:458.48, y:201 }}
                            animate={{ x:294.51, y:125.11 }}
                            transition={{ delay:ani_delay, duration:ani_duration }}
                        >
                            <img 
                            style={{position:'absolute', height:'52px', transform:'rotate(176.08deg)'}} 
                            src={Rocket} 
                            alt='Rocket'
                            />  
                        </motion.div>
                    </motion.div>    
                    <motion.div
                        style={{alignSelf:'center'}}
                        className="bottom_section d-flex flex-row justify-content-between"
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{ delay:ani_delay+ani_duration, duration:0.5}}
                    >
                        <div style={{width:'50%'}}>
                            <p style={{fontWeight:'400',fontSize:'40px',color:'#FFF'}}>Faster Easier Advanced Video Editing</p>
                            <p style={{fontWeight:'300',fontSize:'20px',color:'#FFF'}}>Learn how we do it...</p>
                            <Button variant="success" href="#id">How it works</Button>
                        </div>
                        <div className="section_box" style={{background:'#fff', height:'35vh', width:'35vh', alignSelf:'center', padding:'2%'}}>
                            <p style={{fontWeight:'400',fontSize:'30px',color:'#1a1b25'}} >Lets get you signed up...</p>
                            <Form>
                                <Form.Group controlId="IntroSignUp">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control placeholder="Name"/>
                                </Form.Group>
                                <div style={{height:'1vh'}}/>
                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <div style={{height:'2vh'}}/>
                                <Button type='submit' href="#signin">
                                    Sign Up
                                </Button>
                            </Form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
}

function Features() {
    
    const pos_size = {width:'100%', height:'200vh', background:'#fff'};

    return <>
        <div className="d-flex flex-column" style={pos_size}>
            <div className="d-flex flex-column" style={{height:'100%', width:'60vw', alignSelf:'center'}}>
            <p 
                className="intro_text"
                style={{alignSelf:'center', margin:'7% 0 5% 0', color:'#1a1b25'}}
            > 
                Anyone can make content with LineBy, here's how... 
            </p>
            <MdKeyboardArrowDown style={{color:'#1a1b25', alignSelf:'center', scale:'4', margin:'0 0 7% 0'}} />

            <div className="d-flex flex-row" style={{width:'100%', height:'50vh', padding:'0 0 2% 0'}}>
                <div className="feature_box" style={{width:'60%', height:'100%'}}>
                    <p style={{fontWeight:'400',fontSize:'30px',color:'#1a1b25'}} >
                        Automate tedious tasks with AI
                    </p>
                </div>
                <div className="feature_box" style={{width:'40%', height:'100%'}}>
                    <p style={{fontWeight:'400',fontSize:'30px',color:'#1a1b25'}} >
                        Get rid of a steep learning curve
                    </p>
                </div>
            </div>

            <div className="d-flex flex-row" style={{width:'100%', height:'50vh', padding:'0 0 2% 0'}}>
                <div className="feature_box" style={{width:'50%', height:'100%'}}>
                    <p style={{fontWeight:'400',fontSize:'30px',color:'#1a1b25'}} >
                        Work collaboratively
                    </p>
                </div>
                <div className="feature_box" style={{width:'50%', height:'100%'}}>
                    <p style={{fontWeight:'400',fontSize:'30px',color:'#1a1b25'}} >
                        Get AI feedback as you create
                    </p>
                </div>
            </div>

            <section id='stepbystep'>
                <p>Step by step process</p>
            </section>

            </div>

        </div>
    </>
}

function About() {

    const pos_size = {width:'100%', height:'50vh', background:'#fff'};

    return <>
            <div className="d-flex flex-column" style={pos_size}>
                <div className="d-flex flex-column" style={{height:'100%', width:'60%', alignSelf:'center'}}>
                    <p>We are a research oriented start up</p>
                </div>
            </div>
    </>
}

function Home() {
    return <>
        <Col className='g-0'>
            <TopBar/>
            <Row className="g-0 justify-content-between">
                <Title />
                <Features />
                <About />
            </Row>
            <Footer/>
        </Col>
    </>
}

export default Home;