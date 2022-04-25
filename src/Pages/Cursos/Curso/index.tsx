import curso from 'assets/db/cursos.json'
import { Container, Row, Table } from 'reactstrap';
type Props = typeof curso[0];
export default function Curso(props: Props) {
  const { nome, id, img_icon, carga_horaria, conteudo, dt_realizacao, professor } = props;
  return (
    <Container>
      <Row>
      <Table responsive>
        <tbody>
          <Container>
            <Row>
              <td><img className="responsive" src={img_icon} alt={nome} width="60" height="60" /><b>{nome}</b></td>
            </Row>
          </Container>

        </tbody>
      </Table>
      </Row>
    </Container>

  );
}