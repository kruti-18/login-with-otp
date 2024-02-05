import React, { useState } from 'react'
import OtpInput from './OtpInput'


function OtpLogin() {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false)

    const handlePhoneNumber =(e) => {
        // e.preventDefault()
        const inputValue = e.target.value;
        // Ensure only numbers are entered
        const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
        // Limit to 10 digits
        const formattedNumber = onlyNumbers.slice(0, 10);
        // Check if it starts with 6, 7, 8, or 9
        const isValidStart = /^[6-9]/.test(formattedNumber);

        if (!isValidStart) {
            // Notify user about invalid phone number format
            alert('Invalid phone number format. It should start with 6, 7, 8, or 9.');
            // Reset the phone number state
            setPhoneNumber('');
        } else {
            // Update the phone number state
            setPhoneNumber(formattedNumber);
        }
    }

    const handlePhoneSubmit = (e) => {
        e.preventDefault()

        //phone validations
        // const regex = /[^0-9]/g
        // if(phoneNumber.length < 10 || regex.test(phoneNumber)){
        //     alert('invalid phone number')
        //     return
        // }
        
        //BE API

        //SHOW OPT FIELD
        setShowOtpInput(true)
    }

    const onOtpSubmit = (otp) => {
        console.log('login successfull', otp)
    }

    return (
        <>
        <div className='w-80% border-2 border-yellow-50 py-10 px-20 flex justify-center text-center'>
            
            {
                !showOtpInput ? 
                
            ( <form action="" onSubmit={handlePhoneSubmit} className='w-[80%] '>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter you phone' className='py-2 rounded-md pl-2 pr-4 my-6 border-2 border-white bg-transparent outline-none placeholder-white '/>
                <button className='uppercase bg-white text-purple-700 px-8 py-2 rounded-md'>submit</button>
              </form>
            )
             :
            ( <div>
                <p className='text-white'>Enter OTP sent to:  <span className='text-purple-800 font-bold'> {phoneNumber}</span> </p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
              </div>
            )
            }

        </div>
        </>
    )
}

export default OtpLogin