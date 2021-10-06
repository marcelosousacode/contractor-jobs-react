import { Modal, Button, Form, FormGroup } from 'react-bootstrap';

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
                    <Form.Control type="date" placeholder="nome@exemplo.com" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Horário</Form.Label>
                    <Form.Control type="time" placeholder="nome@exemplo.com" />
                </FormGroup>
            </Form>
        </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}