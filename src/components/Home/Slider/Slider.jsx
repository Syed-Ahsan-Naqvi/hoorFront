
import React, { useState, useEffect, useContext } from 'react';
import './Slider.scss';
import { Context } from '../../../utils/context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
    const { sliderImages } = useContext(Context);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile] = useState(window.innerWidth <= 768); // Adjust breakpoint as needed

    useEffect(() => {
        // const checkScreenSize = () => {
        //     setIsMobile(window.innerWidth <= 768);
        // };

        const autoSlide = setInterval(() => {
            if (getCurrentSlider()?.length > 0) {
                setCurrentSlide((prev) => (prev + 1) % getCurrentSlider().length);
            }
        }, 4000);

        // Clear interval on component unmount
        return () => clearInterval(autoSlide);

    }, []); // Empty dependency array to run effect only once on mount

    const getCurrentSlider = () => {
        if (isMobile) {
            return (
                sliderImages?.data[0]?.attributes.smallSlider?.data || []
            );
        } else {
            return (
                sliderImages?.data[0]?.attributes.bigSlider?.data || []
            );
        }
    };


    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,  // Set to false to allow animations to re-trigger on scroll
            mirror: true  // Set to true to enable animation while scrolling past the element
        });

        // Re-initialize AOS on scroll
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % getCurrentSlider().length);
        }, 4000);

        return () => clearInterval(autoSlide);
    }, [currentSlide, getCurrentSlider]);

    return (
        <div className="slider"  >
            <div className="slider-wrapper">
                {getCurrentSlider().map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${process.env.REACT_APP_DEV_URL + slide.attributes.url})` }}
                    ></div>
                ))}
            </div>
            <div className="thumbnails" >
                {getCurrentSlider().map((slide, index) => (
                    <img
                        key={slide.id}
                        src={process.env.REACT_APP_DEV_URL + slide.attributes.url}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
