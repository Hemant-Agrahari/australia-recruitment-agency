import React from "react";
import Head from "next/head";
import Author from "../author/Author";

interface AuthorProfileProps {
  showTitle?: boolean;
  showIcon?: boolean;
  className?: string;
}
const AuthorProfile: React.FC<AuthorProfileProps> = ({ showTitle = true, showIcon = false, className }) => {
  const name = "Anish Malek";
  const title = "Recruitment Expert";
  const company = "Alliance Recruitment Agency UAE";
  const bio = "Anish Malek is a recruitment expert at Alliance Recruitment Agency UAE, specializing in connecting businesses with top-tier talent. With a deep understanding of the recruitment process and years of experience, Anish is dedicated to helping companies build dynamic teams that fuel innovation and growth. Focused on understanding both the needs of employers and the aspirations of job seekers, Anish ensures the perfect match for long-term success and career satisfaction.";
  const imageUrl = "/assets/author-image.png";
  const imageAlt = "Anish Malek profile picture";
  const linkedinUrl = "https://www.linkedin.com/in/anish-malek-19ba9721b/";
  const connectButtonText = "Connect With Experts";
  const connectButtonLink = "https://calendly.com/allianceinternationalservices/global";

  return (
    <>
      <Head>
        <title>Anish Malek - Recruitment Expert at Alliance Recruitment Agency UAE</title>
        <link rel="canonical" href="https://www.alliancerecruitmentagency.ae/author/anish-malek" />
        <meta name="description" content="Anish Malek is a recruitment expert at Alliance Recruitment Agency UAE, helping employers find top talent and supporting job seekers in their career success." />
        <meta name="robots" content="index, follow" />
      </Head>
      <Author name={name} title={title} company={company} bio={bio} imageUrl={imageUrl} imageAlt={imageAlt} linkedinUrl={linkedinUrl} showTitle={showTitle} showIcon={showIcon} connectButtonLink={connectButtonLink} connectButtonText={connectButtonText} className={className} />
    </>
  );
};

export default AuthorProfile;

