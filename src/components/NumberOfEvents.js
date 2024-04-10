import { useState } from "react";

const NumberOfEvents = ({eventsSetValue}) => {
    const[numOfEvents, setNumOfEvents] = useState('32')

    const handleInputChanged = (event)=>{
        const value = event.target.value;
        setNumOfEvents(value)
        eventsSetValue(value)
    }

    return (
        <div id="no-of-events">
            <input 
            type= "text"
            value={numOfEvents}
            onChange={handleInputChanged}
            />
        </div>
    )
}

export default NumberOfEvents;