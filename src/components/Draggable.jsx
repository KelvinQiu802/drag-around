import React from 'react';
import { useDrag } from 'react-dnd';

function Draggable({ left, top }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [top, left]
  );

  return (
    <div style={{ ...styles, left, top }} ref={drag}>
      draggable
    </div>
  );
}

const styles = {
  position: 'absolute',
  padding: '5px',
  border: '1px solid orange',
};

export default Draggable;
