import { Button, Container, Form, FormGroup, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png"

import "./Login.css"
import "../../Styles/styles.css"

export function Login() {
    return (
        <div className="login">
            <div className="login-form">
                <Container>
                    <Form>
                        <Figure>
                            <Figure.Image src={logo} />
                        </Figure>
                        <FormGroup>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control className="input" type="email" placeholder="nome@exemplo.com" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control className="input" type="password" placeholder="Senha" />
                            <Link to="#">Esqueci minha senha</Link>
                        </FormGroup>
                        <div className="d-grid gap-2">
                            <Button className="button" size="lg" >Entrar</Button>
                        </div>
                        <div className="text-center">
                            <Link to="/register">Não tem uma conta? <span>Registre-se</span></Link>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    )
}