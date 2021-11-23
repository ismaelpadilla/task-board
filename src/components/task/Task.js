import React, {useState} from 'react';

const Task = React.forwardRef((props, ref) => {
  const [hover, setHover] = useState(false);

  const draggingClassName = props.isDragging ? "bg-blue-200 shadow-lg dark:bg-indigo-800" : "";

  const toggleHover = () => {
    setHover(!hover);
  }

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} ref={ref} {...props.draggableProps} {...props.dragHandleProps} className={`dark:bg-gray-500 dark:hover:bg-indigo-900 bg-white hover:bg-blue-100 hover:shadow-lg rounded-lg p-3 mx-3 filter drop-shadow-sm ${draggingClassName}`}>
      <h4 className="dark:text-gray-100 text-lg font-sans">{props.title}</h4>
      <p className={"dark:text-gray-100 text-base text-justify font-sans " + (hover || props.isDragging ? "" : "truncate")}>{props.description}</p>
    </div>
  );
});

export default Task;
