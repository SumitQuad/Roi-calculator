import React, { useState } from 'react';
import "./ToggleButton.css";

function ToggleButton({ onToggleChange }) {
    const [isCakeSelected, setIsCakeSelected] = useState(true);

    // Handles the toggle click event. 
    const handleToggle = () => {
        setIsCakeSelected(!isCakeSelected);
        if (onToggleChange) {
            onToggleChange(!isCakeSelected);
        }
    };

    return (
        <div className='toggle-button-container'>
            <span className={isCakeSelected ? 'selected' : 'not-selected'} onClick={() => setIsCakeSelected(true)}>Cake</span>
            <label className="switch">
                <input type="checkbox" checked={isCakeSelected} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <span className={!isCakeSelected ? 'selected' : 'not-selected'} onClick={() => setIsCakeSelected(false)}>USD</span>
        </div>
    );
}

export default ToggleButton;
