import React, { useEffect, useState, useCallback } from "react";
import meta from "../../meta/meta.json";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomHead from "@/components/Head";
import Image from "next/image";
import Loading from "@/components/Loading";
import { formatDate } from "@/utils/dateFormat";

interface BlogI {
  slug: string;
  bannerTitle: string;
  breadcrumbTitle: string;
  bannerImage: string;
  bannerDesp: string;
  author: {
    bannerTitle: string;
  };
  bannerImagedetails: {
    alt: string;
    title: string;
  };
  views: number;
  date: string;
  categories?: string[] | string | null;
}

interface CategoryI {
  _id: string;
  title: string;
  slug: string;
}

const WebBlog = () => {
  const router = useRouter();
  const { category: queryCategory } = router.query;

  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<null | BlogI[]>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState<CategoryI[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (queryCategory) {
      setSelectedCategory(queryCategory as string);
    } else {
      setSelectedCategory(null);
    }
    setCurrentPage(1); // Reset to first page when category changes
  }, [queryCategory]);

  const fetchHandler = useCallback(async (page: number, category: string | null) => {
    setLoading(true);
    try {
      let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/list?pageIndex=${page}`;
      if (category) {
        url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/getCategoriesBlog?categories=${category}&pageIndex=${page}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 200) {
        setBlogs(data.data);
        setTotalPages(data.pagination.totalPages || 0);
      } else {
        setBlogs([]);
        setTotalPages(0);
      }
    } catch (error) {
      console.log("error in fetching blogs", error);
      setBlogs([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHandler(currentPage, selectedCategory);
  }, [currentPage, selectedCategory, fetchHandler]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/getCategories?type=categories-management`
      );
      const data = await response.json();
      if (data.status === 200 && Array.isArray(data.data)) {
        setCategories(data.data);
      }
    } catch (error) {
      console.log("error in fetching categories", error);
    } finally {
      setCategoriesLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return !loading ? (
    <>
      <CustomHead {...meta["webblog"]} />
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
              {selectedCategory && (
                <li>
                  <span className="delimiter">›</span>
                  <Link href="/webblog">
                    <span>Blog</span>
                  </Link>
                </li>
              )}
            </ul>
            <span className="delimiter">›</span>
            {selectedCategory ? `Category: ${selectedCategory.replace(/-/g, ' ')}` : "Blog"}
          </div>
        </section>
        {!loading && blogs && (
          <section className="content fancy-borders-disabled">
            <section className="main postlist blog-section single-all">
              <div className="row">
                <div className="col-md-12">
                  <h1>{selectedCategory ? `Category: ${selectedCategory.replace(/-/g, ' ')}` : "Latest News & Blogs"}</h1>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {Array.isArray(blogs) && blogs.length > 0 ? (
                      blogs.map((blog, index) => (
                        <div className="col-md-6" key={index}>
                          <Blog blog={blog} />
                        </div>
                      ))
                    ) : (
                      <div className="col-md-12 no-data-found">
                        <h3>No News & Blogs Found</h3>
                        <p>Sorry, there are no blogs available in this category at the moment.</p>
                      </div>
                    )}
                  </div>
                  <div className="col-12">
                    <nav className="project-nav blog-nav">
                      <span className="prev">
                        <Link
                          href="#"
                          className="page-numbers previous-page"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePrevPage();
                          }}
                        // disabled={currentPage === 1}
                        >
                          Previous Posts
                        </Link>
                      </span>
                      <span className="next">
                        <Link
                          href="#"
                          className="page-numbers next-page"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNextPage();
                          }}
                        // disabled={currentPage === totalPages}
                        >
                          Next Posts
                        </Link>
                      </span>
                    </nav>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="categories">
                    <p className="cat-title">Categories</p>
                    {categories.length > 0 && (
                      <ul className="list_val">
                        {categories.map((category) => (
                          <li className={`cat_list ${selectedCategory === category.slug ? 'active' : ''}`} key={category._id}>
                            <Link href={`/webblog?category=${category.slug}`}>
                              {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}
      </div>
    </>
  ) : /* (
    <Loading />
  ); */ null
};

const Blog = ({ blog }: { blog: BlogI }) => {
  let bannerImagedetails = { alt: "", title: "" };
  if (blog.bannerImagedetails) {
    if (typeof blog.bannerImagedetails === "string") {
      try {
        bannerImagedetails = JSON.parse(blog.bannerImagedetails);
      } catch (error) {
        console.error("Error parsing bannerImagedetails", error);
      }
    } else {
      bannerImagedetails = blog.bannerImagedetails;
    }
  }

  return (
    <article className="post-8656 post type-post status-publish format-standard has-post-thumbnail hentry category-hiring-tips category-recruitment-tips entry">
      <span className="post-title">
        <Link
          href={`/blog/${blog.slug}`}
          rel="bookmark"
          title={bannerImagedetails.title}
        >
          {blog.bannerTitle}
        </Link>
      </span>
      <div className="tag-list">
        <p className="post-meta">
          <span className="spvc_area">
            <span className="spvc_icon"></span>
            <span className="spvc_views">{blog.views}</span>
          </span>
          <span>|</span>
          {formatDate(blog.date)}
          <span>|</span> {blog.author.bannerTitle}
          <span></span>
        </p>
      </div>
      <Link href={`/blog/${blog.slug}`}>
        <Image
          width="3000"
          height="1090"
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.bannerImage}`}
          title={bannerImagedetails.title}
          alt={bannerImagedetails.alt}
          className="attachment-medium size-medium wp-post-image"
          decoding="async"
          sizes="(max-width: 34.9rem) calc(100vw - 2rem), (max-width: 53rem) calc(8 * (100vw / 12)), (min-width: 53rem) calc(6 * (100vw / 12)), 100vw"
        />
      </Link>
      <div className="blog-post-content">
        <p dangerouslySetInnerHTML={{ __html: blog.bannerDesp }} />
      </div>
      <p className="more more-icon">
        <Link href={`/blog/${blog.slug}`}>Read more</Link>
      </p>
    </article>
  );
};

export default WebBlog;
