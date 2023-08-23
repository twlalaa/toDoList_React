import "./listItem.css";

import Button from "../button/button";
const ListItem = (props) => {
  return (
    <li>
      <span>{props.span}</span>
      <Button className="btn" click={props.removeItem}>Delete Task</Button>
    </li>
  );
};

export default ListItem;
