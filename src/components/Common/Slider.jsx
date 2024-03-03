import React from 'react'
import { numberWithCommas } from '../../utils/config'

const Slider = ({ title, state, min, max, onChange, labelMin, labelMax, underlineTitle }) => {
  return (
    <>
        <span className='title'>{title}</span>
        {(state > 0) && 
          <span 
            className='title' 
            style={{ textDecoration: "underline" }}>
              &nbsp;{underlineTitle}
          </span>
        }        
        <div>
            <input 
              className='slider' 
              type='range' 
              value={state} 
              onChange={onChange} 
              min={min} 
              max={max}
            />
            <div className='labels'>
                <label>{labelMin && numberWithCommas(min)}</label>
                <b>{numberWithCommas(state)}</b>
                <label>{labelMax && numberWithCommas(max)}</label>
            </div>
        </div>
    </>
  )
}

export default Slider
