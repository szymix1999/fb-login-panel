import React, { Component } from 'react';
import { Card, Container, Button, Form, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import Register from './Register';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      contact: '',
      password: '',
      register: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleRegister(){
    this.setState({register: !this.state.register})
  }

  handleLogIn(e){
    const {contact, password} = this.state
    if(contact === "" || password ===""){
      alert("Nie podano danych")
    }else{
      alert("OK  " + contact + "  " + password)
    }
  }

  render() {
    return (
      <div style={this.state.register ? {opacity: 0.2} : {opacity:1}}>
        {this.state.register ? <Register onClickRegister={this.handleRegister}/> : null}
        <Container >
          <Row className="login-center">
            <Col xl="7">
              <Hero />
            </Col>
            <Col xl="5">
              <Container >
                <Card >
                  <Card.Body>
                    <div className="text-center">

                    
                      <Form.Group>
                        <Form.Control
                          className="py-4"
                          type='text'
                          name='contact'
                          placeholder='Adres e-mail lub numer telefonu'
                          onChange={this.handleChange}
                          value={this.state.contact}
                        />
                      </Form.Group>
                        
                      <Form.Group>
                        <Form.Control
                          className="py-4"
                          type='password'
                          name='password'
                          placeholder='Hasło'
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </Form.Group>

                      <Button
                        variant='primary'
                        className='btn-lg btn-block'
                        onClick={this.handleLogIn}
                      >
                        Zaloguj się
                      </Button>

                      <p className="text-center mt-2">
                        <a href='forget'>Nie pamiętasz hasła?</a>
                      </p>

                      <hr />

                      <Button
                        className='btn-lg'
                        variant='success'
                        onClick={this.handleRegister}
                      >
                        Stwórz nowe konto
                      </Button>

                    </div>
                  </Card.Body>
                </Card>

                <p className='mt-4 text-center'>
                  <a href='#' >
                    <strong className="text-dark">Utwórz stronę </strong>
                  </a>
                  dla gwiazdy, zespołu lub firmy.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
