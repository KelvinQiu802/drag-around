import React from 'react';
import { useDrop } from 'react-dnd';

function Droppable({ children, setPosition }) {
  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      setPosition({
        top,
        left,
      });
    },
  }));

  return (
    <div className='droppable' ref={drop}>
      {children}
    </div>
  );
}

export default Droppable;
