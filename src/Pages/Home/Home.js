import React, { useState } from 'react';
import "./Home.css";
import ToggleButton from '../../Components/ToggleButton/ToggleButton';
import Buttons from "../../Components/Buttons/Buttons";
import TimeFrame from '../../Components/TimeFrame/TimeFrame';
import SelectTier from '../../Components/SelectTier/SelectTier';
import EnableAcceleratedApy from '../../Components/EnableAcceleratedApy/EnableAcceleratedApy';
import HideDetails from '../../Components/HideDetails/HideDetails';
import RoiAtCurrentRates from '../../Components/RoiAtCurrentRates/RoiAtCurrentRates';
import InputCakeNumber from '../../Components/InputCakeNumber/InputCakeNumber';

function Home() {
    
    // State for Cake Selection, initially set to 'true'
    const [isCakeSelected, setIsCakeSelected] = useState(true);

    // Function to handle the toggle change, updating the state based on the provided toggleState
    const handleToggleChange = (toggleState) => {
        setIsCakeSelected(toggleState);
    };

    return (
        <div className='App'>
            <div className='card'>
                <div className='card-content'>
                    <div className='heading-part'>
                        <h1>
                            ROI Calculator
                            <span className="close-icon" onClick={() => console.log("Close clicked")}>✖</span>
                        </h1>
                    </div>
                    <ToggleButton onToggleChange={handleToggleChange} />
                    <InputCakeNumber isCakeSelected={isCakeSelected} />
                    <TimeFrame />
                    <EnableAcceleratedApy />
                    <SelectTier />
                    <RoiAtCurrentRates />
                    <Buttons />
                    <HideDetails />
                </div>
            </div>
        </div>
    );
}

export default Home;
