import { Button, Container, Form, FormGroup, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.png'

import './Login.css'

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
                            <Form.Control type="email" placeholder="nome@exemplo.com" />
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                            <Link to="#">Esqueci minha senha</Link>
                        </FormGroup>
                        <div className="d-grid gap-2">
                            <Button size="lg" >Entrar</Button>
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