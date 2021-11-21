import Task from "../task/Task";
import {Draggable, Droppable} from "react-beautiful-dnd";


const BoardColumn = (props) => {
  return (
    <div className="bg-gray-200 rounded-sm">
      <h3 className="text-lg font-sans font-bold text-center">{props.title}</h3>
      <Droppable droppableId={String(props.id)}>
        {(droppableProvided) => (
          <div className="flex flex-col h-full gap-4 py-3" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {props.tasks.map((task, i) =>
              <Draggable key={task.id} index={i} draggableId={String(task.id)}>
                {(draggableProvided) => (
                  <Task id={task.id} title={task.title} description={task.description} ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps} />
                )}
              </Draggable>
            )}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default BoardColumn;
