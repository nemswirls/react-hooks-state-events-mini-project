import React from "react";
import Task from './Task';
function TaskList({tasks, onDeleteTask}) {
 return (
   <div className="tasks">
     {tasks.map((task) => 
    <Task text={task.text} 
    onDelete={onDeleteTask}
    category={task.category}
     key={task.id}/>
    )}
    </div>
  );
}

export default TaskList;
