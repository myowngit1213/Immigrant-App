import React, { Component } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Button,
  Tab,
  Row,
  Col,
  Nav
} from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as ImmigrantActions } from "../../store/ducks/immigrants";

class AdvancedSearch extends Component {
  state = {
    searchInput: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addImmigrantRequest(this.state.searchInput);
  };

  render() {
    return (
      <Container className="mt-5 pt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Pesquise pelo nome</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Pelo nome e nacionalidade
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Pelo número do passaporte
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Pela data de entrada
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    Pela data de saída
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Nome"
                      aria-label="Nome"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ searchInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmit(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Nome"
                      aria-label="Nome"
                      aria-describedby="basic-addon2"
                    />
                    {/* <InputGroup.Append>
                                    <Button variant="outline-primary">Buscar</Button>
                                </InputGroup.Append> */}
                  </InputGroup>
                  <InputGroup className="mt-4">
                    <FormControl
                      placeholder="Nacionalidade"
                      aria-label="Nacionalidade"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-primary" type="submit">
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Número do passaporte"
                      aria-label="Número do passaporte"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ searchInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmit(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Data de entrada no país"
                      aria-label="Data de entrada no país"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ searchInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmit(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth" className="d-flex align-items-center justify-content-center">
                  <InputGroup className="mt-5">
                    <FormControl
                      placeholder="Data de saída do país"
                      aria-label="Data de saída do país"
                      aria-describedby="basic-addon2"
                      onChange={e =>
                        this.setState({ searchInput: e.target.value })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-primary"
                        type="submit"
                        onClick={e => this.handleSubmit(e)}
                      >
                        Buscar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  immigrants: state.immigrants
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ImmigrantActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch);