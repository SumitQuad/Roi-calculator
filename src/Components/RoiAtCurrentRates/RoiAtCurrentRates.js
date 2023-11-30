import React, { useState } from 'react';
import "./RoiAtCurrentRates.css";

function RoiAtCurrentRates() {
    const [isEditing, setIsEditing] = useState(false);
    const [placeholder, setPlaceholder] = useState('100.0 USD');

    // Sets isEditing to true when the user clicks on the edit icon.
    const handleEditClick = () => {
        setIsEditing(true);
    }

    // Sets isEditing to false when the user clicks on the save icon
    const handleSaveClick = () => {
        setIsEditing(false);
    }

    // Updates the placeholder state based on the user's input in the input field.
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
