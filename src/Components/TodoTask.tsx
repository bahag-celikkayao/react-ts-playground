import React, {useState} from 'react'
import { ITask } from '../interfaces'

interface Props {
    task: ITask;
    updateTask(task: ITask): void;
    removeTask(taskId: number): void;
}

const TodoTask = ({ task, removeTask, updateTask}: Props) =>{

    const [edit, setEdit] = useState<boolean>(false);
    const [editDeadline, setEditDeadline] = useState<boolean>(false);

    return (
        <div className={`task ${task.done ? 'done-task': ''}`}>
            <div className="content">
                {(edit) && <input type="text" value={task.taskName} onBlur={() => {setEdit(!edit)}} onChange={(e) => updateTask({...task, taskName: e.target.value})}/>}
                {(!edit) && <span onClick={() => {setEdit(!edit)}}>{task.taskName}</span>}

                {(editDeadline) && <input type="text" value={task.deadline} onBlur={() => {setEditDeadline(!editDeadline)}} onChange={(e) => updateTask({...task, deadline: parseInt(e.target.value)})}/>}
                {(!editDeadline) && <span onClick={() => {setEditDeadline(!editDeadline)}}>{task.deadline}</span>}
            </div>
            <button onClick={() => {removeTask(task.id)}}>Remove</button> 
            <input type="checkbox" checked={task.done} onChange={(e) => updateTask({...task, done: e.target.checked})}/>
        </div>
    )
}

export default TodoTask