import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


function App() {

  return(
    <div>
    <Navbar className="bg-body-tertiary justify-content-between">
    <Form inline>
      <InputGroup>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form>
    <Form inline>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  </Navbar>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "logo192.png"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


  </div>
)
}
export default App
    

