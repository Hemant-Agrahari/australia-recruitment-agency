import React from "react";
import Image from 'next/image';
const FranchiseWhatsappCta = () => {
  return (
    <>
      <section className="cta-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="left-content">
                <h2 className="com-title">
                  {" "}
                  Begin Your Alliance Franchise Journey: Connect with Our Experts Now!
                </h2>
                <a
                  href="https://wa.me/+918980018741"
                  target="_blank"
                  className="whatsapp-btn res-disp"
                >
                  <span>
                    <Image
                      alt="whatsapp"
                      width={32}
                      height={32}
                      className="img-fluid"
                      src="/wp-content/themes/alliancerecruitmentagency-child/assets/images/green-whatsapp.png"
                    />
                  </span>
                  WhatsApp Now{" "}
                </a>
              </div>{" "}
            </div>
            <div className="col-lg-5 col-md-5">
              {" "}
              <div className="img-wrapper">
                {" "}
                <Image
                  alt=""
                  width={481}
                  height={423}
                  className="img-fluid"
                  src="/wp-content/themes/alliancerecruitmentagency-child/assets/images/cta-img.png"
                />
              </div>
            </div>
            <div className="col-12 show-tin-mob">
              <a
                href="https://wa.me/+918980018741"
                target="_blank"
                className="whatsapp-btn mt-1 mb-4"
              >
                <span>
                  <Image
                    alt="whatsapp"
                    width={32}
                    height={32}
                    src="/wp-content/themes/alliancerecruitmentagency-child/assets/images/green-whatsapp.png"
                  />{" "}
                </span>
                WhatsApp Now{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FranchiseWhatsappCta;
