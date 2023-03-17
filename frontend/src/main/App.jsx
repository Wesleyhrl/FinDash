import './App.css';
import React, { useState } from 'react';
import Header from './../common/template/Header';
import SideBar from './../common/template/SideBar';
import Footer from './../common/template/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import Messages from '../common/msg/Messages.jsx';





export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <BrowserRouter>        
        <Row>
          <Header handleShow={handleShow}></Header>
        </Row>
        <Row>
          <Col xs={12} lg={2}>
            <SideBar show={show} handleClose={handleClose} />
          </Col>
          <Col xs={12} lg={10}>
            <Router />
          </Col>
        </Row>
        <Footer></Footer>
        <Messages/>
      </BrowserRouter>
    </div>
  );
}
