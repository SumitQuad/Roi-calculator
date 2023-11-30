import React, { useState } from 'react';
import './HideDetails.css';

function HideDetails() {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(!show);
    }

    return (
        <div className="hide-details-container">
            <h5>
                {show ? "Hide Details" : "Show Details"}
                <span onClick={handleToggle} className="dropdown-icon">&#9660;</span>
            </h5>
            
            {show && (
                <>
                    <div className="paragraphs-container">
                        <p>APY</p>
                        <p>63.62%</p>
                    </div>
                    <ul>
                        <li>Calculated based on current rates</li>
                        <li>
                            All figures are estimates provided for your convenience only, and by
                            no means represent guaranteed returns.
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default HideDetails;
