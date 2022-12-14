import React from 'react';
import { Card, Col, Button, Container, Row } from 'react-bootstrap';
import './Facility.css'

const Facility = (props) => {
    const {img, name, description} = props.facility;
    return (
        <div className="col-lg-4 facility-optimize g-4">
            <img height="50%" src={img} alt="" />
            <p className="fw-bolder mt-2">{name}</p>
            <p className="fw-bold">
                {description}
            </p>
        </div>
    );
};

export default Facility;