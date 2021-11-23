import React from "react";
import Task from "../task/Task";
import {Draggable, Droppable} from "react-beautiful-dnd";


const BoardColumn = (props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-md">
      <h3 className="dark:text-gray-200 text-lg mt-2 font-sans font-bold text-center">{props.title}</h3>
      <Droppable droppableId={String(props.id)}>
        {(droppableProvided) => (
          <div className="flex flex-col h-full gap-4 py-3" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {props.tasks.map((task, i) =>
              <Draggable key={task.id} index={i} draggableId={String(task.id)}>
                {(draggableProvided, draggableSnapshot) => (
                  <Task id={task.id} title={task.title} description={task.description} isDragging={draggableSnapshot.isDragging} ref={draggableProvided.innerRef} draggableProps={draggableProvided.draggableProps} dragHandleProps={draggableProvided.dragHandleProps} />
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
