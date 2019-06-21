import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(){
    super();
    this.todoItems = [
      // { title: 'Go Play Soccer', isCompleted: true},
      // { title: 'English', isCompleted: true},
      // { title: 'Gay'}
    ];
  }
  render(){
    if(this.todoItems.length > 0){
      return (
        <div className="App">
          {
            this.todoItems.map((item, index) => 
              <TodoItem key={index} item={item} />
            )
          }
        </div>
      )
    } else {
      return (
        <div className="App">
        Nothing Here
       </div>
      )
    }
  }
}

export default App;
