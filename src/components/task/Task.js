import React from 'react';

const Task = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props} className="bg-gray-100 hover:bg-gray-300 rounded-lg p-3 mx-3 filter drop-shadow-sm">
      <h4 className="text-lg font-sans">{props.title}</h4>
      <p className="text-base font-sans">{props.description}</p>
    </div>
  );
});

export default Task;
