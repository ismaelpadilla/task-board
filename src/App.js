import "./App.css";
import BoardColumn from "./components/bord-column/BoardColumn";

function App() {
  const board = [
    {title: "To do", tasks: [{title: "Task title", description: "Task description"}]},
    {title: "In Progress", tasks: []},
    {title: "Done", tasks: [{title: "Completed task", description: "Task description"}]},
  ];
  return (
    <div>
      <div>Add new task</div>
      <div className="grid grid-cols-3">
        {board.map((col, i) => <BoardColumn key={i} title={col.title} tasks={col.tasks}/>)}
      </div>
    </div>
  );
}

export default App;
