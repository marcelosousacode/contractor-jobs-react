import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Col, Row, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png"

import "./Register.css"
import "../../Styles/styles.css"

export function Register() {

    const [ufs, setUfs] = useState([])
    const [ufSelected, setUfSelected] = useState('')
    const [districts, setDistricts] = useState([])
    const [districtSelected, setDistrictSelected] = useState('')

    const urlUf = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    const urlDistrict = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/distritos`


    async function loadUfs(){
        const res = await axios.get(urlUf)
        setUfs(res.data)
    }

    async function loadDistricts(){
        const res = await axios.get(urlDistrict)
        setDistricts(res.data)
    }

    function SelectedUf(uf) {
        setUfSelected(uf.target.value)
    }

    function SelectedDistrict(district) {
        setDistrictSelected(district.target.value)
    }

    useEffect(() => {
        loadUfs()
    }, [])

    useEffect(() => {
        loadDistricts()
    }, [ufSelected])

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
                                <Form.Control className="input" type="text" placeholder="Nome" />
                            </Col>
                            <Col>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control className="input" type="text" placeholder="Telefone" />
                            </Col>
                        </Row>
                        <FormGroup>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control className="input" type="email" placeholder="nome@exemplo.com" />
                        </FormGroup>
                        <Row>
                        <Col>
                            <Form.Label>Estado</Form.Label>
                            <Form.Select className="input" onChange={SelectedUf} aria-label="Default select example">
                                <option>Estado</option>
                                {ufs.map(uf => {
                                    return (
                                        <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                                    )
                                })}
                            </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label>Cidade</Form.Label>
                                <Form.Select className="input" onChange={SelectedDistrict} aria-label="Default select example">
                                    <option>Cidade</option>
                                    {districts.map(district => {
                                        return (
                                            <option key={district.id} value={district.nome}>{district.nome}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Senha" />
                            </Col>
                            <Col>
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Confirmar Senha" />
                            </Col>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button className="button" size="lg" >Cadastrar</Button>
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