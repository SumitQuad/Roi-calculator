import React,{useState} from 'react';
import "./TimeFrame.css";

function TimeFrame() {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
        <>
            <h3>TimeFrame</h3>
            <div className="tabs-container">
                <div className="tab-buttons">
                    <button
                        className={activeTab === 'tab1' ? 'active' : ''}
                        onClick={() => handleTabClick('tab1')}
                    >
                        1 Day
                    </button>
                    <button
                        className={activeTab === 'tab2' ? 'active' : ''}
                        onClick={() => handleTabClick('tab2')}
                    >
                        7 Days
                    </button>
                    <button
                        className={activeTab === 'tab3' ? 'active' : ''}
                        onClick={() => handleTabClick('tab3')}
                    >
                        30 Days
                    </button>
                    <button
                        className={activeTab === 'tab4' ? 'active' : ''}
                        onClick={() => handleTabClick('tab4')}
                    >
                        1 year
                    </button>
                    <button
                        className={activeTab === 'tab5' ? 'active' : ''}
                        onClick={() => handleTabClick('tab5')}
                    >
                        5 Years
                    </button>
                </div>
            </div>
        </>
    )
}

export default TimeFrame
