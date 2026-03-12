import React, { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import PhoneInputComponent from "@/utils/phoneInput/phoneInputComponent";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/router";
import GoogleCaptchaWrapper from "../captcha/google-captcha-wrapper";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Image from "next/image";
import { toast } from "react-toastify";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const FranchiseEnquiryForm = () => {
    return (
        <GoogleCaptchaWrapper>
            <FranchiseEnquiryFormChild />
        </GoogleCaptchaWrapper>
    );
};
const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    Primary_Motivation_for_Franchise_Exploration: Yup.string(),
    Recruitment_Industry_Experience_Level: Yup.string(),
    business_start_timeline: Yup.string(),
    Planned_Level_of_Business_Involvement: Yup.string(),
    Key_Expectations_from_Franchise_Partner: Yup.string(),
    investment_range: Yup.string().required('Investment Range is required').test('not-default', 'Investment Range is required', value => value !== 'Investment Range'),
});

interface FormValues {
    fullName: string;
    email: string;
    phone_number: string;
    Primary_Motivation_for_Franchise_Exploration: string;
    Recruitment_Industry_Experience_Level: string;
    business_start_timeline: string;
    Planned_Level_of_Business_Involvement: string;
    Key_Expectations_from_Franchise_Partner: string;
    investment_range: string;
}
declare global {
    interface Window {
        grecaptcha: any; // You can specify more precise types if known
    }
}
const FranchiseEnquiryFormChild: React.FC = () => {
    const router = useRouter();
    const [isINR, setIsINR] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedPhone, setSelectedPhone] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [countryName, setCountryName] = useState<any>(null);
    const [countryCode, setCountryCode] = useState<any>(null);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [show, setShow] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [captcha, setCaptcha] = useState(null);
    const currentUrl = router.asPath;
    const [shouldRenderComponent, setShouldRenderComponent] = useState(true);
    const [notification, setNotification] = useState("");
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState<any>({
        phone_number: "",
    });
    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                const { country } = response.data;
                // console.log(data, "data")
                setIsINR(country === "IN");
                setCountryName(data.country_name);
                setCountryCode(data.country_calling_code);
                setSelectedCountry({
                    name: data.country_name,
                    dialCode: data.country_calling_code,
                    countryCode: data.country_code,
                });
            })
            .catch((error) => {
                // console.error(error);
            });
    };
    useEffect(() => {
        const delayedFetch = setTimeout(() => {
            getGeoInfo();
        }, 3000);
        return () => clearTimeout(delayedFetch);
    }, []);
    useEffect(() => { }, [countryCode, countryName, selectedCountry]);
    const handleComponentRender = () => {
        setShouldRenderComponent(!shouldRenderComponent);
    };
    const handleClose = () => {
        setShow(false);
    };
    const initialValues: FormValues = {
        fullName: '',
        email: '',
        phone_number: '',
        Primary_Motivation_for_Franchise_Exploration: '',
        Recruitment_Industry_Experience_Level: '',
        business_start_timeline: '',
        Planned_Level_of_Business_Involvement: '',
        Key_Expectations_from_Franchise_Partner: '',
        investment_range: '',
    };

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleCountryChange = (
        value: any,
        country: any,
        e: any,
        formattedValue: any,
    ) => {
        formik.setFieldValue("phone_number", formattedValue);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSubmitForm = (values: FormValues) => {
        if (!window.grecaptcha) {
            console.log("reCAPTCHA not available yet");
            return;
        }
        window.grecaptcha.ready(() => {
            window.grecaptcha
                .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
                    action: "submit",
                })
                .then((gReCaptchaToken: string) => {
                    submitHireTalentForm(values, gReCaptchaToken);
                })
                .catch((error: any) => {
                    console.error("Error executing reCAPTCHA:", error);
                });
        });
    };

    const formik: any = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmitForm(values);
        },
    });

    const submitHireTalentForm = async (
        values: FormValues,
        gReCaptchaToken: string,
    ) => {
        try {
            const requestdata = {
                fullName: values.fullName,
                email: values.email,
                phone_number: values.phone_number,
                Primary_Motivation_for_Franchise_Exploration: values.Primary_Motivation_for_Franchise_Exploration,
                Recruitment_Industry_Experience_Level: values.Recruitment_Industry_Experience_Level,
                business_start_timeline: values.business_start_timeline,
                Planned_Level_of_Business_Involvement: values.Planned_Level_of_Business_Involvement,
                Key_Expectations_from_Franchise_Partner: values.Key_Expectations_from_Franchise_Partner,
                investment_range: values.investment_range,
                captcha_response: gReCaptchaToken,
                form_url: `${NEXT_PUBLIC_FRONTEND_URL}${currentUrl}`
            }
            setIsSubmitted(true);
            const response = await axios.post(
                `${NEXT_PUBLIC_BACKEND_URL}/forFranchinseInquiry`,
                requestdata,
            );
            if (response.status === 200 && response.data.status !== "error") {
                toast.success(response.data.message || "Form submission Success.");
                // setShow(true);
                router.push('/thank-you');
                handleComponentRender();
                formik.setFieldValue("phone_number", "");
                setSelectedPhone("");
                formik.resetForm();
            } else {
                toast.error(
                    response.data.message ||
                    "Form submission failed. Please try again later.",
                );
            }
        } catch (error: unknown) {
            setIsSubmitted(false);
            if (error instanceof Error) {
                toast.error(
                    error.message || "Form submission failed. Please try again later.",
                );
            } else {
                toast.error("Form submission failed. Please try again later.");
            }
        }
    };
    return (
        <>
            <form
                className="row gy-4"
                id="for_traning franchise-servicepage-form"
                onSubmit={formik.handleSubmit}
                data-form-type="franchise-enquiry-form"
            >
                <div className="col-lg-12">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="text"
                            name="fullName"
                            className="c-form-control"
                            id="fullName"
                            placeholder="Full Name*"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.fullName && formik.touched.fullName ? (
                            <FormErrorMessage formik={formik.errors.fullName} />
                        ) : null}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <input
                            type="email"
                            name="email"
                            className="c-form-control"
                            id="email"
                            placeholder="Your Email*"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email ? (
                            <FormErrorMessage formik={formik.errors.email} />
                        ) : null}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-white-wrapper form-group">
                        <PhoneInput
                            country={
                                selectedCountry
                                    ? selectedCountry.countryCode.toLowerCase()
                                    : "us"
                            }
                            placeholder="Phone Number*"
                            value={formik.values.phone_number}
                            countryCodeEditable={false}
                            enableSearch={true}
                            onChange={handleCountryChange}
                            inputProps={{ ref: inputRef }}
                            onBlur={formik.handleBlur("phone_number")}
                            inputStyle={{ width: "100%", paddingLeft: "45px" }}
                        />
                        {formik.errors.phone_number && formik.touched.phone_number ? (
                            <FormErrorMessage formik={formik.errors.phone_number} />
                        ) : null}
                    </div>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap Primary_Motivation_for_Franchise_Exploration">
                        <select
                            name="Primary_Motivation_for_Franchise_Exploration"
                            className="wpcf7-form-control wpcf7-select form-select"
                            value={formik.values.Primary_Motivation_for_Franchise_Exploration}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">What Is Your Primary Reason for Exploring a Recruitment Franchise?*</option>
                            <option value="I Want to Start My Own Recruitment Business">I Want to Start My Own Recruitment Business</option>
                            <option value="I Want an Additional Income Stream">I Want an Additional Income Stream</option>
                            <option value="I Already Work in HR / Recruitment">I Already Work in HR / Recruitment</option>
                            <option value="I Am Exploring Opportunity for the Future">I Am Exploring Opportunity for the Future</option>
                        </select>
                        {formik.errors.Primary_Motivation_for_Franchise_Exploration && formik.touched.Primary_Motivation_for_Franchise_Exploration ? (
                            <FormErrorMessage formik={formik.errors.Primary_Motivation_for_Franchise_Exploration} />
                        ) : null}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap Recruitment_Industry_Experience_Level">
                        <select
                            name="Recruitment_Industry_Experience_Level"
                            className="wpcf7-form-control wpcf7-select form-select"
                            value={formik.values.Recruitment_Industry_Experience_Level}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">How Familiar Are You with Recruitment or Staffing Services?</option>
                            <option value="Very Familiar (Worked in Recruitment/ HR / Sales)">Very Familiar (Worked in Recruitment/ HR / Sales)</option>
                            <option value="Some Exposure (Clients / Hiring / HR Support)">Some Exposure (Clients / Hiring / HR Support)</option>
                            <option value="New to Recruitment but Keen to Learn">New to Recruitment but Keen to Learn</option>
                            <option value="Just Researching at This Stage">Just Researching at This Stage</option>
                        </select>
                        {formik.errors.Recruitment_Industry_Experience_Level && formik.touched.Recruitment_Industry_Experience_Level ? (
                            <FormErrorMessage formik={formik.errors.Recruitment_Industry_Experience_Level} />
                        ) : null}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap business_start_timeline">
                        <select
                            name="business_start_timeline"
                            className="wpcf7-form-control wpcf7-select form-select"
                            value={formik.values.business_start_timeline}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">How Soon Are You Looking to Start a Business Like This?</option>
                            <option value="Immediately / Within 30 Days">Immediately / Within 30 Days</option>
                            <option value="In the Next 2 - 3 Months">In the Next 2 - 3 Months</option>
                            <option value="In 3 - 6 Months">In 3 - 6 Months</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                        {formik.errors.business_start_timeline && formik.touched.business_start_timeline ? (
                            <FormErrorMessage formik={formik.errors.business_start_timeline} />
                        ) : null}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap Planned_Level_of_Business_Involvement">
                        <select
                            name="Planned_Level_of_Business_Involvement"
                            className="wpcf7-form-control wpcf7-select form-select"
                            value={formik.values.Planned_Level_of_Business_Involvement}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">How Involved Do You Plan to Be in the Business Initially?</option>
                            <option value="Full Time - Hands On">Full Time - Hands On</option>
                            <option value="Part Time but Actively Involved">Part Time but Actively Involved</option>
                            <option value="Strategic / Investor Level">Strategic / Investor Level</option>
                            <option value="Still Evaluating Involvement">Still Evaluating Involvement</option>
                        </select>
                        {formik.errors.Planned_Level_of_Business_Involvement && formik.touched.Planned_Level_of_Business_Involvement ? (
                            <FormErrorMessage formik={formik.errors.Planned_Level_of_Business_Involvement} />
                        ) : null}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap Key_Expectations_from_Franchise_Partner">
                        <select
                            name="Key_Expectations_from_Franchise_Partner"
                            className="wpcf7-form-control wpcf7-select form-select"
                            value={formik.values.Key_Expectations_from_Franchise_Partner}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">What Are You Primarily Looking for From a Franchise Partner?</option>
                            <option value="Proven Brand & Credibility">Proven Brand & Credibility</option>
                            <option value="Training & Handholding">Training & Handholding</option>
                            <option value="Ready Processes and System">Ready Processes and System</option>
                            <option value="Lead Generation & Sales Support">Lead Generation & Sales Support</option>
                            <option value="All of the Above">All of the Above</option>
                        </select>
                        {formik.errors.Key_Expectations_from_Franchise_Partner && formik.touched.Key_Expectations_from_Franchise_Partner ? (
                            <FormErrorMessage formik={formik.errors.Key_Expectations_from_Franchise_Partner} />
                        ) : null}
                    </span>
                </div>

                <div className="col-md-12">
                    <span className="wpcf7-form-control-wrap investment_range">
                        <select
                            name="investment_range"
                            className="wpcf7-form-control wpcf7-select form-select"
                            id="Experience1"
                            aria-required="true"
                            aria-invalid="false"
                            value={formik.values.investment_range}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="">Investment Range*</option>
                            {isINR ? (
                                <>
                                    <option value="Rs.2,00,000 to Rs.5,00,000">
                                        Rs.2,00,000 to Rs.5,00,000
                                    </option>
                                    <option value="Rs.5,00,001 to Rs.10,00,000">
                                        Rs.5,00,001 to Rs.10,00,000
                                    </option>
                                    <option value="Rs.10,00,001 to Rs.20,00,000">
                                        Rs.10,00,001 to Rs.20,00,000
                                    </option>
                                    <option value="Rs.20,00,001 to Rs.30,00,000">
                                        Rs.20,00,001 to Rs.30,00,000
                                    </option>
                                    <option value="Rs.30,00,001 to Rs.50,00,000">
                                        Rs.30,00,001 to Rs.50,00,000
                                    </option>
                                    <option value="Rs.50,00,000 & above">
                                        Rs.50,00,000 &amp; above
                                    </option>
                                </>
                            ) : (
                                <>
                                    <option value="5000 to 10000 USD">5000 to 10000 USD</option>
                                    <option value="10001 to 20000 USD">10001 to 20000 USD</option>
                                    <option value="20001 to 30000 USD">20001 to 30000 USD</option>
                                    <option value="30001 to 40000 USD">30001 to 40000 USD</option>
                                </>
                            )}
                        </select>
                        {formik.errors.investment_range && formik.touched.investment_range ? (
                            <FormErrorMessage formik={formik.errors.investment_range} />
                        ) : null}
                    </span>
                </div>
                <input
                    name="subject"
                    id="subject"
                    type="hidden"
                    value="ARG.AE - F.I - franchise"
                />
                <div className="col-lg-12">
                    <div className="form-white-wrapper">
                        <button
                            type="submit"
                            className="hireCandidate btn btn-primary"
                            name="submit"
                            id="submit"
                        >
                            Send Now
                        </button>
                    </div>
                </div>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-css">
                    <div className="modal-inner-con">
                        <div className="row gy-4">
                            <div className="col-lg-5">
                                <Image
                                    src="/assets/images/thankyou-logo.svg"
                                    alt="thankyou-logo"
                                    title="Thank You"
                                    width={300}
                                    height={100}
                                />
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
                                        Rest assured, we will ensure the security of your details.
                                        If you have any inquiries,don't hesitate to reach out to us
                                        at{" "}
                                        <Link href="mailto:sales@aistalent.com">
                                            {" "}
                                            <strong>sales@aistalent.com</strong>
                                        </Link>
                                        .
                                    </p>
                                    <p className="com-text mx-3">
                                        Kindly verify your email for the subsequent instructions
                                        provided by Alex.
                                    </p>
                                </div>
                                <Link
                                    href="https://calendly.com/allianceinternationalservices/30-mins-meeting-alliance-international-servic-gcc"
                                    className="com-btn"
                                    target="_blank"
                                >
                                    Schedule a Discovery Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default FranchiseEnquiryForm;
