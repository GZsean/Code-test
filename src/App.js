import {useState} from "react";
import Clock from "./Clock";
import './App.css';


function App() {
    const [clocks, setClocks] = useState([]);

    const addClock = () => {
        setClocks([...clocks, <Clock key={clocks.length} />]);
    };

    return (
        <div className="App">
            <div>
                <h1>Sean Yu</h1>
                <Clock/>
                {clocks.map(clock => clock)}
                <button style={{marginTop: "1rem"}} onClick={addClock}>Add Clock</button>
            </div>
        </div>
    );
}

export default App;
