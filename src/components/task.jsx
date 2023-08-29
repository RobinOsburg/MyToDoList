import React, { useState } from 'react';




const Task   = ({title, description, id , handleDeleteTask, handleEditTask}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
   

    const handleEditClick = () => {
        setIsEditing(true);
    };


    const handleSaveClick = () => {
        handleEditTask(id, editedTitle, editedDescription);
        setIsEditing(false);
    };


        return (
            <div className='task'>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <div>
                    <span className='titleSpan'>{title}</span>
                    <span className='descriptionSpan'>{description}</span>
                    <div className='taskBtnsContainer'>
                        <button className='taskBtns' onClick={handleEditClick}>
                            Edit
                        </button>
                        <button
                            className='taskBtns'
                            onClick={() => handleDeleteTask(id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;