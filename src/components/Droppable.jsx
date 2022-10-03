import React from 'react';
import { nanoid } from 'nanoid';
import { useDrop } from 'react-dnd';

function Droppable({ children, setContent }) {
  let node = React.useRef();

  const [, drop] = useDrop(() => ({
    accept: 'box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      if (item.state === 'new') {
        // Add
        setContent((prev) => [
          ...prev,
          {
            id: nanoid(),
            left: monitor.getClientOffset().x - node.current.offsetLeft,
            top: monitor.getClientOffset().y - node.current.offsetTop,
          },
        ]);
      } else {
        setContent((prev) => {
          const arrCopy = [...prev];
          const index = prev.findIndex((each) => each.id === item.id);
          const copyItem = arrCopy[index];
          arrCopy.splice(index, 1, {
            ...copyItem,
            left,
            top,
          });
          return arrCopy;
        });
      }
    },
  }));

  drop(node);

  return (
    <div className='droppable' ref={node}>
      {children}
    </div>
  );
}

export default Droppable;
