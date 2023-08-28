import React, { useState } from 'react'
import AddTask from './addTask';
import Task from './task';

function Board () {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    const [tasks, setTasks] = useState([]);


    

    const handleCreateTask = (title, description) => {
        const newTask = { title, description };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setIsAddTaskOpen(false);
    };



    const openAddTask = () => {
        setIsAddTaskOpen(true);
    };

    const closeAddTask = () => {
        setIsAddTaskOpen(false);
    };





  

        return (
            <div className='board'>
                <div className='addTaskBtnContainer'>
                    <button onClick={openAddTask}>addTask</button>
                </div>
                <div>
                    <div className='status'>
                        <span className='statusText'>ToDo</span>

                        {tasks.map((task, index) => (
                            <div key={index}>
                                <Task title={task.title} description={task.description} />
                            </div>
                        ))}

                    </div>
                    <div className='status'>
                        <span className='statusText'>inProgress</span>
                        {/* <div>
                            <h2>Content</h2>
                        </div> */}
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
