import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const FloatingSidebar = () => {
    const [countryName, setCountryName] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/')
            .then((response) => {
                let data = response.data;
                setCountryName(data.country);
                setCountryCode(data.country_calling_code);
                // console.log("Countrydata",data.country)
                // console.log("Countrydata",data.country_calling_code)
            })
            .catch((error) => {
                // console.error('Error fetching geolocation:', error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    const renderPhoneNumber = () => {
        if (countryName === 'IN') {
            return '+918980018741'; // Phone number for India
        } else if (countryName === 'GB') {
            return '+44 20 3838 0743'; // Phone number for Uk
        }
        else if (countryName === 'US') {
            return '+19179009072'; // Phone number for Us
        }
        else if (countryName === 'CA') {
            return '+17809004752'; // Phone number for Ca
        }
        else {
            return '+44 20 3838 0743'; // Default phone number
        }
    };


    return (
        <>
            <div className="sidebar-icon">
                <ul>
                    <li>
                        <a href="mailto:sales@aistalent.com">
                            <Image className="lazyloaded" src="/wp-content/themes/alliancerecruitmentagency/images/email-sidebar.svg" width={15} height={15} alt="Email Icon" />
                        </a>
                        <span className="hover-txt">Write to us</span>
                    </li>
                    <li>
                        <a href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-gcc" target="_blank" rel="noopener noreferrer">
                            <Image className="lazyloaded" src="/wp-content/themes/alliancerecruitmentagency/images/calender.svg" width={15} height={15} alt="Calendar Icon" />
                        </a>
                        <span className="hover-txt">Book a meeting</span>
                    </li>
                    <li>
                        <Link href={`tel:${renderPhoneNumber()}`}>
                            <Image className="lazyloaded" src="/wp-content/themes/alliancerecruitmentagency/images/phone-call.svg" width={15} height={15} alt="Phone Call Icon" />
                        </Link>
                        <span className="hover-txt india">Call us</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default FloatingSidebar;
