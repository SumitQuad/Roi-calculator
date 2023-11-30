import React, { useState, useEffect } from 'react';
import "./InputCakeNumber.css";

function InputCakeNumber({ isCakeSelected }) {
    // State for active tab and input value
    const [activeTab, setActiveTab] = useState('tab1');
    const [inputValue, setInputValue] = useState('');

    // useEffect to handle changes when the currency selection (Cake/USD) changes
    useEffect(() => {
        // Reset input value based on the selected currency
        if (isCakeSelected) {
            setInputValue('');
        } else {
            setInputValue('');
        }
    }, [isCakeSelected]);


    // Function to handle tab clicks and update input value accordingly
    const handleTabClick = (tab) => {
        setActiveTab(tab);

        switch (tab) {
            case 'tab1':
                setInputValue('');
                break;
            case 'tab2':
                if (isCakeSelected) {
                    setInputValue('10 Cake');
                } else {
                    setInputValue('100 USD');
                }
                break;
            case 'tab3':
                if (isCakeSelected) {
                    setInputValue('100 Cake');
                } else {
                    setInputValue('1000 USD');
                }
                break;
            default:
                setInputValue('');
        }
    };

    return (
        <div className='input-cake-container'>
            <div className="input-container">
                <input
                    type="text"
                    className="full-width-input"
                    placeholder={isCakeSelected ? '2.10000 Cake' : '20.82 USD'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <div className='tab-balance-container'>
                <div className="tabs-container">
                    <div className="tab-buttons">
                        <button
                            className={activeTab === 'tab1' ? 'active' : ''}
                            onClick={() => handleTabClick('tab1')}
                        >
                            USE BALANCE
                        </button>
                        <button
                            className={activeTab === 'tab2' ? 'active' : ''}
                            onClick={() => handleTabClick('tab2')}
                        >
                            {isCakeSelected ? '10 Cake' : '100 $'}
                        </button>
                        <button
                            className={activeTab === 'tab3' ? 'active' : ''}
                            onClick={() => handleTabClick('tab3')}
                        >
                            {isCakeSelected ? '100 Cake' : '1000 $'}
                        </button>
                    </div>
                </div>

                <div className='Balance'>
                    <h4>~$20.82</h4>
                </div>
            </div>
        </div>
    );
}

export default InputCakeNumber;
