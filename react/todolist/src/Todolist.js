import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <Todoitem 
            key={index} 
            content={item} 
            index={index} 
            delete={this.handleDelete}/>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </div>
    );
  }
}

export default Todolist;
