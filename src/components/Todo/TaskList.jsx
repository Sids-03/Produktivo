import React from 'react';

const TaskList = ({tasks,setTasks,setEditTask})=>{
  const handleComplete = (task) =>{
    setTasks(
      tasks.map((item)=>{
        if(item.id === task.id){
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  };
  const handleEdit = ({id}) => {
    const findTask = tasks.find((task) => task.id === id);
    setEditTask(findTask);
  };
  const handleDelete = ({id}) => {
    setTasks(tasks.filter((task)=>task.id !== id));
  };
  return (
    <div>
      {tasks.toReversed().map((task)=>(
        <li className="list_items" key={task.id}>
          <input
            type="text"
            value={task.title}
            className={`list ${task.completed ? "complete" : ""}`}
            onChange={(event)=>event.preventDefault()}
          />
          <div>
            <button 
              className="edit-button"
              onClick={()=>handleEdit(task)}>
              <i className="fa fa-edit"></i>
            </button>
            <button 
              className='complete-button'
              onClick={()=> handleComplete(task)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button 
              className="delete-button"
              onClick={()=>handleDelete(task)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TaskList;
