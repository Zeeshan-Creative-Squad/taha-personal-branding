import React, { Fragment, useEffect, useState } from "react";
import "./BlogsListing.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import BlogsPopup from "./BlogsPopup";
import { Settings } from "../../inc/Settings";
import CommonHeroComponent from "../CommonHeroComponent/CommonHeroComponent";

const BlogsPortalListings = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popupBlogDetails, setPopupBlogDetails] = useState({
    openPopup: false,
    editMode: false,
    id: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogsListing();
    getAllCategories();
  }, []);

  let blogAPICalled = false;
  let categoryAPICalled = false;

  const getAllBlogsListing = () => {
    if (blogAPICalled) return;
    blogAPICalled = true;

    setLoading(true);
    axios
      .get("/blogs", {})
      .then((res) => {
        if (res.data.status === "success") {
          setLoading(false);
          setBlogs(res.data.data);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const getAllCategories = () => {
    if (categoryAPICalled) return;
    categoryAPICalled = true;

    axios
      .get("/api/categories", {})
      .then((res) => {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UploadBlog = () => {
    setPopupBlogDetails((prevState) => {
      return {
        ...prevState,
        openPopup: true,
        editMode: false,
        id: null,
      };
    });
  };

  const editBlog = (id) => {
    if (!id) return;

    setPopupBlogDetails((prevState) => {
      return {
        ...prevState,
        openPopup: true,
        editMode: true,
        id: id,
      };
    });
  };

  const deleteBlog = (id) => {
    if (!id) return;

    axios
      .delete(`/blog/${id}`, {})
      .then((res) => {
        if (res.data.status === "success") {
          Settings.alert(res.data.message);
          getAllBlogsListing();
        }
      })
      .catch((err) => {
        Settings.alert(err.message);
        getAllBlogsListing();
      });
  };

  // Modules,
  const BlogListingModule = () => {
    return (
      <>
        <CommonHeroComponent 
        backgroundImg="/images/creatives/services-hero.jpg" 
        Heading="Blogs Portal" subtitle="HB Care Blogs Portal" />
        <div className="blogs_portal_listings mt-4 mb-4">
          <div className="container">

            <div className="blogs_upload">
              <button onClick={UploadBlog}>
                <img src="/icons/plus-white.png" alt="icon"/>
                <span>Upload New Blog</span>
              </button>
            </div>

            <div className="blogs_list mt-5 mb-5"> {BlogPatch()} </div>
          </div>
        </div>
      </>
    );
  };

  const BlogPatch = () => {
    return (
      <div className="row">
      {blogs.map((element) => (
          <div className="col-lg-4 col-md-6 col-12 mb-5 ">
              <div className="blogs_card">
                  <div className='entity_details mb-2 d-flex justify-content-start align-items-center'>
                      {/* <img className='img-fluid' src="/images/icons/ETB-Logo.png" alt='Favicon logo' /> */}
                      <div className='entity_dates'>
                          <h5>ETB-HOME STAGING</h5>
                          <h4>{element.published_date}</h4>
                      </div> 
                  </div>

                  <img src={element.blog_image} className='img-fluid blg_crt' alt='Blog Img' />

                  <div className='blogs_card_details'> 
                      <h5>{ categories?.find((val) => val.category_id == element.category)?.category }</h5>
                      <h3>{element.title}</h3>
                      <p>{element.brief_paragraph}</p>
                      <div className='action_btns'>
                         <button onClick={() => editBlog(element.blog_id)} className='edit'> <span><img src='/icons/edit.svg' className='img-fluid' alt='Edit Img' /></span> Edit Blog</button>
                         <button onClick={() => deleteBlog(element.blog_id)} className='delete'> <span><img src='/icons/delete.svg' className='img-fluid' alt='Delete Img' /></span> Delete Blog</button>
                      </div>
                  </div>
              </div>
          </div>
      ))}
  </div>
    );
  };
  // -----
  return (
    <Fragment>
      {loading ? (
        <div className="w-100 text-center">
          <Spinner style={{ color: "#85329A", width: "120px", height: "120px" }} />
        </div>
      ) : (
        BlogListingModule()
      )}
      {popupBlogDetails.openPopup && (
        <BlogsPopup
          reloadBlogs={getAllBlogsListing}
          blogsDetails={setPopupBlogDetails}
          id={popupBlogDetails.id}
          editMode={popupBlogDetails.editMode}
        />
      )}
    </Fragment>

  );
};

export default BlogsPortalListings;
