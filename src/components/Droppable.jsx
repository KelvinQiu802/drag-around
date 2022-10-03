import React from 'react';
import { useDrop } from 'react-dnd';

function Droppable({ children }) {
  return <div className='droppable'>{children}</div>;
}

export default Droppable;
