import React, {useState} from 'react';

const Task = React.forwardRef((props, ref) => {
  const [hover, setHover] = useState(false);

  const draggingClassName = props.isDragging ? "bg-blue-200 shadow-lg" : "";

  const toggleHover = () => {
    setHover(!hover);
  }

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} ref={ref} {...props.draggableProps} {...props.dragHandleProps} className={`bg-white hover:bg-blue-100 hover:shadow-lg rounded-lg p-3 mx-3 filter drop-shadow-sm ${draggingClassName}`}>
      <h4 className="text-lg font-sans">{props.title}</h4>
      <p className={"text-base text-justify font-sans " + (hover || props.isDragging ? "" : "truncate")}>{props.description}</p>
    </div>
  );
});

export default Task;
