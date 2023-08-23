// //Components
// import AddTask from "./Components/addTask/addTask";
// import TaskList from "./Components/taskList/taskList.jsx";

// //Hooks
// import { useState } from "react";

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   console.log(tasks);

//   const sendData = (task) => {
//     const newTasks = [...tasks, task];
//     setTasks(newTasks);
//   };

//   return (
//     <div>
//       <AddTask send={sendData} />
//       <TaskList />
//     </div>
//   );
// };

// export default App;

//Components

import TaskList from "./Components/taskList/taskList";

import AddTask from "./Components/addTask/addTask";

//Hooks

import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    let newArray = [...tasks, task];
    setTasks(newArray);
  };

  const removeTask = (btnIndex) => {
    let fileteredArray = [...tasks];
    fileteredArray.splice(btnIndex, 1);
    setTasks(fileteredArray);
  };

  return (
    <>
      <AddTask send={addNewTask} />
      {tasks.length !== 0 && <TaskList remove={removeTask} tasks={tasks} />}
    </>
  );
};

export default App;
