import { useState } from 'react';
import BoardColumn from "./components/bord-column/BoardColumn";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.css";

function App() {
  const initialBoard = [
    {id: 1, title: "To do", tasks: [{id: 1, title: "Task title", description: "Task description"},{id: 5, title: " title", description: "Task description"}]},
    {id: 2, title: "In Progress", tasks: []},
    {id: 3, title: "Done", tasks: [{id: 2, title: "Completed task", description: "Task description"}]},
  ];

  const [board, updateBoard] = useState(initialBoard);

  const handleOnDragEnd = (result) => {
    const taskId = result.draggableId;
    const sourceBoardId = result.source.droppableId;
    const sourceBoardIndex = result.source.index;
    const destinationBoardId = result.destination?.droppableId;
    const destinationIndex = result.destination?.index;
    console.log("item", taskId, "dragged from", sourceBoardId, "to", destinationBoardId, "at index", destinationIndex);

    // destinationBoardId can be undefined if item was dragged into a non droppable zone
    if (destinationBoardId) {
      const newBoard = JSON.parse(JSON.stringify(board)); //Object.assign([], board);//
      const sourceCol = newBoard.find(col => col.id == sourceBoardId);
      const [movedTask] = sourceCol.tasks.splice(sourceBoardIndex, 1);

      const destCol = newBoard.find(col => col.id == destinationBoardId);
      destCol.tasks.splice(destinationIndex, 0, movedTask);

      updateBoard(newBoard);
    }
  }

  return (
    <div>
      <div>Add new task</div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="grid grid-cols-3">
          {board.map((col) => <BoardColumn id={col.id} key={col.id} title={col.title} tasks={col.tasks} />)}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
