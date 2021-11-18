import Task from "../task/Task";

const BoardColumn = (props) => {
  return (
    <div className="bg-gray-200 rounded-sm">
      <h3 className="text-lg font-sans font-bold text-center">{props.title}</h3>
      <div className="flex flex-col gap-4 py-3">
        {props.tasks.map((task, i) => <Task title={task.title} description={task.description} key={i} />)}
      </div>
    </div>
  );
};

export default BoardColumn;
