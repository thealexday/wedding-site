import { useEffect, useState } from 'react'
import style from './AngelinaTimer.module.css'

export function AngelinaTimer() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const dayToWed = new Date('October 11, 2024, 00:00:00')

    function startTimer() {

        const dayToday = new Date().getTime()
        const daysDistance = dayToWed - dayToday;

        const days = Math.floor(daysDistance / 1000 / 60 / 60 / 24);
        const hours = Math.floor(daysDistance / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(daysDistance / 1000 / 60) % 60;
        const seconds = Math.floor(daysDistance / 1000 ) % 60;

        if (daysDistance < 0) {
            return
        } else {
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
        }
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            startTimer()
        }, 1000)

        return () => {
            clearInterval(timerInterval)
        }
    }, [timerSeconds])

    return (
        <section>
            <div className={style.timerBox}>
                <div className={style.timeSection}>
                    <h1 className={style.timerNumber}>{timerDays} </h1>
                    <p className={style.timerNumber__desc}>дней</p>
                </div>
                <div className={style.timeSection}>
                    <h1 className={style.timerNumber}>{timerHours}</h1>
                    <p className={style.timerNumber__desc}>часов</p>
                </div>
                <div className={style.timeSection}>
                    <h1 className={style.timerNumber}>{timerMinutes}</h1>
                    <p className={style.timerNumber__desc}>минут</p>
                </div>
                <div className={style.timeSection}>
                    <h1 className={style.timerNumber}>{timerSeconds}</h1>
                    <p className={style.timerNumber__desc}>секунд</p>
                </div>
            </div>
        </section>

    )
}