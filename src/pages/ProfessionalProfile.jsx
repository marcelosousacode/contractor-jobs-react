import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { SchedulingModal } from '../components/Scheduling/SchedulingModal';

export function ProfessionalProfile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="professional-profile">
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <SchedulingModal show={show} handleClose={handleClose} />
        </div>
    )
}