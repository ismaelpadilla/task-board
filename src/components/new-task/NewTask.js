import { useState } from "react";

const NewTask = (props) => {
  const [showModal, innerSetShowModal] = useState(props.showModal);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const setShowModal = (show) => {
    innerSetShowModal(show);
    props.setShowModal(show);
  }

  const addTask = () => {
    props.onNewTask(taskTitle, taskDescription);
    setShowModal(false);
  }

  const cancelTask = () => {
    setShowModal(false);
  }
  
  const onTitleChange = (event) => {
    setTaskTitle(event.target.value);
  }
  
  const onDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }

  return (
showModal ? (
        <>
          <div onClick={cancelTask} className="block inset-0 fixed z-40 opacity-50 bg-black h-screen w-screen"></div>
            <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute w-auto z-50 w-2/5 max-w-7xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid">
                  <h3 className="text-xl font-semibold">
                  Add new task
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={cancelTask}
                  >
                    <span className="bg-transparent text-gray-300 hover:text-gray-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-3 flex-auto">
                <form className="flex flex-col">
                  <div className="mb-3">
                    <label htmlFor="title" className="block uppercase text-blueGray-600 font-bold mb-2"> Title </label>
                    <input value={taskTitle} onChange={onTitleChange} type="text" id="title" className="form-input border-0 px-3 py-3 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Task title" />
                  </div>

                  <div>
                    <label htmlFor="description" className="block uppercase text-blueGray-600 font-bold mb-2"> Description </label>
                    <textarea value={taskDescription} onChange={onDescriptionChange} id="description" className="form-input border-0 px-3 py-3 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Task description" />
                  </div>
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={cancelTask}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white hover:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addTask}
                  >
                    Add task
                  </button>
                </div>
              </div>
          </div>
        </>
      ) : null
  );
}

export default NewTask;
