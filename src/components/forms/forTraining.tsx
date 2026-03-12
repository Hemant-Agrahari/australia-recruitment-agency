import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import GoogleCaptchaWrapper from '../captcha/google-captcha-wrapper';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';
import { toast } from 'react-toastify';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const ForTraining = () => {
    return (
        <GoogleCaptchaWrapper>
            <ForTrainingChild />
        </GoogleCaptchaWrapper>
    )
}
const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone_number: Yup.string().min(9, " Must be 4 digits required")
        .required('Mobile Number is required'),
    project_details: Yup.string().required('Project Details is required'),
});

interface FormValues {
    username: string,
    email: string,
    phone_number: string,
    company_name: string,
    city: string,
    num_of_participants: string,
    interest: string,
    project_details: string,

}
declare global {
    interface Window {
        grecaptcha: any; // You can specify more precise types if known
    }
}

const ForTrainingChild: React.FC = () => {
    const [selectedPhone, setSelectedPhone] = useState<string>('');
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [countryName, setCountryName] = useState<any>(null);
    const [countryCode, setCountryCode] = useState<any>(null);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const [shouldRenderComponent, setShouldRenderComponent] = useState(true);
    const router = useRouter();
    const currentUrl = router.asPath;
    const [notification, setNotification] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();
    // console.log(currentUrl,"currentUrl")
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCancelSave = () => {
        setShowModal(false);
    };



    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCountryChange = (value: any, country: any, e: any, formattedValue: any) => {
        formik.setFieldValue('phone_number', formattedValue);

        if (inputRef.current) {
            inputRef.current.focus();
        }
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
        }, 5000);
        // Clear the timeout if the component unmounts before the delay
        return () => clearTimeout(delayedFetch);
    }, []);
    useEffect(() => {
        // console.log(countryCode, "1", countryName, "2", selectedCountry, "4");
    }, [countryCode, countryName, selectedCountry]);
    const handleComponentRender = () => {
        setShouldRenderComponent(!shouldRenderComponent);
    };
    const handleClose = () => {
        setShow(false)
    };
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues = ({
        username: '',
        email: '',
        phone_number: '',
        company_name: '',
        city: '',
        num_of_participants: '',
        interest: '',
        project_details: '',
    });

    const handleSubmitForm = (values: FormValues) => {
        submitHireTalentForm(values);
    };


    const formik: any = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmitForm(values);
        },
    });


    const handleSubmitClick = async () => {
        const errors = await formik.validateForm();
        formik.setTouched({
            username: true,
            email: true,
            phone_number: true,
            company_name: true,
            city: true,
            num_of_participants: true,
            interest: true,
            project_details: true,
        });

        if (Object.keys(errors).length === 0) {
            setShowModal(true);
        } else {
            formik.setErrors(errors);
        }
    };


    const submitHireTalentForm = async (values: FormValues) => {
        try {
            const requestdata = {
                username: values.username,
                email: values.email,
                phone_number: values.phone_number,
                company_name: values.company_name,
                city: values.city,
                num_of_participants: values.num_of_participants,
                interest: values.interest,
                project_details: values.project_details,
                currentFormUrl: `${NEXT_PUBLIC_FRONTEND_URL}/${currentUrl}`
            }
            setIsSubmitted(true);
            const response = await axios.post(`${NEXT_PUBLIC_BACKEND_URL}/forTraning`, requestdata);
            if (response.status === 200 && response.data.status !== "error") {
                toast.success(response.data.message || "Form submission Success.");
                formik.resetForm();
                handleComponentRender()
                formik.setFieldValue('phone_number', '');
                setSelectedPhone('');
                setShowModal(false)
                setShow(true);

            } else {
                toast.error(response.data.error || "Form submission failed. Please try again later.");
            }
        } catch (error: unknown) {
            setIsSubmitted(false);
            if (error instanceof Error) {
                toast.error(error.message || "Form submission failed. Please try again later.");
            } else {
                toast.error("Form submission failed. Please try again later.");
            }

        }
    }
    return (
        <> 
        
            <form className="row" id="for_traning" data-form-type="for-training-form" onSubmit={(e) => e.preventDefault()}>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">

                        <input type="text" name="username" className="c-form-control" id="username3" placeholder="Name" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.username && formik.touched.username ? (
                            <FormErrorMessage formik={formik.errors.username} />
                        ) : null}

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">

                        <input type="email" className="c-form-control" name="email" id="email3" placeholder="Your Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.email && formik.touched.email ? (
                            <FormErrorMessage formik={formik.errors.email} />
                        ) : null}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <PhoneInput
                            country={selectedCountry ? selectedCountry.countryCode.toLowerCase() : 'us'}
                            placeholder="Mobile Number"
                            countryCodeEditable={false}
                            enableSearch={true}
                            value={formik.values.phone_number}
                            onChange={handleCountryChange}
                            onBlur={formik.handleBlur('phone_number')}
                            inputStyle={{ width: '100%', paddingLeft: '45px' }}
                            inputProps={{ ref: inputRef }}
                        />
                        {formik.errors.phone_number && formik.touched.phone_number ? (
                            <FormErrorMessage formik={formik.errors.phone_number} />
                        ) : null}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <input type="text" className="c-form-control" name="company_name" id="company_name3" placeholder="Your Company" value={formik.values.company_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <input type="text" className="c-form-control" name="city" id="city3" placeholder="City" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <input type="text" className="c-form-control" name="num_of_participants" id="num_of_participants3" placeholder="Number of Participants" value={formik.values.num_of_participants} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-white-wrapper form-group">
                        <select name="interest" className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" id="experience2" aria-required="true" aria-invalid="false" value={formik.values.interest} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option value="">Select Interest</option>
                            <option value="Soft Skill Training">Soft Skill Training</option>
                            <option value="Leadership Training">Leadership Training</option>
                            <option value="E-Learning Training">E-Learning Training</option>
                            <option value="Communication Skill Training">Communication Skill Training</option>
                            <option value="Team Building Training">Team Building Training</option>
                            <option value="Outbound Training">Outbound Training</option>
                            <option value="Executive Coaching Training">Executive Coaching Training</option>
                            <option value="Self &amp; Personal Development Training">Self &amp; Personal Development Training</option>
                            <option value="Other Trainings or Skill Solutions">Other Trainings or Skill Solutions</option>
                            <option value="SEO Training">SEO Training</option>
                            <option value="Technical Training">Technical Training</option>
                        </select>

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-white-wrapper form-group">
                        <textarea className="wpcf7-form-control wpcf7-textarea tabing-textarea" aria-invalid="false" placeholder="Project Details*" id="keyskills2" name="project_details" rows={40} cols={2} value={formik.values.project_details} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                        {formik.errors.project_details && formik.touched.project_details ? (
                            <FormErrorMessage formik={formik.errors.project_details} />
                        ) : null}
                    </div>
                </div>

                <input name="url" id="url" type="hidden" />
                <input name="subject" id="subject2" type="hidden" value="ARG.AE - C.U - For Training" />

                <div className="col-lg-12 ">
                    <div className="form-white-wrapper ">
                        <button className="hireCandidate submit-btn" name="submit" type='submit' id="submit3" onClick={(e) => {
                            e.preventDefault()
                            handleSubmitClick()

                        }}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <Modal className='thank-you-modal' show={show} onHide={handleClose}>
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
                onConfirm={formik.handleSubmit}
                onCancel={handleCancelSave}

            />
        </>
    );
};
export default ForTraining;
