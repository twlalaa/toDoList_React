// import "./taskList.css";

// //Components
// import Button from "../button/button";

// const TaskList = () => {
//   return (
//     <div className="taskList">
//       <ul>
//         {/* <li>
//           <span>Do the dishes</span>
//           <Button>Delete Task</Button>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;

//Css

import "./taskList.css";

//Components

import ListItem from "../ListItem/listItem";

const Tasklist = (props) => {
  console.log(props.tasks);
  const addLi = () => {};

  return (
    <div className="taskList">
      <ul>
        {props.tasks.map((task, index) => (
          <ListItem
            key={index}
            span={task}
            removeItem={props.remove.bind(null, index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tasklist;
