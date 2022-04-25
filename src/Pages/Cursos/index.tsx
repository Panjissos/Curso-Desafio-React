import cursos from 'assets/db/cursos.json'
import { Container } from 'reactstrap';
import Curso from './Curso'
import ModalCurso from './Curso/ModalCurso';

export default function Cursos(){
    return(
        <Container>
            {cursos.map(curso => (
                <div>
                    <Curso key={curso.id} {...curso}/>
                    <ModalCurso key={curso.id} {...curso}/>
                </div>
                
            ))}
        </Container>
    );
}
