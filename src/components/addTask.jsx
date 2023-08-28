import React, { useState} from 'react';

const AddTask = ({ onClose, onCreateTask  }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateTask = () => {
        onCreateTask(title, description);
        setTitle('');
        setDescription('');
        // console.log(title,'from addTask');
        // console.log(description,'from addTask');
    };
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleCreateTask();
        }if (event.key === 'Escape') {
            onClose();
        }
    };


    return (
        <div className='popup' onKeyDown={handleKeyDown}>
            <div className='popup-content'>
                <button onClick={onClose}>Close</button>
                <input type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title" />
                <input type="text"
                    value={description}
                    onChange={handleDescriptionChange}  
                    placeholder="Description" />
                <button onClick={handleCreateTask}>Create</button>
            </div>
        </div>
    );
};

export default AddTask;
