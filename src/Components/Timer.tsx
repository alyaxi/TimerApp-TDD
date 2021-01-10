import React, { useState, useEffect } from 'react';
import "./Timer.css"
import CalulateTimer from './Helper/CalculateTimer';
import Button from "./Button/Button"

export default function Timer() {
    const [timerInSecond, setTimerInSecond] = useState<number>(0)
    const [timerArray , setTimerArray] = useState<Array<number | string>>([])

    useEffect(() => {


       let timeArray: Array<number | string> = CalulateTimer(timerInSecond)
       setTimerArray(timeArray)


    },[timerInSecond])
    return (
        <main>
        <h1 className="heading">STOPWATCH APP</h1>
        <div className="display">
            <p className="timer-app-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-app-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-app-text">{timerArray[2]}</p>
        </div>
            <Button setTimerInSecond={setTimerInSecond}/>

            </main>
    )

}
