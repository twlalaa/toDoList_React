// import "./addTask.css";

// //Components
// import Button from "../button/button";

// //Hooks
// import { useState } from "react";

// const AddTask = (props) => {
//   const [task, setTask] = useState("");

//   const addTask = (e) => {
//     setTask(e.target.value);
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     props.send(task);
//     setTask("");
//   };

//   return (
//     <div className="addTask">
//       <form onSubmit={submitForm}>
//         <input
//           onChange={addTask}
//           value={task}
//           type="text"
//           placeholder="Add your task"
//         />
//         <Button>Add Task</Button>
//       </form>
//     </div>
//   );
// };

// export default AddTask;

//CSS

import "./addTask.css";

//Components

import Button from "../button/button";

//Hooks

import { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState("");

  const changeInput = (e) => {
    setTask(e.target.value);
  };

  const sendValue = (e) => {
    e.preventDefault();
    if (!task) return;
    props.send(task);
    setTask("");
  };

  return (
    <div className="addTask">
      <form onSubmit={sendValue}>
        <input
          onChange={changeInput}
          type="text"
          placeholder="Add your task"
          value={task}
        />
        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
