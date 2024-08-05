import React, { useEffect } from 'react'
import "./About.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='about-section' >
            <h1 className='about-heading' data-aos="fade-down" data-aos-duration="1500" >ABOUT</h1>
            <br /><br />
            <div className='about-desc' >
                <p className='about-desc-heading' data-aos="fade-right" data-aos-duration="1500" >Welcome To Hoor Studio</p>
                <br />
                <p className='about-paragraph' data-aos="fade-up" data-aos-duration="1500" >Hoor Studio Textile Mills, the parent concern of Hoor Studio started back in 2022 under the leadership of its founder Mr. Talha Rizwan, a first-generation entrepreneur. Stretching a span of more than 2 years, Hoor Studio Textile Mills continues its bequest to cater the modern textile solutions globally.
                    <br /><br />
                    Hoor Studio emerged as a fashion retail brand in 2022 with the inauguration of its very first outlet, starting the journey with its enticing unstitched category. Over the years, Hoor Studio has stood along with the fashion dynamics and trends and further expanded by tapping into various other categories such as Ready-to-Wear line for Women, Fabrics and Ready-to-Wear for Men, Home Textiles, Kids range, MAK, Accessories and Footwear.
                    <br /><br />
                    With a chain of more than 50 retail outlets all over Pakistan, Hoor Studio has infiltrated its presence in the fashion apparel sector as one of the leading brands in Pakistan. We weave fashionable lifestyle for contemporary individuals through excellent customer experience built around quality, eclecticism and innovation..
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1500" >For Information:</p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1500" >Call: <span className='about-paragraph'>+92 3262917574 /  +92 3224073436</span></p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1500" >Email: <span className='about-paragraph'>info@hoorstudio.shop</span> </p>

            </div>
        </div>
    )
}

export default About