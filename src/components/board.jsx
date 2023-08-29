import React, { useState } from 'react'
import AddTask from './addTask';
import Task from './task';
import { v4 } from 'uuid';

function Board () {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    const [tasks, setTasks] = useState([]);


    

    const handleCreateTask = (title, description) => {
        const newTask = { title, description, id:v4() };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setIsAddTaskOpen(false);
    };

    const handleDeleteTask = (id) =>{
        setTasks(prevState =>prevState.filter(task =>task.id !== id))
    };


    const handleEditTask = (id, editedTitle, editedDescription) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? { ...task, title: editedTitle, description: editedDescription }
                    : task
            )
        );
    }



    const openAddTask = () => {
        setIsAddTaskOpen(true);
    };

    const closeAddTask = () => {
        setIsAddTaskOpen(false);
    };





  

        return (
            <div className='board'>
                <div className='addTaskBtnContainer'>
                    <button className='addTaskBtn' onClick={openAddTask}>addTask</button>
                </div>
                <div>
                    <div className='status'>
                        <span className='statusText'>ToDo</span>

                        {tasks.map(task => (
                        <div key={task.id}>
                            <Task
                                title={task.title}
                                description={task.description}
                                id={task.id}
                                handleDeleteTask={handleDeleteTask}
                                handleEditTask={handleEditTask}
                            />
                        </div>
                    ))}

                    </div>
                    <div className='status'>
                        <span className='statusText'>inProgress</span>
                         <div>
                            <h2>Test</h2>
                        </div> 
                    </div>
                    <div className='status'>
                        <span className='statusText'>done</span>
                        {/* <div>
                            <h2>Content</h2>
                      </div> */}
                    </div>
                </div>
                {isAddTaskOpen && <AddTask onClose={closeAddTask} onCreateTask={handleCreateTask} />}
            </div>
        );
    
}


export default Board;
