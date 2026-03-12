import CustomHead from "@/components/Head";
import React from "react";
import meta from "../../meta/meta.json";
import Link from "next/link";
const Recruitment = () => {
  return (
    <>
      <CustomHead {...meta["recruitment-archives"]} />
      <div className="inner-wrapper">
        <section className="breadcrumb p07">
          <div>
            <ul className="br-crumb">
              <li>
                <Link href="/">
                  <span>Home</span>
                </Link>
                <meta content="1" />
              </li>
            </ul>
            <span className="delimiter">›</span>Archive category: IT-Recruitment
          </div>
        </section>
        <section className="content fancy-borders-disabled  ">
          <section className="main postlist blog-section single-all">
            <div className="row">
              <div className="col-md-12">
                <h1>Latest News test &amp; Blogs</h1>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {/* <!-- Start: Post --> */}
                  <div className="col-md-6">
                    <article className="post-8656 post type-post status-publish format-standard has-post-thumbnail hentry category-hiring-tips category-recruitment-tips entry">
                      <span className="post-title">
                        <Link
                          href="/blog/it-recruitment-agencies-dubai-right-talent-business"
                          rel="bookmark"
                          title="Curious About Sushi Chef Hiring Abroad? Uncover the Benefits with Our Recruitment Experts!"
                        >
                        IT Recruitment Agencies in Dubai: Finding the Right Talent for Your Business
                        </Link>
                      </span>
                      <div className="tag-list">
                        <p className="post-meta">
                          <span className="spvc_area">
                            <span className="spvc_icon"></span>
                            <span className="spvc_views">26</span>
                          </span>
                          <span>|</span>May 02, 2025<span>|</span> by Kelly Johnson<span></span>
                        </p>
                      </div>
                      <Link href="/blog/curious-about-sushi-chef-hiring-abroad">
                        <img
                          width="3000"
                          height="1090"
                          src="/assets/images/it-recruitment-agencies-in-dubai-finding-the-right-talent-for-your-business.jpg"
                          alt=" Sushi Chef Hiring"
                          title="Curious About Sushi Chef Hiring Abroad? Uncover the Benefits with Our Recruitment Experts!"
                          className="attachment-medium size-medium wp-post-image"
                          decoding="async"
                          sizes="(max-width: 34.9rem) calc(100vw - 2rem), (max-width: 53rem) calc(8 * (100vw / 12)), (min-width: 53rem) calc(6 * (100vw / 12)), 100vw"
                          data-pagespeed-url-hash="1564517875"
                        />
                      </Link>
                      <div className="blog-post-content">
                        <p>
                        In the fast-paced and competitive world of business, having the right talent is a key to success. In mainland Dubai, finding qualified IT professionals is often the differentiation between being on the seasoned side of the competition or lagging in the other. This is where recruitment agencies come in. This specialized breed of agencies is dedicated to finding the greatest talents that fit the peculiar needs of businesses.[...]
                        </p>
                      </div>
                      <p className="more more-icon">
                        <Link href="/blog/curious-about-sushi-chef-hiring-abroad">
                          Read more
                        </Link>
                      </p>
                    </article>
                  </div>
                  
              
              </div>
            </div>
            <div className="col-md-3">
                {/* <!-- Categories --> */}
                <div className="categories">
                  <p className="cat-title">Categories</p>
                  <ul className="list_val">
                    <li className="cat_list">
                      <Link href="/category/it-recruitment/">IT Recruitment</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/business-trip/">Business Trip</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/contract-staffing/">
                        Contract Staffing
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/head-hunting/">Headhunting</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/hiring-tips/">Hiring Tips</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/human-resource/">
                        Human Resource
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/job-seekers/">Job Seekers</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/launching-event/">
                        Launching Event
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/recruitment/">Recruitment</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/recruitment-agencies/">
                        Recruitment Agencies
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/recruitment-process-outsourcing-rpo/">
                        Recruitment Process outsourcing (RPO)
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/recruitment-tips/">
                        Recruitment Tips
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/recruitment-trends/">
                        Recruitment Trends
                      </Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/remote-hiring/">Remote Hiring</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/startups/">Startups</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/tips/">Tips</Link>
                    </li>
                    <li className="cat_list">
                      <Link href="/category/virtual-assistants/">
                        Virtual Assistants
                      </Link>
                    </li>{" "}
                  </ul>
                </div>
            </div>
            </div>
          </section>
          {/* <!-- #main --> */}
        </section>
      </div>
    </>
  );
};
export default Recruitment;
