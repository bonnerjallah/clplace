import { NavLink } from "react-router-dom"

import homestyles from '../styles/homestyles.module.css'
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";




const Home = () => {


    return (
        <div className={homestyles.mainContainer} >
            <ScrollToTop />
            <div className={homestyles.heroSectionWrapper}  >
                <img src="/Images/house/House1.jpg" alt=""  className={homestyles.houseImage}  />
            </div>


            <main>
                <div>
                    <h2 className={homestyles.header}>
                        Welcome !!! 
                    </h2>
                </div>
                <p className={[homestyles.welcome, homestyles.paragraphOne].join(' ')}>
                    Welcome to CLAD’s place! These two modern third floor apartments (The Ayo and The Modu) are fully furnished and nestled in the center of Monrovia. CLADs is just minutes away from the beach, the American Embassy, grocery stores, fun restaurants, and other attractions.  Fully equipped kitchen (with a full-size Refrigerator, Gas stove, Blender, Microwave, Toaster, and Rice Cooker) to make you feel right at home.
                </p> 

                <p className={[homestyles.welcome, homestyles.paragraphTwo].join(' ')}>
                    Your stay at CLADs will be a luxurious one.  We look forward to welcoming you to this city retreat and hope that you experience a little bit of luxury and a good dose of fun and relaxation for the body, mind, and soul!
                </p>

            </main>

            <div className={homestyles.gallaryContainer}>
                <div className={homestyles.galleryHeaderWrapper}>
                    <h2 style={{fontSize: "1.7rem"}} className={homestyles.header}>
                        Highlights 
                    </h2>
                </div>
                <div className={homestyles.galleryWrapper}>
                    <div className={homestyles.abiose}>
                        <div className={homestyles.gallerySubHeader}>
                            <h3> Apartment #1: <strong>The Ayo</strong> two bedrooms two baths</h3>
                        </div>
                        <div className={homestyles.abiosePicWrapper}>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Bed Room</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Kitchen</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Living Room</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Bath Room</h3></div>
                            </NavLink>
                        </div>
                    </div>

                    <div className={homestyles.verticalLine}></div>

                    <div className={homestyles.theOmo}>
                        <div className={homestyles.gallerySubHeader}>
                            <h3>Apartment #2: <strong>The Modu</strong> Two bedrooms one bath</h3>
                        </div>
                        <div className={homestyles.abiosePicWrapper}>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Bed Room</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Kitchen</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Living Room</h3></div>
                            </NavLink>
                            <NavLink to="/Gallery">
                                <div className={homestyles.imgbox}><h3>Bath Room</h3></div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <hr className={homestyles.linebrk}/>

            <div className={homestyles.ourServicesWrapper}>
                <h2 className={homestyles.header}>
                    Our Services
                </h2>
                <p className={[homestyles.welcome, homestyles.sevParagraphOne].join(' ')}>
                We provide modern, clean and safe short term rentals for business professionals and vacationers alike. No matter how you identify, our top-notch skills ensure you get the best experience possible. It’s what we love to do.
                </p>

                <p className={[homestyles.welcome, homestyles.svcParagraphTwo].join(' ')}>
                If you have questions about availabilities, or would like to make any special requests, trust us to cater to your needs to the best of our ability. We will make sure you feel confident and satisfied every step of the way.  
                </p>
            </div>



            <div className={homestyles.buttonWrapper}>

                <NavLink to="/ContactUs">
                    <button>Contact us</button>
                </NavLink>
                
                <NavLink>
                    <button>Book A Stay</button>
                </NavLink>
                
            </div>
            

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home