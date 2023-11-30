import React,{useState} from 'react';
import "./SelectTier.css";

function SelectTier() {

     // State to manage active tab
    const [activeTab, setActiveTab] = useState('tab4');

     // Function to handle tab clicks
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
        <>
            <h4>Select Tier</h4>
            <div className="tabs-container">
                <div className="tab-buttons">
                    <button
                        className={activeTab === 'tab1' ? 'active' : ''}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Tier 1
                    </button>
                    <button
                        className={activeTab === 'tab2' ? 'active' : ''}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Tier 2
                    </button>
                    <button
                        className={activeTab === 'tab3' ? 'active' : ''}
                        onClick={() => handleTabClick('tab3')}
                    >
                        Tier 3
                    </button>
                    <button
                        className={activeTab === 'tab4' ? 'active' : ''}
                        onClick={() => handleTabClick('tab4')}
                    >
                        Tier 4
                    </button>
                    <button
                        className={activeTab === 'tab5' ? 'active' : ''}
                        onClick={() => handleTabClick('tab5')}
                    >
                        Tier 5
                    </button>
                </div>
            </div>
        </>
    )
}

export default SelectTier;
