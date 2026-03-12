/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";

const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

import {
  GoogleReCaptcha,
  // GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import GoogleCaptchaWrapper from "@/components/captcha/google-captcha-wrapper";
import PhoneInput from "react-phone-input-2";
interface Country {
  id: string;
  name: string;
  dial_code: string;
  code: string;
  countryCode: string;
  phone_number: string;
}

export default function AutoPopUp({ show, setShowModal, title }: any) {
  return (
    <GoogleCaptchaWrapper>
      <HireDeveloperChild
        show={show}
        setShowModal={setShowModal}
        title={title}
      />
    </GoogleCaptchaWrapper>
  );
}

export const HireDeveloperChild = ({ show, setShowModal, title }: any) => {
  const router = useRouter();
  const pathname = router.asPath.split('?')[0];
  const currentUrl = pathname;

  const [notification, setNotification] = useState("");
  const [token, setToken] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [countryName, setCountryName] = useState<any>(null);
  const [countryCode, setCountryCode] = useState<any>(null);

  // const [selectedId, setSelectedId] = useState("");
  // const { execute } = useRecaptcha();

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleClose = () => {
    formik.resetForm();
    setShowModal(false);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCountryChange = (
    value: any,
    country: any,
    e: any,
    formattedValue: any
  ) => {
    formik.setFieldValue("phone_number", formattedValue);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountryName(data.country_name);
        setCountryCode(data.country_calling_code);
        setSelectedCountry({
          name: data.country_name,
          dialCode: data.country_calling_code,
          countryCode: data.country_code,
        });
        formik.setFieldValue("country", data.country_name);
        formik.setFieldValue("countryCode", data.country_calling_code);
      })
      .catch((error) => {
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

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    job_option: Yup.string().required("How Can We Help You? is required"),
    company_name: Yup.string().optional(),
    role: Yup.string().optional(),
    experience: Yup.string().optional(),
    hiringTime: Yup.string().optional(),
    budget: Yup.string().optional(),
    hiringDecision: Yup.string().optional(),
    message: Yup.string().optional(),
  });

  const verifyRecaptchaCallback = useCallback((token: any) => {
    setToken(token);
    setIsRecaptchaVerified(true);
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    phone_number: "",
    job_option: "",
    company_name: "",
    role: "",
    experience: "",
    hiringTime: "",
    budget: "",
    hiringDecision: "",
    message: "",
    country: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // if (typeof window !== "undefined") {

      //   const dataLayerEvent = {
      //     event: "popupFormSubmission",
      //     formData: {
      //       name: values.name,
      //       email: values.email,
      //       phone: `${values.countryCode}${values.mobileNumber}`,
      //       country: values.country,
      //       skype_id: values.skype_id,
      //       message: values.message,
      //       captcha_response: values.captcha_response,
      //     },
      //   };
      //   window.dataLayer = window.dataLayer || [];
      //   window.dataLayer.push(dataLayerEvent);
      //   console.log("Form data pushed to dataLayer:", dataLayerEvent);
      // }


      //   const handleSubmitClick = async () => {
      //     const errors = await formik.validateForm(); 
      //     formik.setTouched({
      //         name: true,
      //         email: true,
      //         phone_number: true,
      //         helpType:true,
      //     }); 

      //     if (Object.keys(errors).length === 0) {
      //         setShowModal(true); 
      //     } else {
      //         formik.setErrors(errors); 
      //     }
      // };




      // if (!executeRecaptcha) {
      //   alert("RecaptchaNot available yet.");
      //   return;
      // }
      // const token = await executeRecaptcha("autoPopupForm");
      // if (!token) {
      //   alert("Recaptcha failed,please load page");
      // }

      // values.captcha_response = token;

      if (token) {
        try {
          const requestdata = {
            fullName: values.fullName,
            email: values.email,
            phone_number: values.phone_number,
            job_option: values.job_option,
            company_name: values.company_name,
            role: values.role,
            experience: values.experience,
            hiringTime: values.hiringTime,
            budget: values.budget,
            hiringDecision: values.hiringDecision,
            message: values.message,

            form_url: `${NEXT_PUBLIC_FRONTEND_URL}${currentUrl}`,
          };
          const { statusText, status, data } = await axios.post(
            `${NEXT_PUBLIC_BACKEND_URL}/autoPopupForm`,
            requestdata
          );
          console.log("Onsubmit Triggered", data);
          if (status === 200) {
            setShowModal(false);
            sessionStorage.setItem("isSubmitted", "true");
            router.push("/thank-you");
            resetForm({
              values: initialValues,
            });
            setNotification(`Success with score: ${data?.data?.score}`);
          } else {
            console.error("Form submission failed:", statusText);
            setNotification(`Failure with score: ${data?.data?.score}`);
          }
        } catch (error: any) {
          let msg = error;
          if (error.response) {
            if (typeof error.response.data.message === "string") {
              msg = error.response.data.message;
            } else {
              if (error.response.data.message.length > 0) {
                msg = error.response.data.message[0].message;
              }
            }
          }
          setError(msg);
        }
      }
    },
  });

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        centered
        dialogClassName="hire-dialog"
        contentClassName="hire-content"
        className="grow-modal auto-popup-modal border-none "
      >
        <button
          onClick={handleClose}
          className="btn-close  position-absolute end-0 mt-3 me-3  "
          aria-label="Close"
        />
        <div className="row g-0 border-radius-5 border-none">
          <div className="col-md-6 p-5 text-white hire-left">
            <h2 className="fw-bold mb-4 text-dark">
              Hey, <br />
              Hold On A Moment!
            </h2>
            <p className="fs-3 mb-4 mt-5 text-dark">
              Need Quick Hiring Solutions?
              {/* <strong className="different">48 Hours!</strong>{" "} */}
            </p>
            <ul className="list-unstyled fs-5 text-dark task-list ">
              <li className="task-itemm mb-2">
                {" "}
                15 years of Experience in Multiple sectors hiring.
              </li>
              <li className="task-item  mb-2">
                {" "}
                Vetted Candidates under 48 Hours!
              </li>
              <li className="task-item mb-2">
                Industry - specific recruiters available.
              </li>
              <li className="task-itemm mb-2">
                Enjoy risk-free hiring with a

                90-days replacement guarantee.

              </li>
            </ul>
          </div>

          <div
            className="col-md-6 p-5 bg-light hire-right form-group"
            style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto", overflowX: "hidden" }}
          >
            {/* <GoogleReCaptchaProvider
              reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            > */}
            <form className="row g-3 form " onSubmit={formik.handleSubmit} id="popup-form">
              <input type="text" name="hidden_field" style={{ display: "none" }} />
              <div className="col-md-6 col-12 form-group">
                {!isRecaptchaVerified && (
                  <GoogleReCaptcha
                    onVerify={(token: any) => {
                      formik.setFieldValue("captcha_response", token);
                      verifyRecaptchaCallback(token);
                      setToken(token);
                    }}
                  />
                )}
                <label className="form-label">Full Name*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  id="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className="invalid-feedback-error text-danger">
                    {formik.errors.fullName}
                  </div>
                )}
              </div>
              <div className="col-md-6 col-12 form-group">
                <label className="form-label">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="invalid-feedback-error text-danger">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="col-12 form-group">
                <label className="form-label">Phone Number (With Area Code)*</label>
                <div className="form-white-wrapper form-group">
                  <PhoneInput
                    country={
                      selectedCountry
                        ? selectedCountry.countryCode.toLowerCase()
                        : "us"
                    }
                    placeholder="Mobile Number"
                    countryCodeEditable={false}
                    enableSearch={true}
                    value={formik.values.phone_number}
                    onChange={handleCountryChange}
                    onBlur={formik.handleBlur("phone_number")}
                    inputStyle={{ width: "100%", paddingLeft: "45px" }}
                    inputProps={{ ref: inputRef }}
                  />
                  {formik.errors.phone_number && formik.touched.phone_number ? (
                    <div className="invalid-feedback-error text-danger">
                      {formik.errors.phone_number}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="col-12 form-group">
                <label className="form-label">Company Name (Optional)</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  id="company_name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-12 form-group">
                <label className="form-label ">How Can We Help You?*</label>
                <select
                  name="job_option"
                  className="form-control"
                  style={{ fontSize: "14px" }}
                  value={formik.values.job_option}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (e.target.value === "job") {
                      setShowModal(false);
                      router.push("/job-seekers");
                    }
                  }}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="I Am Looking to Hire">I Am Looking to Hire</option>
                  <option value="I Am Looking for RPO Solutions">I Am Looking for RPO Solutions</option>
                  <option value="I Am Looking to Buy Recruitment Franchise">I Am Looking to Buy Recruitment Franchise</option>
                  <option value="job">I Am Looking for Job</option>
                </select>
                {formik.touched.job_option && formik.errors.job_option && (
                  <div className="invalid-feedback-error text-danger">
                    {formik.errors.job_option}
                  </div>
                )}
              </div>

              <div className="col-12 form-group">
                <label className="form-label">What Role Are You Looking to Hire? (Optional)</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="col-md-6 col-12 form-group">
                <label className="form-label">How Experienced Should the Talent Be? (Optional)</label>
                <select
                  name="experience"
                  className="form-control"
                  style={{ fontSize: "14px" }}
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Level</option>
                  <option value="Entry Level / Junior">Entry Level / Junior</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                  <option value="Leadership / Head Role">Leadership / Head Role</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <label className="form-label">How Urgent Is This Hire? (Optional)</label>
                <select
                  name="hiringTime"
                  className="form-control"
                  style={{ fontSize: "14px" }}
                  value={formik.values.hiringTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Urgency</option>
                  <option value="Immediate / Critical">Immediate / Critical</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Exploring / Pipeline">Exploring / Pipeline</option>
                  <option value="Not Urgent">Not Urgent</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <label className="form-label">How Are You Planning to Budget? (Optional)</label>
                <select
                  name="budget"
                  className="form-control"
                  style={{ fontSize: "14px" }}
                  value={formik.values.budget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Budget Plan</option>
                  <option value="Per Hire / Placement Based">Per Hire / Placement Based</option>
                  <option value="Ongoing / Multiple Hires">Ongoing / Multiple Hires</option>
                  <option value="Project Based">Project Based</option>
                  <option value="Not Decided Yet">Not Decided Yet</option>
                </select>
              </div>

              <div className="col-md-6 col-12 form-group">
                <label className="form-label">Who Will Take Final Hiring Decision? (Optional)</label>
                <select
                  name="hiringDecision"
                  className="form-control"
                  style={{ fontSize: "14px" }}
                  value={formik.values.hiringDecision}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select Decision Maker</option>
                  <option value="Me">Me</option>
                  <option value="Me + Another Stakeholder">Me + Another Stakeholder</option>
                  <option value="HR / Management Team">HR / Management Team</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>
              <div className="col-12 form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  placeholder="Your message"
                  name="message"
                  id="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="form-control"
                  rows={3}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  name="send message"
                  id="submit"
                  defaultValue="Hire now"
                  className="onlybutton btn btn-lg text-bold  w-100 border-none"
                >
                  Start Hiring Now
                </button>
              </div>
              <div className=" verystrong col-12 text-center small experience">
                <strong className=" fs-6">15+</strong>
                Years Experience | <strong className="fs-6"> 4.8</strong> rating
                | <strong className="fs-6"> 95%</strong> repeat clients
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
