import React, { } from 'react'



const Task   = ({title, description}) =>{

 
   
        return (
            <div className='task'>
                <span className='titleSpan'>{title}</span>
                <span className='descriptionSpan'>{description}</span>
                <div className='taskBtns'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        );
    
}

export default Task;