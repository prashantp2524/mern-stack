import React, { useState } from 'react'
import OptInput from './OptInput';
const PhoneOtpLogin = () =>
{

    const [phoneNumber, setPhoneNumber] = useState();
    const [showOtp, setShowOtp] = useState(false);

    const handlePhoneNumber = (e) =>
    {
        setPhoneNumber(e.target.value);
    }
    const handlePhoneSubmit = (e) =>
    {
        e.preventDefault();

        //phone validations

        const regex = /[^0-9]/g;
        if (phoneNumber.length !== 10 || regex.test(phoneNumber))
        {
            alert('Invalid phone number');
            return;
        }

        //call backend api
        //show otp field
        setShowOtp(true);
    }


    const onOtpSubmit = (otp) =>
    {
        console.log("login successfull with otp: " + otp)
    }

    return (
        <div>

            {!showOtp ? <form onSubmit={handlePhoneSubmit}>
                <input type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder='Enter phone number'
                />
                <button tyep="submit">
                    Submit
                </button>
            </form> : <div>
                <p>Enter OTP send to {phoneNumber}</p>
                <OptInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>}
        </div>
    )

}


export default PhoneOtpLogin