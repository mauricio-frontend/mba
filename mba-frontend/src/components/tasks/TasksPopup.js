import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import TasksFormPopup from './TasksFormPopup';

class TasksPopup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      description: ''
    }
  }

  render() {
    const isVisible = this.props.modalIsVisible;

    return (
      <Modal show={isVisible} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TasksFormPopup data={this.state} />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" 
            className="pull-left" 
            onClick={() => {
                this.props.handleSave(this.state);
              }
            }
          >
            Save
          </Button>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

TasksPopup.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default TasksPopup;

