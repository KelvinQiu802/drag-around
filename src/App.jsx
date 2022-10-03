import './App.css';
import Draggable from './components/draggable';
import Droppable from './components/Droppable';
import Item from './components/Item';
import { nanoid } from 'nanoid';
import React from 'react';

function App() {
  const [content, setContent] = React.useState([]);

  return (
    <div className='App'>
      <Droppable setContent={setContent}>
        {content.map((item) => (
          <Draggable
            id={item.id}
            key={item.id}
            top={item.top}
            left={item.left}
          />
        ))}
      </Droppable>
      <div>
        <Item />
      </div>
    </div>
  );
}

export default App;
