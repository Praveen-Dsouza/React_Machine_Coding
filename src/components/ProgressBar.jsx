import React, { useEffect, useState } from 'react'
import "../styles/ProgressBar.css";

const ProgressBar = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {

        let timer = setInterval(() => {
            setValue((val) => val+1 <= 100? val+1: 100)
        }, 100)

        return () => clearInterval(timer)
    }, [value])

  return (
    <div className='progress_container'>
        <label>Progress Bar</label>
        <div className='progress_bar'>
            <span className='progress_value' style={{ color: value > 49 && "white" }}>{value.toFixed()}%</span>
            <div 
                // style={{ width: `${value}%` }} 
                style={{ transform: `scaleX(${value/100})`, transformOrigin: "left" }}
                role='progressbar' 
                aria-valuemin={0} 
                aria-valuemax={100} 
                aria-valuenow={value.toFixed()} />
        </div>
        <p>{value < 100 ? "Loading...": "Complete!"}</p>
    </div>
  )
}

export default ProgressBar
