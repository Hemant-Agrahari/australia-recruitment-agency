
    import React, { useState } from 'react';
    import PhoneInput from 'react-phone-input-2';
    // duplicate phone input CSS removed; globally loaded in _app

    const PhoneInputComponent: React.FC = () => {
    const [mobilenumber, setPhoneNumber] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    return (
        <>
        <PhoneInput
            country={'in'}
            placeholder='Mobile Number'
            inputStyle={{ width: '100%', paddingLeft: '45px' }} 
        />
        </>
    );
    };

    export default PhoneInputComponent;
