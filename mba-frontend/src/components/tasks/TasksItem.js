import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

class TasksItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.removeItem(this.props.item.id);
  }

  render () {
    return (
      <ListGroupItem header={this.props.item.name} onClick={this.removeItem} >
        {this.props.item.description}
      </ListGroupItem>
    );
  }
}

TasksItem.propTypes = {
  item: PropTypes.object
}

export default TasksItem;
