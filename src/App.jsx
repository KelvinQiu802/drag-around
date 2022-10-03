import './App.css';
import Draggable from './components/draggable';
import React from 'react';

function App() {
  const [position, setPosition] = React.useState({
    top: 50,
    left: 50,
  });

  return (
    <div className='App'>
      <Draggable top={position.top} left={position.left} />
    </div>
  );
}

export default App;
