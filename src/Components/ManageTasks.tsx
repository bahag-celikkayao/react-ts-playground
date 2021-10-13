import React, {FC, useState, ChangeEvent } from 'react';
import TodoTask from '../Components/TodoTask';
import {ITask} from "../interfaces";

const ManageTasks: FC = () =>{

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if(e.target.name === "task"){
      setTask(e.target.value);
    }
    else {
      setDeadline(Number(e.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { id: Date.now(),taskName: task, deadline: deadline, done:false};
    setTodoList([...todoList, newTask]);
    setTask(""); setDeadline(0);
    console.log(todoList);
  } 

  const removeTask = (taskId: number): void => {
    setTodoList(todoList.filter((task) => { return task.id != taskId } ))
  }

  const updateTask = (task: ITask) => {
    setTodoList( todoList.map( todo => {
      if (todo.id === task.id) return  {...todo,done:task.done, taskName:task.taskName, deadline: task.deadline}
      return todo;
      })
    )
  }

  return (
    <>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Description..." name="task" value={task} onChange={handleChange}/>
          <input type="number" placeholder="Deadline. (in Days)..." name="deadline" value={deadline} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add Countdown</button>
      </div>
      <div className="todoList">
          {todoList.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} removeTask={removeTask} updateTask={updateTask}/>
          })}
      </div>
    </>
  );

}

export default ManageTasks