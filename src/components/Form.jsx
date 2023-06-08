import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ModalForm } from './ModalForm';

export const FormComponent = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data) => {
        setShowModal(true);
        reset();
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const question1 = watch('question1');
    const question2 = watch('question2');
    const question3 = watch('question3');
    const question4 = watch('question4');
    const question5 = watch('question5');
    const question6 = watch('question6');
    const question7 = watch('question7');
    const question8 = watch('question8');
    const question9 = watch('question9');
    const question10 = watch('question10');
    const question11 = watch('question11');
    const question12 = watch('question12');
    const question13 = watch('question13');
    const question14 = watch('question14');
    const question15 = watch('question15');
    const question16 = watch('question16');
    const question17 = watch('question17');
    const question18 = watch('question18');
    const question19 = watch('question19');
    const question20 = watch('question20');
    const question21 = watch('question21');
    const question22 = watch('question22');
    const question23 = watch('question23');
    const question24 = watch('question24');
    const question25 = watch('question25');
    const question26 = watch('question26');
    const question27 = watch('question27');
    const question28 = watch('question28');
    const question29 = watch('question29');
    const question30 = watch('question30');
    const question31 = watch('question31');
    const question32 = watch('question32');
    const question33 = watch('question33');
    const question34 = watch('question34');
    const question35 = watch('question35');
    const question36 = watch('question36');
    const question37 = watch('question37');
    const question38 = watch('question38');
    const question39 = watch('question39');
    const question40 = watch('question40');
    const question41 = watch('question41');
    const question42 = watch('question42');
    const question43 = watch('question43');

    return (
        <Container>
            <h1 className="mt-2 mb-0 text-white">Formulario de diagnostico</h1>
            <small className='text-white'>Este formulario ofrece un posible diagnostico, le recomendamos acudir con su dentista de confianza para mas informacion y/o un diagnostico 100% seguro</small>
            
            <Form onSubmit={handleSubmit(onSubmit)} className='bg-white mt-4 p-4 border border-secondary border-3 rounded'>
                <Form.Group controlId="question1">
                    <div className="d-flex">
                        <Form.Label className='px-5'>En los ultimos 3 meses ha acudido a una revision dental?</Form.Label>
                        <Form.Control as="select" {...register('question1')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>
                        </Form.Control>
                    </div>
                </Form.Group>

                {question1 === 'si' && (
                <Form.Group controlId="question2">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Esta tomando algun medicamento?</Form.Label>
                        <Form.Control as="select" {...register('question2')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question1 === 'no' || question2 === 'si' && (
                <Form.Group controlId="question3">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Es alergico a algun medicamento?</Form.Label>
                        <Form.Control as="select" {...register('question3')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question3 === 'no' && (
                <Form.Group controlId="question4">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor de dientes?</Form.Label>
                        <Form.Control as="select" {...register('question4')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question4 === 'si' && (
                <Form.Group controlId="question5">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sensibilidad al ingerir o beber alimentos?</Form.Label>
                        <Form.Control as="select" {...register('question5')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question5 === 'si' && (
                <Form.Group controlId="question6">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta manchas visibles en los dientes?</Form.Label>
                        <Form.Control as="select" {...register('question6')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question6 === 'si' && (
                <Form.Group controlId="question7">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta manchas negras?</Form.Label>
                        <Form.Control as="select" {...register('question7')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question7 === 'si' && (
                <Form.Group controlId="question8">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta cavidad?</Form.Label>
                        <Form.Control as="select" {...register('question8')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question8 === 'si' && (
                <Form.Group controlId="question9">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta mal aliento?</Form.Label>
                        <Form.Control as="select" {...register('question9')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question9 === 'si' && (
                <Form.Group controlId="question10">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta movilidad de piezas dentales?</Form.Label>
                        <Form.Control as="select" {...register('question10')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}    

                {question6 === 'no' && (
                <Form.Group controlId="question11">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta desgaste del esmalte dental?</Form.Label>
                        <Form.Control as="select" {...register('question11')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question11 === 'si' && (
                <Form.Group controlId="question12">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta apariencia transparente?</Form.Label>
                        <Form.Control as="select" {...register('question12')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question12 === 'si' && (
                <Form.Group controlId="question13">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta decoloracion de dientes?</Form.Label>
                        <Form.Control as="select" {...register('question13')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question13 === 'si' && (
                <Form.Group controlId="question14">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta color amarillo en dientes?</Form.Label>
                        <Form.Control as="select" {...register('question14')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question14 === 'si' && (
                <Form.Group controlId="question15">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dientes agrietados?</Form.Label>
                        <Form.Control as="select" {...register('question15')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question4 === 'no' && (
                <Form.Group controlId="question16">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor de boca?</Form.Label>
                        <Form.Control as="select" {...register('question16')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question16 === 'si' && (
                <Form.Group controlId="question17">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta irritacion al comer?</Form.Label>
                        <Form.Control as="select" {...register('question17')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question17 === 'si' && (
                <Form.Group controlId="question18">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta llagas dolorosas al interior de la boca?</Form.Label>
                        <Form.Control as="select" {...register('question18')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question18 === 'si' && (
                <Form.Group controlId="question19">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta manchas blancas o amarillas?</Form.Label>
                        <Form.Control as="select" {...register('question19')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question19 === 'si' && (
                <Form.Group controlId="question20">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta inflamacion del area afectada?</Form.Label>
                        <Form.Control as="select" {...register('question20')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question18 === 'no' && (
                <Form.Group controlId="question21">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta manchas de color blanco en la boca?</Form.Label>
                        <Form.Control as="select" {...register('question21')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question18 === 'no' && (
                <Form.Group controlId="question21">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta manchas de color blanco en la boca?</Form.Label>
                        <Form.Control as="select" {...register('question21')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                <Button variant="primary" type="submit" className='btn-lg btn-block'>
                    Submit
                </Button>
            </Form>

            <ModalForm showModal={showModal} handleCloseModal={handleCloseModal} />
        </Container>
    );
};
