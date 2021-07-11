import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Card, Button, Form, Row, Col, Container, Modal } from 'react-bootstrap';

export default class Register extends Component {
  constructor() {
    super();
    this.month = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
    this.state = {
      firstName: '',
      lastName: '',
      contact: '',
      password: '',
      birthMonth: this.month[0],
      birthDay: '1',
      birthYear: '1939',
      gender: '',
      userGender: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.range = this.range.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  range(start, end){
    const n = end-start
    let arr = new Array(n)
    for(let i=0; i<=n; ++i){
      arr[i] = start + i;
    }

    return arr
  }

  render() {
    return ReactDOM.createPortal(
      <div className="register-center">

        <Modal.Dialog >
          <Modal.Header closeButton onHide={this.props.onClickRegister}>
            <Modal.Title>

              <h2 className="text-left mb-0"><strong>Zarejestruj się</strong></h2>
              <h6 className="text-left text-muted mb-0">To szybkie i proste.</h6>

            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Container fluid="true">
              <Row>
                <Col>
                    <input name="firstName" type="text" className="form-control bg-light mb-2" placeholder="Imię" onChange={this.handleChange}/>
                </Col>

                <Col>
                  <input name="lastName" type="text" className="form-control bg-light" placeholder="Nazwisko" onChange={this.handleChange}/>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <input name="contact" type="text" className="form-control bg-light mb-2" placeholder="Numer telefonu lub e-mail" onChange={this.handleChange}/>
                </Col>
              </Row>

              <Row>
                <Col>
                  <input name="password" type="text" className="form-control bg-light mb-2" placeholder="Nowe hasło" onChange={this.handleChange}/>
                </Col>
              </Row>
                  
              <Row className="mb-2">
                <Col>
                  <h6 className="text-left text-muted mb-0">Data urodzenia</h6>
                  <Row>
                    <Col>
                      <select name="birthDay" className="form-control" onChange={this.handleChange}>
                        {this.range(1,31).map((i) => <option value={i}>{i}</option>)}
                      </select>
                    </Col>

                    <Col>
                      <select name="birthMonth" className="form-control" onChange={this.handleChange}>
                        {this.month.map((i) => <option value={i}>{i}</option>)}
                      </select>
                    </Col>

                    <Col>
                      <select name="birthYear" class="form-control" onChange={this.handleChange}>
                        {this.range(1939, new Date().getFullYear()).map((i) => <option value={i}>{i}</option>)}
                      </select>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6 className="text-left text-muted mb-0">Płeć</h6>

                  <Row className="mb-2">

                    <Col>
                      <label class="form-control">
                        <p className="text-left">
                          Kobieta
                          <div className='float-right'>
                            <input name="gender" type="radio" value="woman" id="flexCheckDefault" onChange={this.handleChange}/>
                          </div>  
                        </p>
                      </label>
                    </Col>


                    <Col>
                    <label class="form-control">
                        <p className="text-left">
                          Mężczyzna
                          <div className='float-right'>
                            <input name="gender" type="radio" value="man" id="flexCheckDefault" onChange={this.handleChange}/>
                          </div>  
                        </p>
                      </label>
                    </Col>
                    
                  </Row>
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <label class="form-control">
                    <p className="text-left">
                      Ustawienia niestandardowe
                      <div className='float-right'>
                        <input name="gender" type="radio" value="none" id="flexCheckDefault" onChange={this.handleChange}/>
                      </div>  
                    </p>
                  </label>
                </Col>
              </Row>

              {this.state.gender == "none" &&
                <div>
                  <Row className="mb-2">
                    <Col>
                        <select class="form-control">
                          <optgroup label="Wybierz zaimek" selected>Wybierz zaimek</optgroup>
                          <option value="1">Ona: Złóż jej życzenia urodzinowe!</option>
                          <option value="2">On: Złóż mu życzenia urodzinowe!</option>
                          <option value="3">Oni/one: Złóż mu/jej życzenia urodzinowe!</option>
                        </select>
                      </Col>
                  </Row>

                  <Row>
                    <Col>
                      <h6 className="text-left text-muted mb-0">Identyfikujący Cię zaimek jest widoczny dla wszystkich.</h6>
                      <input name="userGender" type="text" className="form-control sign-in" placeholder="Płeć(opcjonalnie)" onChange={this.handleChange}/>
                    </Col>
                  </Row>

                </div>
              }

            </Container>
          </Modal.Body>

          <Modal.Footer style={{justifyContent: "center"}}>
            <div className='text-center'>
              <h4 align="left" className='text-muted h6'>
                Klikając przycisk Zarejestruj się, akceptujesz nasz <a href='#'>Regulamin</a>. <a href='#'>Zasady dotyczące danych</a> informują, w jaki sposób gromadzimy, użytkujemy i udostępniamy dane użytkowników, a <a href="#">Zasady dotyczące plików cookie</a> informują jak korzystamy z plików cookie i podobnych technologii. Możesz otrzymywać powiadomienia SMS z Facebooka, z których możesz zrezygnować w dowolnej chwili.
              </h4>
              <Button variant="success" onClick={this.handleSubmit}><strong>Zarejestruj się</strong></Button>
            </div>
            
          </Modal.Footer>
        </Modal.Dialog>
      </div>, document.getElementById("register"), 11
    );
  }
}
