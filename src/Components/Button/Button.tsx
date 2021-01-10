import React, {useState} from 'react';
import "./Button.css"

type Props= {
    setTimerInSecond: Function;
}

export default function Button(props: Props) {
    console.log(props);
    const {setTimerInSecond} = props;
    const [intervalId, setIntervalId] = useState<number>(0)

    const handleStartButton = () => {
        let interval: any = setInterval(()=> {
            setTimerInSecond((previousState: number) => previousState + 1  )  
        }, 1000)
        setIntervalId(interval)
    
    }
    const handlePauseButton = () => {
        clearInterval(intervalId)
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimerInSecond(0);
    }

    return (
        <div className="button">
            <button onClick={handleStartButton}>Start</button>
            <button onClick={handlePauseButton}>Pause</button>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    )
}
