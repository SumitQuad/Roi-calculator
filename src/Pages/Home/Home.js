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
    const [isCakeSelected, setIsCakeSelected] = useState(true);

    const handleToggleChange = (toggleState) => {
        setIsCakeSelected(toggleState);
    };

    return (
        <div className='App'>
            <div className='card'>
                <div className='card-content'>
                    <div className='heading-part'>
                        <h2>
                            ROI Calculator
                            <span className="close-icon" onClick={() => console.log("Close clicked")}>✖</span>
                        </h2>
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
