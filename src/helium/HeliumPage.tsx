import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Modal, ButtonGroup, ToggleButton, Nav, Navbar} from 'react-bootstrap';

import Home from './pages/home';

import '../css/HeliumPage.css'
import '../css/custom.min.css';

function HeliumPage() {
    return <>
        <Home /> 
    </>
}

export default HeliumPage