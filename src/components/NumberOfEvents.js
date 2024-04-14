import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE}) => {
    const[numOfEvents, setNumOfEvents] = useState('32');

    const handleInputChanged = (event)=>{
        const value = event.target.value;
        setNumOfEvents(value)
        setCurrentNOE(value)
    }

    return (
        <div id="no-of-events">
            <label className="label"> No. of events: </label>
            <input 
            type= "text"
            value={numOfEvents}
            onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;