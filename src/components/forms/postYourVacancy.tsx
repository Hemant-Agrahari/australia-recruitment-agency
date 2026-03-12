import React, { useState, ChangeEvent, useEffect, FormEvent, useRef, } from 'react'
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import GoogleCaptchaWrapper from '../captcha/google-captcha-wrapper';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import { toast } from 'react-toastify';
const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
interface FormFields {
    username: string;
    email: string;
    phone_number: string;
    company_name: string;
    looking_to_hire: string;
    role: string;
    experience: string;
    urgency: string;
    budget: string;
    hiringDecision: string;
    message: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    looking_to_hire: Yup.string().required('This field is required'),
});
export const PostYourVacancy = () => {
    return (
        <GoogleCaptchaWrapper>
            <PostYourVacancyChild />
        </GoogleCaptchaWrapper>
    )
}
const PostYourVacancyChild = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [captcha, setCaptcha] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [countryName, setCountryName] = useState<any>(null);
    const [countryCode, setCountryCode] = useState<any>(null);
    const handleShow = () => setShow(true);
    const [selectedPhone, setSelectedPhone] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [notification, setNotification] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState<FormFields>({
        username: '',
        email: '',
        phone_number: '',
        company_name: '',
        looking_to_hire: '',
        role: '',
        experience: '',
        urgency: '',
        budget: '',
        hiringDecision: '',
        message: '',
    });
    const router = useRouter();
    const currentUrl = router.asPath;
    // console.log(currentUrl,"currentUrl")

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCancelSave = () => {
        setShowModal(false);
    };

    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            // console.log(data, "data")
            // console.log(data.ip, "data")
            setCountryName(data.country_name);
            setCountryCode(data.country_calling_code);
            setSelectedCountry({
                name: data.country_name,
                dialCode: data.country_calling_code,
                countryCode: data.country_code,
            });
        }).catch((error) => {
            // console.error(error);
        });
    };

    useEffect(() => {
        const delayedFetch = setTimeout(() => {
            getGeoInfo();
        }, 3000);
        // Clear the timeout if the component unmounts before the delay
        return () => clearTimeout(delayedFetch);
    }, []);

    useEffect(() => {
        // console.log(countryCode, "1", countryName, "2", selectedCountry, "4");
    }, [countryCode, countryName, selectedCountry]);

    // console.log(formData.phone_number)
    const [errors, setErrors] = useState<Partial<FormFields>>({});

    const validateForm = (): boolean => {
        const errors: Partial<FormFields> = {};

        if (!formData.username.trim()) {
            errors.username = 'Full Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.phone_number.trim()) {
            errors.phone_number = 'Phone number is required';
        }
        if (!formData.looking_to_hire) {
            errors.looking_to_hire = 'Please select if you are looking to hire';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePhoneChange = (value: string, data: any) => {
        setSelectedPhone(value);
        setFormData((prevData) => ({
            ...prevData,
            phone_number: value,
        }));
        setSelectedCountry(data);
    };


    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCountryChange = (value: any, country: any, e: any, formattedValue: any) => {
        // formik.setFieldValue('phone_number', formattedValue);
        handlePhoneChange(formattedValue, country);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const submitHireTalentForm = async (values: FormFields): Promise<void> => {
        try {
            if (validateForm()) {
                let formDataToSend = new FormData();
                formDataToSend.append('fullName', formData.username);
                formDataToSend.append('email', formData.email);
                formDataToSend.append('phone_number', formData.phone_number);
                formDataToSend.append('company_name', formData.company_name);
                formDataToSend.append('job_option', formData.looking_to_hire);
                formDataToSend.append('role', formData.role);
                formDataToSend.append('experience', formData.experience);
                formDataToSend.append('hiringTime', formData.urgency);
                formDataToSend.append('budget', formData.budget);
                formDataToSend.append('hiringDecision', formData.hiringDecision);
                formDataToSend.append('message', formData.message);

                formDataToSend.append('form_url', `${NEXT_PUBLIC_FRONTEND_URL}${currentUrl}`);
                const response = await axios.post(
                    `${NEXT_PUBLIC_BACKEND_URL}/forPostYourVacancy`,
                    formDataToSend,
                    { headers: { 'Content-Type': 'multipart/form-data' } }
                );
                if (response.status === 200 && response.data.status !== "error") {
                    setShow(true);
                    setShowModal(false);
                    setFormData({
                        username: '',
                        email: '',
                        phone_number: '',
                        company_name: '',
                        looking_to_hire: '',
                        role: '',
                        experience: '',
                        urgency: '',
                        budget: '',
                        hiringDecision: '',
                        message: '',
                    });
                } else {
                    toast.error(response.data.error || "Form submission failed. Please try again later.");
                }
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message || "Form submission failed. Please try again later.");
            } else {
                toast.error("Form submission failed. Please try again later.");
            }
        }
        ;
    };

    const handleSubmit = () => {
        submitHireTalentForm(formData);
    };

    return (
        <>
            <form
                className="row start_project"
                id="start_project" data-form-type="hire-a-candidate-form"
                onSubmit={(e) => e.preventDefault()}>
                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="text"
                            name="username"
                            maxLength={100}
                            placeholder="Full Name*"
                            value={formData.username} onChange={handleInputChange} />
                        {errors.username && (
                            <span className="invalid-feedback-error">{errors.username}</span>
                        )}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="email"
                            className="c-form-control"
                            name="email"
                            id="email1"
                            placeholder="Your Email*"
                            maxLength={100}
                            value={formData.email} onChange={handleInputChange} />
                        {errors.email && (
                            <div className="invalid-feedback-error">{errors.email}</div>
                        )}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <PhoneInput
                            country={selectedCountry ? selectedCountry.countryCode.toLowerCase() : 'us'}
                            placeholder="Phone Number*"
                            countryCodeEditable={false}
                            value={formData.phone_number}
                            enableSearch={true}
                            inputStyle={{ width: '100%', paddingLeft: '45px' }}
                            onChange={handleCountryChange}
                            inputProps={{ ref: inputRef }}
                        />
                        {errors.phone_number && (
                            <div className="invalid-feedback-error">{errors.phone_number}</div>
                        )}
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="text"
                            name="company_name"
                            maxLength={100}
                            placeholder="Company Name (Optional)"
                            value={formData.company_name}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="form-white-wrapper form-group">
                        <select
                            name="looking_to_hire"
                            className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                            value={formData.looking_to_hire}
                            onChange={(e) => {
                                handleInputChange(e);
                                if (e.target.value === "No, I Am Looking for a Job") {
                                    router.push("/job-seekers");
                                }
                            }}
                        >
                            <option value="">Are You Looking to Hire Staff for Your Company?*</option>
                            <option value="Yes, I Want to Hire">Yes, I Want to Hire</option>
                            <option value="No, I Am Looking for a Job">No, I Am Looking for a Job</option>
                        </select>
                        {errors.looking_to_hire && (
                            <div className="invalid-feedback-error">{errors.looking_to_hire}</div>
                        )}
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="text"
                            name="role"
                            placeholder="What Role Are You Looking to Hire? (Optional)"
                            value={formData.role}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <select name="experience"
                            className="wpcf7-form-control wpcf7-select"
                            value={formData.experience} onChange={handleInputChange}>
                            <option value="">Experience of Talent? (Optional)</option>
                            <option value="Entry Level / Junior">Entry Level / Junior</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior Level">Senior Level</option>
                            <option value="Leadership / Head Role">Leadership / Head Role</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-white-wrapper form-group">
                        <select name="urgency"
                            className="wpcf7-form-control wpcf7-select"
                            value={formData.urgency} onChange={handleInputChange}>
                            <option value="">How Urgent Is This Hire? (Optional)</option>
                            <option value="Immediate / Critical">Immediate / Critical</option>
                            <option value="Within 30 Days">Within 30 Days</option>
                            <option value="Exploring / Pipeline">Exploring / Pipeline</option>
                            <option value="Not Urgent">Not Urgent</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <select name="budget"
                            className="wpcf7-form-control wpcf7-select"
                            value={formData.budget} onChange={handleInputChange}>
                            <option value="">Budget for This Hire? (Optional)</option>
                            <option value="Per Hire / Placement Based">Per Hire / Placement Based</option>
                            <option value="Ongoing / Multiple Hires">Ongoing / Multiple Hires</option>
                            <option value="Project Based">Project Based</option>
                            <option value="Not Decided Yet">Not Decided Yet</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <select name="hiringDecision"
                            className="wpcf7-form-control wpcf7-select"
                            value={formData.hiringDecision} onChange={handleInputChange}>
                            <option value="">Final Hiring Decision Maker? (Optional)</option>
                            <option value="Me">Me</option>
                            <option value="Me + Another Stakeholder">Me + Another Stakeholder</option>
                            <option value="HR / Management Team">HR / Management Team</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="form-white-wrapper form-group">
                        <textarea
                            name="message"
                            className="wpcf7-form-control wpcf7-textarea tabing-textarea no-resize"
                            placeholder="Your Message (Optional)"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                        >
                        </textarea>
                    </div>
                </div>

                <input name="subject" id="subject" type="hidden" value="ARG.AE - C.U - Hire a Candidate" />
                <div className="col-lg-12 ">
                    <div className="form-white-wrapper ">
                        {/* <!-- <Link href="#" className="hireCandidate submit-btn">Submit</Link> --> */}
                        <button
                            className="hireCandidate submit-btn"
                            name="submit"
                            id="submit"
                            type="button"
                            // onClick={handleSubmit}
                            onClick={(e) => {
                                e.preventDefault()
                                if (validateForm()) {

                                    setShowModal(true)
                                }
                            }}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>

                    </div>
                </div>

            </form>
            <Modal className='thank-you-modal' show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-css'>
                    <div className="modal-inner-con">
                        <div className="row gy-4">
                            <div className="col-lg-5">
                                <img src="/assets/images/thankyou-logo.svg" alt="thankyou-logo" title="Thank You" />
                            </div>
                            <div className="col-lg-7 d-flex justify-content-center flex-column align-items-center text-center">

                                <h2 className="com-title">
                                    Thank you for providing the information!
                                </h2>
                                <div className="thank-you text-center">
                                    <p className="com-text mx-3">
                                        Please review your email for the upcoming instructions.
                                    </p>

                                    <p className="com-text mx-3 my-3">
                                        Rest assured, we will ensure the security of your details. If you have any inquiries,don't hesitate to reach out to us at <Link href="mailto:sales@aistalent.com"> <strong>sales@aistalent.com</strong></Link>.
                                    </p>

                                    <p className="com-text mx-3">
                                        Kindly verify your email for the subsequent instructions provided by Alex.
                                    </p>
                                </div>
                                <Link href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-gcc" className="com-btn" target="_blank">
                                    Schedule a Discovery Call
                                </Link>


                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>


            <ConfirmationPopup
                showModal={showModal}
                onConfirm={handleSubmit}
                onCancel={handleCancelSave}

            />
        </>
    )
}
export default PostYourVacancy