import React,{useState} from 'react';
import "./EnableAcceleratedApy.css";

function EnableAcceleratedApy() {
    const [isAcceleratedSelected, setIsAcceleratedSelected] = useState(true);

    const handleToggle = () => {
        setIsAcceleratedSelected(!isAcceleratedSelected);
    }

    return (
        <div className='App'>
            <h3>Enable Accelerated Apy</h3>
             <label className="switch">
                <input type="checkbox" checked={isAcceleratedSelected} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default EnableAcceleratedApy
