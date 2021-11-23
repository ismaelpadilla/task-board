import React, {useState} from 'react';
import BoardColumn from "./components/bord-column/BoardColumn";
import {DragDropContext} from "react-beautiful-dnd";
import NewTask from './components/new-task/NewTask';
import DarkModeToggle from './components/dark-mode-toggle/DarkModeToggle'; 


function App() {
  const initialBoard = [
    {id: 1, title: "To do", tasks: [{id: 1, title: "Sample task", description: "We can drag this around!"}, {id: 2, title: "Do stuff", description: "This is a task with a very long description. The text should be cut off at some point so that a sigle task doesn't take up the whole screen!"}]},
    {id: 2, title: "In Progress", tasks: []},
    {id: 3, title: "Done", tasks: [{id: 3, title: "Publish this website", description: "Publish using github pages"}]},
  ];

  const [board, updateBoard] = useState(initialBoard);
  const [showModal, setShowModal] = useState(false);
  const [lastId, setLastId] = useState(3);
  const [darkModeEnabled, setDarkMode] = useState(false);

  const handleOnDragEnd = (result) => {
    const taskId = result.draggableId;
    const sourceBoardId = Number(result.source.droppableId);
    const sourceBoardIndex = result.source.index;
    const destinationBoardId = Number(result.destination?.droppableId);
    const destinationIndex = result.destination?.index;
    console.log("item", taskId, "dragged from", sourceBoardId, "to", destinationBoardId, "at index", destinationIndex);

    // destinationBoardId can be undefined if item was dragged into a non droppable zone
    if (destinationBoardId) {
      const newBoard = JSON.parse(JSON.stringify(board));
      const sourceCol = newBoard.find(col => col.id === sourceBoardId);
      const [movedTask] = sourceCol.tasks.splice(sourceBoardIndex, 1);

      const destCol = newBoard.find(col => col.id === destinationBoardId);
      destCol.tasks.splice(destinationIndex, 0, movedTask);

      updateBoard(newBoard);
    }
  }

  const onClickNewTask = () => {
    setShowModal(true);
  };

  const onShowModal = (show) => {
    setShowModal(show);
  }

  const onNewTask = (taskTitle, taskDescription) => {
    const [oldFirstColumn, ...rest] = board;
    const newFirstColumn = JSON.parse(JSON.stringify(oldFirstColumn));
    newFirstColumn.tasks.push({id: lastId + 1, title: taskTitle, description: taskDescription});
    setLastId(lastId + 1);
    updateBoard([newFirstColumn, ...rest]);
  }

  const toggleDarkMode = () => {
    if (!darkModeEnabled)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    setDarkMode(!darkModeEnabled);
  }

  return (
    <div className="w-4/5 mx-auto">
      {showModal ? <NewTask onNewTask={onNewTask} showModal={showModal} setShowModal={onShowModal} /> : null}
      <div className="flex justify-between my-4">
        <div onClick={onClickNewTask} className="cursor-pointer">
          <div className="rounded bg-green-500 text-white font-bold inline px-1 align-center align-middle">+</div>
          <span className="pl-1 align-middle dark:text-gray-100">Add new task</span>
        </div>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="grid grid-cols-3 gap-x-10 mt-5">
          {board.map((col) => <BoardColumn id={col.id} key={col.id} title={col.title} tasks={col.tasks} />)}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
