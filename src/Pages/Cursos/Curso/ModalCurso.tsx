import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal, ModalBody, ModalHeader } from "reactstrap"
import curso from 'assets/db/cursos.json'


type Props = typeof curso[0];

export default function ModalCurso(props: Props) {
    const { carga_horaria, conteudo, dt_realizacao, id, nome, img_icon, professor } = props;
 
    const [modal, setModal] = React.useState(false);

    
    const toggle = () => setModal(!modal);

    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            
            <Button color="primary"
                onClick={toggle}>Mais detalhes</Button>
            <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 200 }}>
                <ModalBody>
                    <ModalHeader>
                    <h4>Informações do curso</h4>
                    </ModalHeader>
                    <Container fluid="md">
                        
                        <img className="responsive" src={img_icon} alt={nome} width="60" height="60" /><b> {nome}</b>
                        <p style={{ marginLeft: '4rem' }}>Facilitador: {professor}</p>
                        <p style={{ marginLeft: '4rem' }}>Realizado em</p>
                        <p style={{ marginLeft: '4rem' }}><b>{dt_realizacao}</b></p>
                        <p style={{ marginLeft: '4rem' }}>Carga horária</p>
                        <p style={{ marginLeft: '4rem' }}><b>{carga_horaria} horas</b></p>
                         Conteudo
                         <p style={{ marginLeft: '4rem' }} >{conteudo[0]}</p>
                         <p style={{ marginLeft: '4rem' }} >{conteudo[1]}</p>
                         <p style={{ marginLeft: '4rem' }} >{conteudo[2]}</p>
                    </Container>
                </ModalBody>
            </Modal>
        </div >
    );
}
