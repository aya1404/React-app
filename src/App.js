import NavBarr from './NavBar';

import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Welcome to our platform!here you can learn for free.
        </p>
        <hr />
        <p className="mb-0">
          Join us.
        </p>
      </Alert>
      <div style={{ display:'flex' , marginLeft:'100px' , gap:'20px'}}>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png" />
          <Card.Body>
            <Card.Title>Javascript</Card.Title>
            <Card.Text>
              JavaScript is the Programming Language for the Web.
              JavaScript can update and change both HTML and CSS.
              JavaScript can calculate, manipulate and validate data.
            </Card.Text>
            <Button variant="primary">Learn Javascript</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://www.w3schools.com/whatis/img_react.jpg" />
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
            React is an open-source JavaScript library created by Facebook 
            that is used for building user interfaces specifically for Single-Page Applications.
            </Card.Text>
            <Button variant="primary">Learn React</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/es6.svg" />
          <Card.Body>
            <Card.Title>ES6</Card.Title>
            <Card.Text>
            ECMAScript was created to standardize JavaScript,
            and ES6 is the 6th version of ECMAScript, 
            it was published in 2015 and it was the second major revision to JavaScript.
            </Card.Text>
            <Button variant="primary">Learn ES6</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
