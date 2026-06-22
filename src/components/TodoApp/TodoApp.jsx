import { AddTaskForm, TaskList, FilterFooter } from "../../components";

const TodoApp = () => (
  <div className="TodoApp">
    <AddTaskForm />
    <TaskList />
    <FilterFooter />
  </div>
);

export default TodoApp;
