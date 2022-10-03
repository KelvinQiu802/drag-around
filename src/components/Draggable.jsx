import React from 'react';
import { useDrag } from 'react-dnd';

function Draggable({ left, top }) {
  return <div style={{ posotion: 'absolute', left, top }}>draggable</div>;
}

export default Draggable;
