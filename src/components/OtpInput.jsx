import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

function OtpInput({length=4, onOtpSubmit = () => {}}) {
    const [otp, setOtp] = useState(new Array(length).fill(''))
    const inputRef = useRef([])

    useEffect(() => {
        if(inputRef.current[0]){
            inputRef.current[0].focus()
        }
    }, [] )

    // console.log(inputRef)    

    const handleChnage = (index, e) => {
        const value = e.target.value
        if(isNaN(value)) return
        const newOtp = [...otp]
        //allow only one input
        newOtp[index] = value.substring(value.length-1)
        setOtp(newOtp) //setter function of useState is async

        const combinedOtp = newOtp.join('')
        if(combinedOtp.length === length){
            onOtpSubmit(combinedOtp)
        }
        // console.log(newOtp, combinedOtp)

        if(value && index < length-1 && inputRef.current[index+1]){
            inputRef.current[index+1].focus()
        }

    }
    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1,1)
    }
    const handleKeyDown = (index, e) => {
        if(e.key === 'Backspace' && !otp[index] && index > 0 && inputRef.current[index-1]){
            inputRef.current[index-1].focus()
        }
    }


    return (
        <>
       { 
        otp.map((value, index) => {
            return (
                <input 
                    type="text" 
                    ref={(input) => (inputRef.current[index] = input)}
                    key={index} 
                    value={value} 
                    onChange={(e) => handleChnage(index, e)} 
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className='otpInput outline-purple-800 text-purple-800 my-6'
                />
            )
        })
        }
        
        </>
    )
}

export default OtpInput