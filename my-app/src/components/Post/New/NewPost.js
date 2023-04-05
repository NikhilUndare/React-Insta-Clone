import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/circle_icon.svg"
import Camera from "../../../images/camera.png"
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Header from "../Header/Header";
import './NewPost.css';



export default function NewPost() {
const [formData,setformData] = useState({
    image : null,
    author : "",
    location : "",
    description : ""
})
  function CaptureForm(event){
     event.preventDefault();
     const formValues = new FormData(event.target);
     
  }  
    return (
        <>
            <Header/>

            <div className="new-post-container">
                <Card >

                    <Card.Body>
                        <form onSubmit={CaptureForm}>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control name="image" type="file" />
                            </Form.Group>
                            <InputGroup className="mb-3">
                               
                                <Form.Control aria-label="Author" name="author" placeholder="Name"/>
                                <Form.Control aria-label="Location" name="location" placeholder="Location" />
                                
                            </InputGroup>
                            <Form.Control type="text" name="decription" placeholder="Description" />
                            <div className="btn-container">
                            <Button variant="primary" className="" type="Submit">Submit</Button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}