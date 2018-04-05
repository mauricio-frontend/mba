import React, {Component} from 'react';
import { ListGroup, Button } from 'react-bootstrap';
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
    console.log('Modal Parameters => ', parameters);
    this.hideModal();
  }

  componentWillMount() {
    this.setState({
      items: [
        {
          "id": 1,
          "title": "Item 1",
          "description": "Description Item 1"
        },
        {
          "id": 2,
          "title": "Item 2",
          "description": "Description Item 2"
        },
      ]
    })
  }

  render() {
    const items = this.state.items;
    const listItems = items.map((item) => {
      return <TasksItem item={item} key={item.id} />
    });

    return (
      <div>
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