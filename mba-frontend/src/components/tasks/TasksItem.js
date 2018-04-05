import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

class TasksItem extends Component {
  render () {
    return (
      <ListGroupItem header={this.props.item.title}>
        {this.props.item.description}
      </ListGroupItem>
    );
  }
}

TasksItem.propTypes = {
  item: PropTypes.object
}

export default TasksItem;
