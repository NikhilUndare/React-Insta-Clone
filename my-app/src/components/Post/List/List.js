import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/circle_icon.svg"
import Camera from "../../../images/camera.png"
import Heart from "../../../images/heart_icon.png"
import Rocket from "../../../images/share-icon.jpg"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Header from "../Header/Header";
import './List.css';



export default function AllPost() {

    return (
        <>
            <Header />

            <div className="list-post-container">
                <div className="row m-3">
                    <div className="col-12">
                        <Card className="post-card">
                            <Card.Header className="card-header">
                                <div col-5>
                                    <h4>Siva</h4>
                                    <label>Benguluru</label>
                                </div>
                                <div col-5>
                                    <span className="dot">&#9679;&#9679;&#9679;</span>

                                </div>
                            </Card.Header>
                            <Card.Body className="img-container">

                                <img src="https://plus.unsplash.com/premium_photo-1673970474453-7c49815647ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />

                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="wrapper">
                                    <div className="col-5">
                                        <img src={Heart} alt="Heart icon" />
                                        <img src={Rocket} alt="Share icon" />
                                        <p>64 likes</p>
                                    </div>
                                    <div className="col-5">
                                        <span>30 mar 2023</span>
                                    </div>
                                </div>
                                <div >
                                    <h3>Hello Form drax</h3>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

            </div>

        </>
    )
}