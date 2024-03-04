import React, { useEffect, useRef, useState } from 'react'
import { CHECKOUT_STEPS } from '../utils/Constants';
import "../styles/CheckoutStepper.css";

const CheckoutStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    })
    const stepRef = useRef([]);
    const stepsConfig = CHECKOUT_STEPS

    useEffect(() => {   
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length-1].offsetWidth / 2,
        })
    }, [stepRef, stepsConfig.length])

    if (!stepsConfig.length) return <></>

    const handleNext = () => {
        setCurrentStep((prevStep) => {
            if (prevStep === stepsConfig.length) {
                setIsComplete(true)
                return prevStep
            } else {
                return prevStep+1
            }
        })
    }

    const calculateProgressBarWidth = () => {
        return ((currentStep-1)/(stepsConfig.length-1)) * 100
    }

    const ActiveComponent = stepsConfig[currentStep-1]?.Component

    return (
        <>  
            <h2 className='title'>Checkout</h2>
            <div className='stepper'>
                {stepsConfig.map((step, index) => {
                    return (
                        <div 
                            ref={(el) => (stepRef.current[index] = el)}
                            className={`step 
                                ${(currentStep > index+1 || isComplete) && 'complete'}
                                ${(currentStep === index+1) && 'active'}
                                `} 
                                key={step.name}
                            >
                            <div className='step_number'>
                                {(currentStep > index+1 || isComplete) ?
                                    (<span>&#10003;</span>):
                                    (index+1)
                                }
                            </div>
                            <div className='step_name'>{step.name}</div>
                        </div>
                    )
                }) }

            <div
                className="progress_bar"
                style={{
                    width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
                    marginLeft: margins.marginLeft,
                    marginRight: margins.marginRight,
                }}
            >
                    <div
                        className="progress"
                        style={{width: `${calculateProgressBarWidth()}%`}}
                    ></div>
                    </div>
            </div>

            <div className='title' style={{ marginBottom: 10, }}>
                <ActiveComponent />
            </div>    
            
            <div className='title'>
                {!isComplete && 
                    <button className='btn' onClick={handleNext}>
                        {currentStep === stepsConfig.length ? "Finish" : "Next"}
                    </button>
                }
            </div>
        </>
    )
}

export default CheckoutStepper;
