import React from 'react';
import { useDrag } from 'react-dnd';

function Item() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className='item' ref={drag}>
      item
    </div>
  );
}

export default Item;
