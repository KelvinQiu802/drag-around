import './App.css';
import Draggable from './components/draggable';
import Droppable from './components/Droppable';
import React from 'react';

function App() {
  const [position, setPosition] = React.useState({
    top: 50,
    left: 50,
  });

  return (
    <div className='App'>
      <Droppable>
        <Draggable top={position.top} left={position.left} />
      </Droppable>
    </div>
  );
}

export default App;
