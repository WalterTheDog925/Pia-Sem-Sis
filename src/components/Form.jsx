import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ModalForm } from './ModalForm';

export const FormComponent = () => {
    const { register, handleSubmit, watch, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [submittedResponse, setSubmittedResponse] = useState('');

    const onSubmit = (data) => {
        const lastResponseKey = Object.keys(data).pop();
        const lastResponse = data[lastResponseKey];
        
        switch (lastResponseKey + lastResponse) {
            case 'question1no':
                setSubmittedResponse('te recomendamos asistir a un chequeo dental por lo menos cada 3 meses');
                break;

            case 'question3si':
                setSubmittedResponse('te recomendamos asistir a con un odontologo profesional para terminar tu diagnostico');
                break;

            case 'question5no':
                setSubmittedResponse('es posible que presentes pulpitis');
                break;

            case 'question7no':
                setSubmittedResponse('es posible que presentes caries ');
                break;

            case 'question8no':
                setSubmittedResponse('es posible que presentes necrosis pulpar');
                break;

            case 'question9no':
                setSubmittedResponse('es posible que presentes una fractura dental');
                break;

            case 'question10si':
                setSubmittedResponse('es posible que presentes caries');
                break;

            case 'question10no':
                setSubmittedResponse('es posible que presentes halitosis');
                break;

            case 'question11no':
                setSubmittedResponse('es posible que presentes caries incipientes');
                break;

            case 'question12no':
                setSubmittedResponse('te recomendamos visitar a tu odontologo para tener un mejor diagnostico');
                break;

            case 'question13no':
                setSubmittedResponse('te recomendamos visitar a tu odontologo para tener un mejor diagnostico');
                break;

            case 'question14no':
                setSubmittedResponse('te recomendamos visitar a tu odontologo para tener un mejor diagnostico');
                break;

            case 'question15si':
                setSubmittedResponse('es posible que presentes erosion dental');
                break;

            case 'question15no':
                setSubmittedResponse('te recomendamos visitar a tu odontologo para tener un mejor diagnosticote recomendamos visitar a tu odontologo para tener un mejor diagnostico');
                break;

            case 'question17no':
                setSubmittedResponse('es posible que tengas terceras molares');
                break;

            case 'question19no':
                setSubmittedResponse('es posible que tengas  aftas');
                break;

            case 'question20si':
                setSubmittedResponse('es posible que presentes candidiasis oral');
                break; 

            case 'question20no':
                setSubmittedResponse('es posible que presentes liquen plano');
                break; 

            case 'question21no':
                setSubmittedResponse('es posible que tengas  aftas');
                break; 

            case 'question22no':
                setSubmittedResponse('es posible que presentes liquen plano');
                break; 

            case 'question23no':
                setSubmittedResponse('es posible que presentes amigdalitis');
                break; 

            case 'question24no':
                setSubmittedResponse('es posible que presentes lengua fisurada');
                break; 

            case 'question25si':
                setSubmittedResponse('es posible que presentes ulceras bucales');
                break;

            case 'question25no':
                setSubmittedResponse('es posible que presentes xerostomia');
                break;

            case 'question27no':
                setSubmittedResponse('es posible que presentes aftas');
                break;

            case 'question28no':
                setSubmittedResponse('es posible que presentes parestesia');
                break;

            case 'question29no':
                setSubmittedResponse('es posible que presentes aftas');
                break;

            case 'question30no':
                setSubmittedResponse('es posible que presentes eritomatosis');
                break;

            case 'question32no':
                setSubmittedResponse('es posible que presentes absceso periapical');
                break;

            case 'question34no':
                setSubmittedResponse('es posible que presentes gingivitis cronica');
                break;

            case 'question35no':
                setSubmittedResponse('es posible que presentes abseso');
                break;

            case 'question36si':
                setSubmittedResponse('es posible que presentes gingivitis');
                break;

            case 'question36no':
                setSubmittedResponse('es posible que presentes gingivitis');
                break;

            case 'question37no':
                setSubmittedResponse('es posible que presentes una lesion de la mucosa');
                break;

            case 'question38no':
                setSubmittedResponse('es posible que presentes gingivites');
                break;

            case 'question39no':
                setSubmittedResponse('es posible que presentes halitosis');
                break;

            case 'question40no':
                setSubmittedResponse('es posible que presentes abscesos');
                break;

            case 'question41no':
                setSubmittedResponse('es posible que presentes periodontitis');
                break;

            case 'question42si':
                setSubmittedResponse('es posible que presentes periodontitis');
                break;

            case 'question42no':
                setSubmittedResponse('es posible que presentes gingivitis aguda');
                break;

            case 'question44no':
                setSubmittedResponse('es posible que presentes caries del esmalte');
                break;

            case 'question45no':
                setSubmittedResponse('es posible que presentes caries del esmalte y dentina');
                break;

            case 'question46no':
                setSubmittedResponse('es posible que presentes caries del esmalte, dentina y pulpa');
                break;

            case 'question47no':
                setSubmittedResponse('es posible que presentes gingivitis');
                break;

            case 'question48si':
                setSubmittedResponse('es posible que presentes absesos');
                break;

            case 'question48no':
                setSubmittedResponse('es posible que presentes gingivitis');
                break;

            case 'question49no':
                setSubmittedResponse('te recomendamos asistir con tu odontologo para recibir un diagnostico mas preciso');
                break;

            case 'question50no':
                setSubmittedResponse('es posible que presentes un un trastorno de la articulacion temporomandibular');
                break;

            case 'question51no':
                setSubmittedResponse('es posible que presentes un un trastorno de la articulacion temporomandibular');
                break;

            case 'question52si':
                setSubmittedResponse('es posible que presentes maloclusion');
                break;

            case 'question52no':
                setSubmittedResponse('es posible que presentes maloclusion');
                break;
        
            default:
                setSubmittedResponse('te recomendamos visitar a tu odontologo')
                break;
        }

        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        reset();
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
    const question44 = watch('question44');
    const question45 = watch('question45');
    const question46 = watch('question46');
    const question47 = watch('question47');
    const question48 = watch('question48');
    const question49 = watch('question49');
    const question50 = watch('question50');
    const question51 = watch('question51');
    const question52 = watch('question52');

    return (
        <Container>
            <h1 className="mt-2 mb-0 text-white">Formulario de diagnostico dental</h1>
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

                {question1 === 'no' && (
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

                {question2 === 'no' && (
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

                {question21 === 'si' && (
                <Form.Group controlId="question22">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor de garganta?</Form.Label>
                        <Form.Control as="select" {...register('question22')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question22 === 'si' && (
                <Form.Group controlId="question23">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta grietas en la comisura de labios?</Form.Label>
                        <Form.Control as="select" {...register('question23')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question23 === 'si' && (
                <Form.Group controlId="question24">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sensacion de boca seca?</Form.Label>
                        <Form.Control as="select" {...register('question24')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question24 === 'si' && (
                <Form.Group controlId="question25">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta perdida del gusto?</Form.Label>
                        <Form.Control as="select" {...register('question25')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question16 === 'no' && (
                <Form.Group controlId="question26">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor en labios?</Form.Label>
                        <Form.Control as="select" {...register('question26')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question26 === 'si' && (
                <Form.Group controlId="question27">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sensacion de hormigueo?</Form.Label>
                        <Form.Control as="select" {...register('question27')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question27 === 'si' && (
                <Form.Group controlId="question28">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta ampollas pequeñas?</Form.Label>
                        <Form.Control as="select" {...register('question28')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question28 === 'si' && (
                <Form.Group controlId="question29">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sensibilidad al tacto?</Form.Label>
                        <Form.Control as="select" {...register('question29')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question29 === 'si' && (
                <Form.Group controlId="question30">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta llagas abiertas poco profundas?</Form.Label>
                        <Form.Control as="select" {...register('question30')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question26 === 'no' && (
                <Form.Group controlId="question31">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor de encias?</Form.Label>
                        <Form.Control as="select" {...register('question31')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question31 === 'si' && (
                <Form.Group controlId="question32">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta enrojecimiento?</Form.Label>
                        <Form.Control as="select" {...register('question32')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question32 === 'si' && (
                <Form.Group controlId="question33">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta inflamacion leve de encias?</Form.Label>
                        <Form.Control as="select" {...register('question33')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question33 === 'si' && (
                <Form.Group controlId="question34">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sensibilidad de encias?</Form.Label>
                        <Form.Control as="select" {...register('question34')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question34 === 'si' && (
                <Form.Group controlId="question35">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sangrado al cepillar dientes?</Form.Label>
                        <Form.Control as="select" {...register('question35')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )}

                {question35 === 'si' && (
                <Form.Group controlId="question36">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta acumulacion de placa bacteriana en los dientes?</Form.Label>
                        <Form.Control as="select" {...register('question36')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question33 === 'no' && (
                <Form.Group controlId="question37">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta sangrado facil?</Form.Label>
                        <Form.Control as="select" {...register('question37')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question37 === 'si' && (
                <Form.Group controlId="question38">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta mal aliento?</Form.Label>
                        <Form.Control as="select" {...register('question38')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question38 === 'si' && (
                <Form.Group controlId="question39">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Hay presencia de pus entre dientes y encia?</Form.Label>
                        <Form.Control as="select" {...register('question39')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question39 === 'si' && (
                <Form.Group controlId="question40">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta perdida de dientes?</Form.Label>
                        <Form.Control as="select" {...register('question40')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question40 === 'si' && (
                <Form.Group controlId="question41">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta encias contraidas?</Form.Label>
                        <Form.Control as="select" {...register('question41')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question41 === 'si' && (
                <Form.Group controlId="question42">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta destruccion del hueso dental?</Form.Label>
                        <Form.Control as="select" {...register('question42')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question31 === 'no' && (
                <Form.Group controlId="question43">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor de muelas?</Form.Label>
                        <Form.Control as="select" {...register('question43')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question43 === 'si' && (
                <Form.Group controlId="question44">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor intenso?</Form.Label>
                        <Form.Control as="select" {...register('question44')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question44 === 'si' && (
                <Form.Group controlId="question45">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta incomodidad al comer?</Form.Label>
                        <Form.Control as="select" {...register('question45')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question45 === 'si' && (
                <Form.Group controlId="question46">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta inflamacion?</Form.Label>
                        <Form.Control as="select" {...register('question46')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question46 === 'si' && (
                <Form.Group controlId="question47">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta enrojecimiento?</Form.Label>
                        <Form.Control as="select" {...register('question47')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question47 === 'si' && (
                <Form.Group controlId="question48">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta bulto pequeño en cavidad oral?</Form.Label>
                        <Form.Control as="select" {...register('question48')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question47 === 'si' && (
                <Form.Group controlId="question48">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta bulto pequeño en cavidad oral?</Form.Label>
                        <Form.Control as="select" {...register('question48')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question43 === 'no' && (
                <Form.Group controlId="question49">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta dolor mandibular?</Form.Label>
                        <Form.Control as="select" {...register('question49')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question49 === 'si' && (
                <Form.Group controlId="question50">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta malestal al comer?</Form.Label>
                        <Form.Control as="select" {...register('question50')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question50 === 'si' && (
                <Form.Group controlId="question51">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta desviacion de dientes?</Form.Label>
                        <Form.Control as="select" {...register('question51')} className="mb-3">
                            <option value="">Selecciona una respuesta</option>
                            <option value="si">Si</option>
                            <option value="no">No</option>  
                        </Form.Control>
                    </div>
                </Form.Group>
                )} 

                {question51 === 'si' && (
                <Form.Group controlId="question52">
                    <div className="d-flex">
                        <Form.Label className='px-5'>Presenta desgaste dental?</Form.Label>
                        <Form.Control as="select" {...register('question52')} className="mb-3">
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

            <ModalForm showModal={showModal} handleCloseModal={handleCloseModal} response={submittedResponse} />
        </Container>
    );
};
