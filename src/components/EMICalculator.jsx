import React, { useEffect, useState } from 'react';
import "../styles/StarRating.css";
import { tenureData } from '../utils/Constants';
import { numberLimit, numberWithCommas } from '../utils/config';
import TextInput from './Common/TextInput';
import Slider from './Common/Slider';

const EMICalculator = () => {
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(2);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(10);
    const [emi, setEmi] = useState(0);

    const calculateEMI = (downpayment) => {
        // EMI amount = [PxRx(1+R)^N]/[(1+R)^N-1]
        if (!cost) return

        const loanAmount = cost - downpayment
        const rateOfInterest = interest / 100
        const numberOfYears = tenure / 12

        const EMI = (loanAmount*rateOfInterest*(1+rateOfInterest)**numberOfYears) / ((1+rateOfInterest)**numberOfYears-1)

        return Number(EMI/12).toFixed(0)
    }

    const calculateDP = (emi) => {
        if (!cost) return

        const downPaymentPercent = 100 - (emi/calculateEMI(0)) * 100
        return Number((downPaymentPercent/100)*cost).toFixed(0)
    }

    useEffect(() => {
        if (!(cost > 0)) {
            setDownPayment(0)
            setEmi(0)
        }

        const emi = calculateEMI(downPayment)
        setEmi(emi)
    }, [tenure, cost])

    const updateEMI = (e) => {
        if (!cost) return
        const dp = Number(e.target.value)
        setDownPayment(dp.toFixed(0))

        // Calculate EMI and update it
        const emi = calculateEMI(dp)
        setEmi(emi)
    }

    const updateDownPayment = (e) => {
        if (!cost) return
        const emi = Number(e.target.value)
        setEmi(emi.toFixed(0))

        // Caldulate DP and update it
        const dp = calculateDP(emi)
        setDownPayment(dp)
    }

    const totalDownPayment = () => {
        return numberWithCommas((Number(downPayment)+(cost-downPayment)*(fee/100)).toFixed(0))
    }

    const totalEMI = () => {
        return numberWithCommas((emi*tenure).toFixed(0))
    }

  return (
    <div className='starRatingContainer'>
      <span className='title header'>EMI Calculator</span>
        <TextInput  title={"Total Cost of Assets"} state={cost} setState={setCost} />

        <TextInput  title={"Interest Rate (in%)"} state={numberLimit(interest)} setState={setInterest} />

        <TextInput  title={"Processing Fee (in%)"} state={numberLimit(fee)} setState={setFee} />

        <Slider 
            title={"Down Payment"} 
            underlineTitle={`Total Down Payment - ${totalDownPayment()}`} 
            onChange={updateEMI} 
            state={downPayment}
            min={0} 
            max={cost} 
            labelMin={"0%"} 
            labelMax={"100%"}
        />

        <Slider 
            title={"Loan Per Month"} 
            underlineTitle={`Total Loan Amount - ${totalEMI()}`} 
            onChange={updateDownPayment} 
            state={emi}
            min={calculateEMI(cost)} 
            max={calculateEMI(0)}
        />

        <span className='title'>Tenure</span>
        <div className='tenureContainer'>
            {tenureData.map((t) => {
                return (
                    <button className={`tenure ${t === tenure? "selected": ""}`} onClick={() => setTenure(t)}>{t}</button>
                )
            })}
        </div>
    </div>
  )
}

export default EMICalculator
