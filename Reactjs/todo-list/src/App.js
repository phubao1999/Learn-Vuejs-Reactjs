import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {

  return (
    <div className="App">
      <header className="App">
        <TodoItem title="Mua Bim Bim" />
        <TodoItem title="Di Da Bong" />
        <TodoItem title="Shoping" /> 
      </header>
    </div>
  );
}

export default App;
