import React, { useState } from 'react';
import "./ToggleButton.css";

function ToggleButton() {
    const [isCakeSelected, setIsCakeSelected] = useState(true);

    const handleToggle = () => {
        setIsCakeSelected(!isCakeSelected);
    }
    return (
        <div className='toggle-button-container'>
            <span className={isCakeSelected ? 'selected' : ''} onClick={() => setIsCakeSelected(true)}>Cake</span>
            <label className="switch">
                <input type="checkbox" checked={isCakeSelected} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
            <span className={!isCakeSelected ? 'selected' : ''} onClick={() => setIsCakeSelected(false)}>USD</span>
        </div>
    )
}

export default ToggleButton
