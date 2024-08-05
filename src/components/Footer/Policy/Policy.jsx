import React, { useEffect } from 'react'
import "./Policy.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Policy() {


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

    return (
        <div className='policy-section' >
            <h1 className='policy-heading' data-aos="fade-down" data-aos-duration="1500" >PRIVACY & POLICIES</h1>
            <br /><br />
            <div className='policy-desc' >
                {/* <p className='policy-desc-heading' >Welcome To Hoor Studio</p> */}
                <br />
                <p className='policy-paragraph' >
                    <p data-aos="fade-up" data-aos-duration="1500" > Hoor Studio, the parent concern of Hoor Studio started back in 1986 under the leadership of its founder Mr. Fawad Anwer, a first-generation entrepreneur. Stretching a span of more than 35 years, Hoor Studio Textile Mills continues its bequest to cater the modern textile solutions globally.
                        Hoor Studio ensures that the privacy of its customers is protected when utilizing our services. We take all measures to protect your personal information. Your use of our website entails that you have agreed to abide by our Privacy Policy and Terms.</p>
                    <br />
                    <p data-aos="fade-up" data-aos-duration="1500" > Whether you create an account with us or shop as a guest, the information we collect constitutes of your name, address, contact number, email address, bank details and/or credit/debit card information. This information will mainly be used for the following purposes:</p>
                    <br />
                    <li data-aos="fade-up" data-aos-duration="1500" >To fulfill, process and ship your orders</li>
                    <li data-aos="fade-up" data-aos-duration="1500" >To contact you for customer service and support</li>
                    <li data-aos="fade-up" data-aos-duration="1500" >Sending you information and offers for marketing </li>
                    <li data-aos="fade-up" data-aos-duration="1500" >To learn about your browsing and shopping experience at hoorstudio.shop</li>
                    <br />
                    <p>
                        We guarantee that no information will be revealed to any external entities for any purpose and your information will solely be used by Hoor Studio.</p>
                    <br />
                    <span className='bold' >Third Parties</span>
                    <br />
                    <p>
                        Hoor Studio may share your personal information with third parties or affiliates who perform services on our behalf or process authorized transactions. The personal information we share with these companies to perform services on our behalf is protected via contractual agreements and cannot be shared. We do not sell your information to any third party nor do we disclose your personal information to unaffiliated third parties.
                    </p>
                    <br />
                    <span className='bold' >Cookies</span>
                    <br />
                    <p>
                        Hoor Studio uses cookies to analyze your activity and behavior on our website in order to improve and simplify your visit. Most browsers automatically accept cookies, you may change these settings if you wish to do so. Through this, we will be able to track the frequency of your visits to our website, contents of your shopping cart and purchase history in order to give you a better, an exclusive and a personalized shopping experience.
                    </p>
                    <br />
                    <span className='bold' >Your Rights</span>
                    <br />
                    <p>
                        You have the right to request for your personal data and information that we hold on you. If your data is incorrect, incomplete or irrelevant, you can ask to have the information corrected or removed.
                    </p>
                    <br />
                    <p>
                        All our terms and conditions on this website are governed by the laws of the Islamic Republic of Pakistan and you agree that the courts of Karachi will have exclusive jurisdiction in any dispute that you have with us.
                    </p>
                    <br />
                </p>
                <br />
            </div>
        </div>)
}

export default Policy