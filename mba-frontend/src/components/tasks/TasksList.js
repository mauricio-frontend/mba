import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Button, Alert } from 'react-bootstrap';
import TasksItem from './TasksItem';
import TasksPopup from './TasksPopup';

class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      modalIsVisible: false
    }
    this.handleShowPopup = this.handleShowPopup.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.saveDataModal = this.saveDataModal.bind(this);
  }

  componentWillMount() {
    fetch('/tasks')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        items: data
      })
    });
  }

  handleShowPopup() {
    this.setState({
      modalIsVisible: true
    });
  }

  hideModal() {
    this.setState({
      modalIsVisible: false
    })
  }

  saveDataModal(parameters) {
    const items = this.state.items;
    const _this = this;
    const dataForm = {
      name: parameters.name,
      description: parameters.description
    }

    fetch('/tasks', {
      method: 'post',
      body: JSON.stringify(dataForm)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      items.push(data);

      _this.setState({
        items: items
      });
      
      _this.hideModal();

    });


  }

  removeTask(id) {
    const items = this.state.items;
    const _this = this;
    let newItems = [];

    fetch('/tasks/' + id, {
      method: 'DELETE'
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      newItems = items.filter(function(item) {
        return (item.id !== data.id);
      });

      _this.setState({
        items: newItems
      });
    })
  }

  render() {
    const items = this.state.items;
    const listItems = items.lenght > 0  ? items.map((item) => {
      return <TasksItem item={item} key={item.id} removeItem={(id) => this.removeTask(id)} />
    }) : <ListGroupItem>No one tasks registered</ListGroupItem>;

    return (
      <div>
        <Alert bsStyle="warning">
          Click at item to remove it from the list!
        </Alert>
        <TasksPopup modalIsVisible={this.state.modalIsVisible} handleClose={this.hideModal} handleSave={(data) => this.saveDataModal(data)}/>
        <ListGroup>
          {listItems}
        </ListGroup>
        <Button bsStyle="primary" className="pull-right" onClick={this.handleShowPopup}>
          Add New Task
        </Button>
      </div>
    )
  }
}

export default TasksList;