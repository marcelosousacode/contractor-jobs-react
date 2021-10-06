import { Button, Container, Form, FormGroup, Col, Row, Figure } from "react-bootstrap";
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png'

import './Register.css'

export function Register() {
    return (
        <div className="register">
            <div className="register-form">
                <Container>
                    <Form>
                        <Figure>
                            <Figure.Image src={logo} />
                        </Figure>
                        <Row>
                            <Col>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome" />
                            </Col>
                            <Col>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Telefone" />
                            </Col>
                        </Row>
                        <FormGroup>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="nome@exemplo.com" />
                        </FormGroup>
                        <Row>
                        <Col>
                            <Form.Label>Estado</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Estado</option>
                                <option value="SP">SP</option>
                            </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Cidade</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Cidade</option>
                                    <option value="Praia Grande">Praia Grande</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Col>
                            <Col>
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control type="password" placeholder="Confirmar Senha" />
                            </Col>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button size="lg" >Entrar</Button>
                        </div>
                        <div className="text-center">
                            <Link to="/login">Já possue cadastro? <span>clique aqui para entrar.</span></Link>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}