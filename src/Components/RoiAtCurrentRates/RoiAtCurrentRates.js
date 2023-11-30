import React, { useState } from 'react';
import "./RoiAtCurrentRates.css";

function RoiAtCurrentRates() {
    const [isEditing, setIsEditing] = useState(false);
    const [placeholder, setPlaceholder] = useState('100.0 USD');

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        setIsEditing(false);
    }

    const handleInputChange = (event) => {
        setPlaceholder(event.target.value);
    }

    return (
        <div className="container">
            <p>ROI At Current Rates</p>
            <div className={`input-container ${isEditing ? 'editing' : ''}`}>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            className="full-width-input"
                            placeholder={placeholder}
                            onChange={handleInputChange}
                        />
                        <span className="edit-icon" onClick={handleSaveClick}>&#10003;</span>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            className="full-width-input"
                            placeholder={placeholder}
                            readOnly
                            disabled
                        />
                        <span className="edit-icon" onClick={handleEditClick}>&#9998;</span>
                    </>
                )}
            </div>
            <p className="align-right">~ 3 cake + 10 Don</p>
        </div>
    )
}

export default RoiAtCurrentRates;
