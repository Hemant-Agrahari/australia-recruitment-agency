import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./author-page.module.css";
import AuthorProfile from "@/components/author-profile";
import AuthorBlogCard, { BlogI } from "@/components/author-blog-card/AuthorBlogCard";

const AuthorPage: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogI[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/list?pageIndex=1`);
                const data = await response.json();
                if (data.status === 200) {
                    setBlogs(data.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <>
            <Head>
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.alliancerecruitmentagency.ae/author/anish-malek" />
                <meta property="og:title" content="Anish Malek - Author at Alliance Recruitment Agency" />
                <meta property="og:description" content="Read insightful articles by Anish Malek, a skilled professional at Alliance Recruitment Agency, sharing expertise on recruitment and staffing solutions." />
                <meta property="og:image" content="https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fauthor-image.png&w=256&q=75" />
                <meta property="og:site_name" content="Alliance Recruitment Agency" />
                <meta property="og:locale" content="en" />
                <title>Anish Malek - Author at Alliance Recruitment Agency</title>
                <meta name="description" content="Read insightful articles by Anish Malek, a skilled professional at Alliance Recruitment Agency, sharing expertise on recruitment and staffing solutions." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Anish Malek - Author at Alliance Recruitment Agency" />
                <meta name="twitter:description" content="Read insightful articles by Anish Malek, a skilled professional at Alliance Recruitment Agency, sharing expertise on recruitment and staffing solutions." />
                <meta name="twitter:image" content="https://www.alliancerecruitmentagency.ae/_next/image?url=%2Fassets%2Fauthor-image.png&w=256&q=75" />
                <meta name="twitter:url" content="https://www.alliancerecruitmentagency.ae/author/anish-malek" />
            </Head>
            <div className="inner-wrapper">
                <div className="container py-5">
                    <AuthorProfile />

                    <section className={`${styles['author-blogs-section']} mt-5`}>
                        <h2 className={`${styles['section-title']} mb-4`}>Latest News & Blogs</h2>
                        {loading ? (
                            <div className={styles['loading-state']}>
                                <p>Loading blogs...</p>
                            </div>
                        ) : blogs.length > 0 ? (
                            <div className="row">
                                {blogs.map((blog, index) => (
                                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <AuthorBlogCard blog={blog} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles['no-blogs']}>
                                <p>No blogs found for this author currently.</p>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </>);
};

export default AuthorPage;