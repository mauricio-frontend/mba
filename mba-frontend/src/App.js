import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import TasksComponent from './components/tasks/TasksComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <h1>Sample Project</h1>
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
            </Col>
          </Row>          
          <Row>
            <Col lg={4}>
              <TasksComponent />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
