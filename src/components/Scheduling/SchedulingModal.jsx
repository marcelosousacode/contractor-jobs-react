import { Modal, Button, Form, FormGroup } from 'react-bootstrap';

import '../../Styles/styles.css'

export function SchedulingModal({ show, handleClose }) {

    

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agendamento</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <Form>
                <FormGroup>
                    <Form.Label>Data</Form.Label>
                    <Form.Control className='input' type="date" placeholder="nome@exemplo.com" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Horário</Form.Label>
                    <Form.Control className='input' type="time" placeholder="nome@exemplo.com" />
                </FormGroup>
            </Form>
        </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Fechar
            </Button>
            <Button className="button" onClick={handleClose}>
                Agendar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}