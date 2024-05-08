import { useState } from 'react';
const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const refreshTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    return (
        <div style={{marginTop: "1rem"}}>
            <span>{time}</span>
            <button style={{marginLeft: "2rem"}} onClick={refreshTime}>Refresh Time</button>
        </div>
    );
};

export default Clock;
