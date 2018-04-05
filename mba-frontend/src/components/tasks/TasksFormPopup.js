import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class TasksFormPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.onChangeEvent = this.onChangeEvent.bind(this);
  }

  onChangeEvent (ev, fieldName) {
    const _this = this;
    
    this.setState({
      [fieldName]: ev.target.value
    })

    setTimeout(function() {
      _this.props.updateState(_this.state);
    }, 100);
  }


  render() {
    return (
      <form>
        <FormGroup controlId="taskName">
          <ControlLabel>Name: </ControlLabel>
          <FormControl 
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={(ev) => this.onChangeEvent(ev, 'name')}
          />  
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup controlId="taskDescription">
          <ControlLabel>Description:</ControlLabel>
          <FormControl
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={(ev) => this.onChangeEvent(ev, 'description')}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    )
  }
}

TasksFormPopup.propTypes = {
  updateState: PropTypes.func
}

export default TasksFormPopup;