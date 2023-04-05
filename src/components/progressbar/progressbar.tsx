
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedProgressBar() {

  return(
        <Container>
          <Row>
              <Col>
                    <ProgressBar animated now={85} />
              </Col>
          </Row>
      </Container>
      

  )
}

export default AnimatedProgressBar;