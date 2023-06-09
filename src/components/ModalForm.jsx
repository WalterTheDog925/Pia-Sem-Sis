import { Button, Modal } from 'react-bootstrap';

export const ModalForm = ({showModal, handleCloseModal, response}) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal} className='p-3'>
        <Modal.Header closeButton>
            <div className="d-block">
                <Modal.Title className='fw-bold'>Diagnosito Preliminar</Modal.Title>
                <small className='text-end' style={{fontSize: 12}}>Este diagnostico ha sido generado en base a tus repuestas, te recomentamos que asistas a un odontologo profesional para tener un diagnostico 100% fiable</small>
            </div>
        </Modal.Header>
        <Modal.Body>
            <div className="d-block">
                En base a tus respuestas, {response}.
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleCloseModal}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    )
}
