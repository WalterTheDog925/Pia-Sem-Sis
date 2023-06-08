import { Button, Modal } from 'react-bootstrap';

export const ModalForm = ({showModal, handleCloseModal}) => {

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
            <Modal.Title>Form Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Thank you for submitting the form!
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    )
}
