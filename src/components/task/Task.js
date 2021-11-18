const Task = (props) => {
  return (
    <div className="bg-gray-100 hover:bg-gray-300 rounded-lg p-3 mx-3 filter drop-shadow-sm">
      <h4 className="text-lg font-sans">{props.title}</h4>
      <p className="text-base font-sans">{props.description}</p>
    </div>
  );
};

export default Task;
