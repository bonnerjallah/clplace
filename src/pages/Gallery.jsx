import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCouch, faFan, faKitchenSet, faTv, faUtensils, faWifi, } from "@fortawesome/free-solid-svg-icons"
import gallerystyles from "../styles/gallerystyles.module.css"

import ScrollToTop from '../components/ScrollToTop'
import Footer from "../components/Footer"


import TheAbiose from '../components/TheAbiose'
import TheOmo from '../components/TheOmo'



const Gallery = () => {

    const [showTheAyo, setShowTheAyo] = useState(true)
    
    const toggleComponent = () => {
        setShowTheAyo(!showTheAyo)
    }

    return (
        <div className={gallerystyles.theMainGalleryPageContainer}>

            <ScrollToTop />

            <div className={gallerystyles.componentSelection}>
                <div onClick={toggleComponent} style={{cursor: "pointer", backgroundColor: showTheAyo ? '#ad9551' : "white"}}>The Ayo</div>
                <div className={gallerystyles.verticalLineBrake}>
                    
                </div>
                <div onClick={toggleComponent} style={{ cursor: "pointer", backgroundColor: !showTheAyo ? '#64583e' : '#fff'}}>The Modu</div>

            </div>

            <div style={{border: "1px solid black", width: "80%", height:"auto", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                {showTheAyo ? <TheAbiose /> : <TheOmo/>}
            </div>

            <div className={gallerystyles.buttonWrapper}>
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

export default Gallery