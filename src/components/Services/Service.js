import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Services.css';

const Service = ({ user }) => {
    const { s_img, s_text, s_title, id } = user;

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="service_img mx-auto" variant="top" src={s_img} />
                    <Card.Body className="card_body">
                        <Card.Title className="">{s_title}</Card.Title>
                        <Card.Text>
                            {s_text}
                        </Card.Text>
                        <Link className="readmore_btn" to={`/services/${id}`}>Read More <i className="fas fa-long-arrow-alt-right"></i></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
