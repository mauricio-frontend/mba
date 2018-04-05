import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import TasksList from './TasksList';

class TasksComponent extends Component {
  render () {
    return (
      <Panel>
        <Panel.Heading>
          Tasks List
        </Panel.Heading>
        <Panel.Body>
          <TasksList />
        </Panel.Body>
      </Panel>
    )
  }
};

export default TasksComponent;