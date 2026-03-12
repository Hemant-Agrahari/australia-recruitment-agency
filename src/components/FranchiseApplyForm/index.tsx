import React, { useEffect, useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import GoogleCaptchaWrapper from "../captcha/google-captcha-wrapper";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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

interface Country {
  id: number;
  name: string;
  code: string;
  dial_code: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: Yup.string().required("Phone Number is required"),
  investment_range: Yup.string().required("Investment Range is required"),
});

const FranchiseForm = () => {
  const router = useRouter();
  const NEXT_PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const currentUrl = router.asPath.split('?')[0];
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [isINR, setIsINR] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const { country } = response.data;
        let data = response.data;
        setIsINR(country === 'IN');
        setSelectedCountry({
          name: data.country_name,
          dialCode: data.country_calling_code,
          countryCode: data.country_code,
        });
      } catch (error) {
        // console.error('Error fetching IP information:', error);
      }
    };
    fetchData();
  }, []);

  const handleCountryChange = (value: any, country: any, e: any, formattedValue: any) => {
    formik.setFieldValue('phone_number', formattedValue);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      email: "",
      phone_number: "",
      Primary_Motivation_for_Franchise_Exploration: "",
      Recruitment_Industry_Experience_Level: "",
      business_start_timeline: "",
      Planned_Level_of_Business_Involvement: "",
      Key_Expectations_from_Franchise_Partner: "",
      investment_range: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm);
    },
  });

  const handleSubmitForm = async (
    values: FormValues,
    resetForm: () => void
  ) => {
    if (!window.grecaptcha) {
      console.error("reCAPTCHA not loaded");
      toast.error("Security check not ready. Please try again in a moment.");
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string, {
          action: "submit",
        })
        .then((gReCaptchaToken: string) => {
          //   setCaptchaResponse(gReCaptchaToken); // Store the CAPTCHA response
          handleFranchiseApplyForm(values, gReCaptchaToken, resetForm);
        })
        .catch((error: any) => {
          console.error("Error executing reCAPTCHA:", error);
        });
    });
  };

  const handleFranchiseApplyForm = async (
    values: FormValues,
    gReCaptchaToken: string,
    resetForm: () => void
  ) => {
    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone_number", values.phone_number);
      formData.append("Primary_Motivation_for_Franchise_Exploration", values.Primary_Motivation_for_Franchise_Exploration);
      formData.append("Recruitment_Industry_Experience_Level", values.Recruitment_Industry_Experience_Level);
      formData.append("business_start_timeline", values.business_start_timeline);
      formData.append("Planned_Level_of_Business_Involvement", values.Planned_Level_of_Business_Involvement);
      formData.append("Key_Expectations_from_Franchise_Partner", values.Key_Expectations_from_Franchise_Partner);
      formData.append("investment_range", values.investment_range);
      formData.append("captcha_response", gReCaptchaToken);
      formData.append("form_url", `${NEXT_PUBLIC_FRONTEND_URL}${currentUrl}`);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/franchisesApplyContactUs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 && response.data.status !== "error") {
        resetForm();
        router.push("/thank-you");
      } else {
        toast.error(response.data.error || "Form submission failed. Please try again later.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Form submission failed. Please try again later.");
      } else {
        toast.error("Form submission failed. Please try again later.");
      }
    }
  };

  return (
    <section className="new-apply-form pb-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="apply-form-img">
              <img
                width="491"
                height="630"
                src="/assets/images/new-page-images/apply-online-application-form-recruitment-concept.png"
                alt="Apply Online"
                className="w-100"
              />
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 mt-3 mt-lg-0">
            <h2 className="com-title mt-0 mb-2 pb-2 pb-lg-3 mb-lg-3 text-center fs-2 text-black fw-semibold">
              Apply for Franchise
            </h2>

            <form
              onSubmit={formik.handleSubmit}
              className="consultation-form w-100"
              id="franchise-apply-footer-form"
            >
              <div className="cus-container">
                <div className="mid-flex">
                  <div className="main-inputs">
                    <input
                      type="text"
                      name="fullName"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Full Name*"
                    />
                    {formik.errors.fullName && formik.touched.fullName ? (
                      <FormErrorMessage formik={formik.errors.fullName} />
                    ) : null}
                  </div>
                  <div className="main-inputs">
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Email Id*"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <FormErrorMessage formik={formik.errors.email} />
                    ) : null}
                  </div>
                </div>

                <div className="mid-flex">
                  <div className="main-inputs">
                    <PhoneInput
                      country={selectedCountry ? selectedCountry.countryCode.toLowerCase() : 'us'}
                      placeholder="Phone Number (With Area Code)*"
                      countryCodeEditable={false}
                      value={formik.values.phone_number}
                      enableSearch={true}
                      onChange={handleCountryChange}
                      onBlur={formik.handleBlur("phone_number")}
                      inputStyle={{ width: "100%", height: "45px" }}
                      inputProps={{ ref: inputRef }}
                    />
                    {formik.errors.phone_number && formik.touched.phone_number ? (
                      <FormErrorMessage formik={formik.errors.phone_number} />
                    ) : null}
                  </div>
                  <div className="main-inputs">
                    <select
                      name="Primary_Motivation_for_Franchise_Exploration"
                      className="form-select"
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
                  </div>
                </div>

                <div className="mid-flex">
                  <div className="main-inputs">
                    <select
                      name="Recruitment_Industry_Experience_Level"
                      className="form-select"
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
                  </div>
                  <div className="main-inputs">
                    <select
                      name="business_start_timeline"
                      className="form-select"
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
                  </div>
                </div>

                <div className="mid-flex">
                  <div className="main-inputs">
                    <select
                      name="Planned_Level_of_Business_Involvement"
                      className="form-select"
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
                  </div>
                  <div className="main-inputs">
                    <select
                      name="Key_Expectations_from_Franchise_Partner"
                      className="form-select"
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
                  </div>
                </div>

                <div className="mid-flex">
                  <div className="main-inputs">
                    <select
                      name="investment_range"
                      value={formik.values.investment_range}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Investment Range*</option>
                      {isINR ? (
                        <>
                          <option value="Rs.2,00,000 to Rs.5,00,000">Rs.2,00,000 to Rs.5,00,000</option>
                          <option value="Rs.5,00,001 to Rs.10,00,000">Rs.5,00,001 to Rs.10,00,000</option>
                          <option value="Rs.10,00,001 to Rs.20,00,000">Rs.10,00,001 to Rs.20,00,000</option>
                          <option value="Rs.20,00,001 to Rs.30,00,000">Rs.20,00,001 to Rs.30,00,000</option>
                          <option value="Rs.30,00,001 to Rs.50,00,000">Rs.30,00,001 to Rs.50,00,000</option>
                          <option value="Rs.50,00,000 & above">Rs.50,00,000 & above</option>
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
                  </div>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FranchiseFormWrapped = () => {
  return (
    <GoogleCaptchaWrapper>
      <FranchiseForm />
    </GoogleCaptchaWrapper>
  );
};

export default FranchiseFormWrapped;
