import React,{useState,useEffect} from 'react'
import Header from "./TodoHeader";
import TaskList from "./TaskList";
import Form from "./Form";
const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [input, setInput]= useState("");
  const[tasks,setTasks]= useState(initialState);
  const [editTask,setEditTask]=useState(null);
  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);
  return (
    <div className='task-wrapper'> 
      <div>
        <Header/>
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      </div>
      <div>
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      </div>
    </div>
  );
}
export default Todo;


