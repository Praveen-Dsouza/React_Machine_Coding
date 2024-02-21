import React, { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((secs) => (secs - 1 < 0 ? 0 : secs - 1));
        } else if (minutes > 0) {
          setMinutes((mins) => (mins - 1 < 0 ? 0 : mins - 1));
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hrs) => (hrs - 1 < 0 ? 0 : hrs - 1));
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      resetTimer();
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, isRunning]);

  const changeHours = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setHours(value > 0 ? value : 0);
  };

  const changeMinutes = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setMinutes(value > 0 ? value : 0);
  };

  const changeSeconds = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setSeconds(value > 0 ? value : 0);
  };

  const handleOverflow = () => {
    if (seconds > 60) {
      setMinutes((mins) => mins + Math.floor(seconds / 60));
      setSeconds((secs) => secs % 60);
    }
    if (minutes > 60) {
      setHours((hrs) => hrs + Math.floor(minutes / 60));
      setMinutes((mins) => mins % 60);
    }
  };

  const startTimer = () => {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
    } else {
      alert('Add Time');
    }
  };

  const pauseTimer = () => setIsRunning(false);

  const stopTimer = () => {
    resetTimer();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className='countdownTimer'>
      <div className='countdownTimer_single'>
        <label className='countdownTimer_label'>hh</label>
        <input
          className='countdownTimer_input'
          value={formatTime(hours)}
          onChange={changeHours}
        />
      </div>
      &nbsp;
      <div className='countdownTimer_single'>
        <label className='countdownTimer_label'>mm</label>
        <input
          className='countdownTimer_input'
          value={formatTime(minutes)}
          onChange={changeMinutes}
        />
      </div>
      &nbsp;
      <div className='countdownTimer_single'>
        <label className='countdownTimer_label'>ss</label>
        <input
          className='countdownTimer_input'
          value={formatTime(seconds)}
          onChange={changeSeconds}
        />
      </div>
      &nbsp;
      <div className='button_container'>
        {!isRunning && <button className='countdownTimer_button' onClick={() => { startTimer(); handleOverflow(); }}> ▶️ </button>}
        {isRunning && <button className='countdownTimer_button' onClick={pauseTimer}> ⏸️ </button>}
        <button className='countdownTimer_button' onClick={stopTimer}> ⏹️ </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
