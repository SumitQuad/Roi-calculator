import React,{useState} from 'react'
import "./InputCakeNumber.css";

function InputCakeNumber() {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div className='input-cake-contaner'>
           <div className="input-container">
                <input type="text" className="full-width-input" placeholder='2.10000 Cake' />
            </div>

            <div className='tab-balance-container'>
            <div className="tabs-container">
                <div className="tab-buttons">
                    <button
                        className={activeTab === 'tab1' ? 'active' : ''}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Use Balance
                    </button>
                    <button
                        className={activeTab === 'tab2' ? 'active' : ''}
                        onClick={() => handleTabClick('tab2')}
                    >
                        100 $
                    </button>
                    <button
                        className={activeTab === 'tab3' ? 'active' : ''}
                        onClick={() => handleTabClick('tab3')}
                    >
                        1000 $
                    </button>
                </div>
            </div>

            <div className='Balance'>
              <h4>~$20.82</h4>
            </div>
            </div>
        </div>
    )
}

export default InputCakeNumber
