import React from "react";

import Banner from "@/components/Banner";
import CustomHead from "@/components/Head";
import meta from "../meta/meta.json"
import Image from "next/image";

interface PrivacyPolicyProps { }
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmploymentAgency",
        "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency",
        "name": "Alliance Recruitment Agency UAE",
        "url": "https://www.alliancerecruitmentagency.ae",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.alliancerecruitmentagency.com.au/#logo",
          "url": "https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fimages%2Fheader%2Falliance-new-logo.png&w=384&q=75",
          "caption": "Alliance Recruitment Agency UAE"
        },
        "telephone": "+918980018741",
        "email": "sales@alliancerecruitmentagency.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+17809004752",
            "contactType": "customer service",
            "email": "sales@alliancerecruitmentagency.com",
            "areaServed": "CA",
            "availableLanguage": ["en"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+918980018741",
            "contactType": "customer service",
            "email": "sales@alliancerecruitmentagency.com",
            "areaServed": "IN",
            "availableLanguage": ["en"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+19179009072",
            "contactType": "customer service",
            "email": "sales@alliancerecruitmentagency.com",
            "areaServed": "US",
            "availableLanguage": ["en"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+442038380743",
            "contactType": "customer service",
            "email": "sales@alliancerecruitmentagency.com",
            "areaServed": "GB",
            "availableLanguage": ["en"]
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Silicon Oasis, Dubai",
          "addressLocality": "Dubai",
          "addressRegion": "UAE",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/Alliancerecruitmentagency/",
          "https://youtube.com/channel/UCTWg4i7ZXx1NTJ59SP8Nxrw",
          "https://www.linkedin.com/company/alliance-recruitment-agency/",
          "https://twitter.com/career_alliance"
        ],
        "foundingDate": "2010",
        "description": "We provide manpower services in Dubai, UAE. Our manpower consultants in Dubai will help you get the best International manpower recruitment services."
      },
      {
        "@type": "WebSite",
        "@id": "https://www.alliancerecruitmentagency.ae/#website",
        "url": "https://www.alliancerecruitmentagency.ae",
        "name": "Alliance Recruitment Agency UAE",
        "publisher": {
          "@id": "https://www.alliancerecruitmentagency.ae/#employmentagency"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.alliancerecruitmentagency.ae/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
  return (
    <div>
      <CustomHead
        {...meta["privacy-policy"]}
      />
      <>

        {/* <!-- main-banner start --> */}
        <Banner
          backgroundImage="/assets/images/privacy-policy.png"
          title="Privacy Policy"
          alt="Privacy Policy"
        />
        {/* <!-- main-banner End --> */}

        <section className="mid-text-section" id="ContactForm">
          <div className="container-fluid c-pad-x">
            <div className="text-wrapper row gx-lg-5">
              <div className="left-side col-lg-12 align-self-center">

                <h2 className="com-title text-start">Privacy Policy</h2>

                <p className="com-text">
                  <strong>Last updated:</strong> 31 December 2025
                </p>

                <p className="com-text">
                  Alliance Recruitment Agency UAE ("Company", "we", "our", "us") is thoroughly invested
                  in the protection of personal data and thus the privacy of our candidates, clients,
                  and all website users. Our secure platform ensures every guest and partner can use
                  our site confidently.{" "}
                  <a
                    href="https://www.alliancerecruitmentagency.ae/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    https://www.alliancerecruitmentagency.ae
                  </a>
                  (the "Website").
                </p>


                <p className="com-text">
                  Through our Privacy Policy guide, we explain how personal data is collected,
                  managed, shared, and protected. All processes comply with applicable data
                  protection laws, including the UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL),
                  the GDPR (where applicable), and other relevant regulations.
                </p>

                <h2 className="com-title text-start">1. Data Controller Information</h2>

                <p className="com-text">
                  Alliance Recruitment Agency UAE is a part of the global Alliance Recruitment Agency
                  group and serves as a key regional entity. The company delivers recruitment,
                  staffing, executive search, manpower, and HR outsourcing services across the
                  United Arab Emirates and internationally.
                </p>

                <p className="com-text">
                  For privacy-related queries, you may contact us at:
                </p>

                <p className="com-text">
                  <strong>Email:</strong> <a href="mailto:sales@alliancerecruitmentagency.com" target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary">sales@alliancerecruitmentagency.com</a>
                </p>

                <h2 className="com-title text-start">2. Personal Data We Collect</h2>

                <p className="com-text">
                  The types of personal data we may collect include:
                </p>

                <p className="com-text">
                  <strong>a) Voluntary information provided by you such as</strong><br />
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Full name, email address, phone number</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Company name, job title, business contact details</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />CVs, resumes, employment history, qualifications, and references (candidates)</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Enquiry details shared via contact forms, email, or business communication</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Any other information you choose to provide</li>
                </p>

                <p className="com-text">
                  <strong>b) Information Collected Automatically</strong><br />
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />IP address and approximate geographic location</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Browser type, operating system, and device information</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Website usage details, including pages visited and interaction records</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Cookies and similar tracking technologies (refer to Section 6)</li>
                </p>

                <h2 className="com-title text-start">3. Purpose of Data Processing</h2>

                <p className="com-text">
                  We process personal data for the following purposes:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />To provide recruitment, staffing, and manpower services</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />To assess candidates and assist with job placements</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />To interact with candidates, clients, and partners</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />To manage enquiries, contracts, and business relationships</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />To enhance our services and comply with legal requirements</li>
                </p>

                <h2 className="com-title text-start">4. Legal Basis for Processing</h2>

                <p className="com-text">
                  Based on legal requirements, we process your information through:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Your consent, where required</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Meeting our agreement or taking steps to start one</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Necessary business goals</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Following the UAE data laws and other rules that apply to us</li>
                </p>

                <h2 className="com-title text-start">5. Sharing and Disclosure of Personal Data</h2>

                <p className="com-text">
                  We do not sell personal data. Personal data may be shared only with:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Employers and clients for recruitment and placement purposes</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Group companies within Alliance Recruitment Agency</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Trusted third-party service providers (IT systems, CRM, analytics, email services)</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Government authorities or regulators when legally required</li>
                </p>

                <p className="com-text">
                  All third parties are contractually obligated to protect personal data and use it
                  only for authorised purposes.
                </p>

                <h2 className="com-title text-start">6. Cookies and Tracking Technologies</h2>

                <p className="com-text">
                  We use cookies and similar technologies to:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" /> Operate and maintain the Website</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Analyse visitor behaviour and website performance</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Enhance user experience</li>
                </p>

                <p className="com-text">
                  You may manage or disable cookies through your browser settings. Some website
                  features may not function properly if cookies are disabled.
                </p>

                <h2 className="com-title text-start">7. Data Retention</h2>

                <p className="com-text">
                  We keep personal data only if needed to:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Meet recruitment and business needs</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Maintain ongoing professional relationships</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Comply with UAE legal, accounting, and regulatory requirements</li>
                </p>

                <p className="com-text">
                  Candidate data may be retained for future job opportunities unless you ask to remove.
                </p>

                <h2 className="com-title text-start">8. Data Security Measures</h2>

                <p className="com-text">
                  We apply appropriate technical and organisational safeguards to protect personal
                  data against unauthorised access, loss, misuse, or disclosure. While we take
                  reasonable precautions, no online system is completely secure.
                </p>

                <h2 className="com-title text-start">9. International Data Transfers</h2>

                <p className="com-text">
                  As part of a global recruitment group, personal data may be transferred outside the
                  UAE. During such communication, data transfers are safely carried out as per UAE
                  PDPL and applicable international data protection laws.
                </p>

                <h2 className="com-title text-start">10. Your Rights</h2>

                <p className="com-text">
                  Subject to applicable laws, you may have the right to:
                </p>

                <p className="com-text">
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />View your personal data</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Request corrections or updates to inaccurate information</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Request the deletion of your personal data</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Object to or restrict certain processing activities</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Withdraw consent where processing is based on consent</li>
                  <li className="d-flex mb-2"><Image width={20} height={20} alt="tick" src="/assets/tick-blue.png" className="me-2 mt-1" />Complain to the relevant data protection authority</li>
                </p>

                <p className="com-text">
                  Requests can be submitted at sales@alliancerecruitmentagency.com.
                </p>

                <h2 className="com-title text-start">11. Third-Party Websites</h2>

                <p className="com-text">
                  Our Website may contain links to external websites. We are not responsible for the
                  privacy practices or content of those third-party websites.
                </p>

                <h2 className="com-title text-start">12. Children’s Privacy</h2>

                <p className="com-text">
                  Our services are not intended for individuals under the age of 16. We do not
                  purposefully collect data from children online.
                </p>

                <h2 className="com-title text-start">13. Updates to This Privacy Policy</h2>

                <p className="com-text">
                  We may update this Privacy Policy every now and then to reflect changes in legal
                  requirements or business practices. Updates will be published on this page with a
                  revised "Last updated" date.
                </p>

                <h2 className="com-title text-start">14. Contact Information</h2>

                <p className="com-text">
                  For questions or concerns regarding this Privacy Policy or personal data processing,
                  please contact:
                </p>

                <p className="com-text">
                  <strong>Alliance Recruitment Agency UAE</strong><br />
                  Email: <a href="mailto:sales@alliancerecruitmentagency.com" className="text-primary">sales@alliancerecruitmentagency.com</a>
                </p>

                <p className="com-text">
                  By using this Website, you acknowledge that you have read and understood this
                  Privacy Policy.
                </p>

              </div>
            </div>
          </div>
        </section>






        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }} />
      </>
    </div>
  );
};
export default PrivacyPolicy;

