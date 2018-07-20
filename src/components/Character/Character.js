import React from "react";
import "./Character.css";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Nav, NavItem } from "reactstrap";

const Character = props => (
    <Container>
        <Row>
            <Col>
                {props.characters.map(item => (
                <Card>
                    <CardImg
                        src={item.image}
                        alt={item.name}
                        key={item.id}
                        onClick={props.handleClick}
                    />
                </Card>
                ))}
            </Col>
        </Row>
    </Container>
);

export default Character;