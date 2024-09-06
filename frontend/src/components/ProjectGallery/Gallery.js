import React, { useState } from 'react';
import "./Gallery.css";
import Modal from '../Model/Modal';

const galleryImages = [
    "/images/gallery/gallery-image-two.jpg",
    "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
];

const galleryImagesAfter = [
    "/images/gallery/gallery-image-one.jpg",
    "/images/gallery/gallery-image-two.jpg",
    "/images/gallery/gallery-image-two.jpg",
    "/images/gallery/gallery-image-one.jpg",
    "/images/gallery/gallery-image-one.jpg",
    "/images/gallery/gallery-image-two.jpg",
    "/images/gallery/gallery-image-two.jpg",
    "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
    // "/images/gallery/gallery-image-one.jpg",
    // "/images/gallery/gallery-image-two.jpg",
]

const Gallery = ({ hideTransform, homeSection=false }) => {
    const [visible, setVisible] = useState(10);
    const [show, setShow] = useState(false);
    const [img, setImg] = useState("");

    function generateSequence(limit) {
        const sequence = [];
        let index = 0;
        while (index < limit) {
            sequence.push(index);
            index += 3;
            if (index < limit) sequence.push(index);
            index += 1;
        }
        return sequence;
    }

    const sequence = generateSequence(galleryImages.length);

    const handleLoadMore = () => {
        setVisible(prevVisible => prevVisible + 10);
    }

    const closeModal = () => {
        setShow(false);
    }

    const showLoadMoreButton = visible < galleryImages.length;

    return (
        <div className='gallery-container'>
            <div className="container">
                <div className="gallery-section">
                    <div className="gallery">
                        <div className={`d-flex flex-column flex-lg-row ${hideTransform ? 'no-transform' : ''}`}>
                            <div className="gallery-item">
                                <img src="/images/gallery/gallery-image-one.jpg" alt="Image 2" className="gallery-image2" onClick={() => {
                                    console.log("Image clicked", "/images/gallery/gallery-image-one.jpg");
                                    setShow(true);
                                    setImg("/images/gallery/gallery-image-one.jpg");
                                }} />
                            </div>
                            <div className="gallery-item">
                                <img src="/images/gallery/gallery-image-two.jpg" alt="Image 1" className="gallery-image1" onClick={() => {
                                    console.log("Image clicked", "/images/gallery/gallery-image-two.jpg");
                                    setShow(true);
                                    setImg("/images/gallery/gallery-image-two.jpg");
                                }} />
                            </div>
                        </div>

                        <div className={`gallery-transform w-100 ${hideTransform ? 'no-transform' : ''}`}>
                            <div className='row gy-4'>
                                {galleryImages.slice(0, visible).map((ele, index) => (
                                    <div className={`col-lg-6  ${sequence.includes(index) ? "width-image" : "heighted-image"}`} key={index}>
                                        <div className='w-100 img-box' style={{ backgroundImage: `url(${ele})` }} onClick={() => {
                                            console.log("Image clicked", ele);
                                            setShow(true);
                                            setImg(ele);
                                        }}>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={` w-100 ${hideTransform ? 'no-transform' : ''}`}>
                            <div className='row gy-4'>
                                {galleryImagesAfter.slice(0, visible).map((ele, index) => (
                                    <div className={`col-lg-6  ${sequence.includes(index) ? "widthed-image" : "heighted-image"}`} key={index}>
                                        <div className={`w-100 img-box-${!homeSection? "after" : 'after-home'}`} style={{ backgroundImage: `url(${ele})` }} onClick={() => {
                                            console.log("Image clicked", ele);
                                            setShow(true);
                                            setImg(ele);
                                        }}>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>

                            {showLoadMoreButton && (
                                <div className='w-100 text-center'>
                                    <button className='primary-button my-5' onClick={handleLoadMore}>Load more</button>
                                </div>
                            )}
                        </div>
                        </div>
                        </div>
                        
                <Modal
                    status={show}
                    closeModal={closeModal}
                    img={img}
                >
                    <img className='mx-auto modal-popup-image' src={img} alt='gallery-images'></img>
                </Modal>
            </div>
        </div>
    );
}

export default Gallery;
