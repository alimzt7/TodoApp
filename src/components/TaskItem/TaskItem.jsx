import "./TaskItem.css";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, deleteTask, handleChangeStatus }) => (
  <li className="TaskItem">
    <input
      onChange={() => handleChangeStatus(task.id)}
      id="Task"
      type="checkbox"
      checked={task.status}
    />
    <h2>{task.title}</h2>
    <button
      type="button"
      onClick={() => {
        deleteTask(task.id);
      }}
    >
      <MdDelete />
    </button>
  </li>
);

export default TaskItem;
