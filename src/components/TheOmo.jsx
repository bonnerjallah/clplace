import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCouch, faFan, faKitchenSet, faTv, faUtensils, faWifi, } from "@fortawesome/free-solid-svg-icons"
import gallerystyles from "../styles/gallerystyles.module.css"
import omostyle from "../styles/omostyle.module.css"


import Pricing from './Pricing'

import OmoMasterBedRoomModal from "./OmoMasterBedRoomModal"
import OmoBedRoomTwoModal from "./OmoBedRoomTwoModal"
import OmoBathRoom from "./OmoBathRoom"
import OmoDiningRoomModal from "./OmoDiningRoomModal"
import OmoKitchenModal from "./OmoKitchenModal"
import OmoDenModal from "./OmoDenModal"
import OmoHallViewModal from "./OmoHallViewModal"


const TheOmo = () => {

    const [omoMasterBedRoom, setOmoMasterBedRoom] = useState(false)
    const [BedRoomTwo, setBedRoomTwo] = useState(false)
    const [bathRoom, setBathRoom] = useState(false)
    const [DiningRoom, setDiningRoom] = useState(false)
    const [kitchen, setKitchen] = useState(false)
    const [den, setDen] = useState(false)
    const [hallView, setHallView] = useState(false)

    const handleMasterBedroomModal = () => {
        setOmoMasterBedRoom(true)
    }

    const handleBedRoomTwoModal = () => {
        setBedRoomTwo(true)
    }

    const handleOmoBathRoomModal = () => {
        setBathRoom(true)
    }

    const handleOmoDiningRoom = () => {
        setDiningRoom(true)
    }

    const handleOmoKitchenModal = () => {
        setKitchen(true)
    }

    const handleOmoDenModal = () => {
        setDen(true)
    }

    const handleHallViewModal = () => {
        setHallView(true)
    }




    return (
        <div className={omostyle.theMainContainer}>
            <div className={omostyle.imageWrapperHeader}>
                <h3>The Modu</h3>
            </div>
            
            <div className={omostyle.omoGalleryContainer}>
                <div className={omostyle.imageWrapper}>
                    <span style={{"--i": 1}}><img src="Images/house/PHOTO.jpg" alt="" onClick={handleMasterBedroomModal} /></span>
                    <span style={{"--i": 2}}><img src="/Images/house/PHOTO-2.jpg" alt="" onClick={handleBedRoomTwoModal} /></span>
                    <span style={{"--i": 3}}><img src="Images/house/PHOTO-5.jpg" alt="" onClick={handleOmoBathRoomModal} /></span>
                    <span style={{"--i": 4}}><img src="Images/house/PHOTO-6.jpg" alt="" onClick={handleOmoDiningRoom} /></span>
                    <span style={{"--i": 5}}><img src="Images/house/PHOTO-9.jpg" alt="" onClick={handleOmoKitchenModal} /></span>
                    <span style={{"--i": 6}}><img src="Images/house/PHOTO-10.jpg" alt="" onClick={handleOmoDenModal} /></span>
                    <span style={{"--i": 7}}><img src="Images/house/PHOTO-11.jpg" alt="" onClick={handleHallViewModal} /></span>
                    <span style={{"--i": 8}}><img src="Images/house/PHOTO-7.jpg" alt="" onClick={handleHallViewModal} /></span>
                </div>
            </div>

            {omoMasterBedRoom && (<OmoMasterBedRoomModal closeOmoMasterBedRoomModal={setOmoMasterBedRoom} />)}
            {BedRoomTwo && (<OmoBedRoomTwoModal closeOmoBedRoomTwoModal={setBedRoomTwo}/>)}
            {bathRoom && (<OmoBathRoom closeOmoBathRoomModal={setBathRoom} />)}
            {DiningRoom && (<OmoDiningRoomModal closeOmoDiningRoomModal={setDiningRoom}/>)}
            {kitchen && (<OmoKitchenModal closeOmoKitchenModal={setKitchen}/>)}
            {den && (<OmoDenModal closeOmoDen={setDen} />)}
            {hallView && (<OmoHallViewModal  closeOmoHallViewModal={setHallView}/>)}

            <div className={gallerystyles.discriptionContainer} >
                <div className={gallerystyles.disWrapper}>
                    <h2>The Modu</h2>
                    <div>
                        <details style={{color: "#ad9551", cursor: "pointer", fontSize: "1.3rem"}}>
                            <ul style={{color: "black"}}>
                                <li>Master Bedroom: Queen Bed</li>
                                <li>Bedroom #2: Two full size beds </li>
                                <li>Bathroom</li>
                                <li>Dining Room</li>
                                <li>Den</li>
                                <li>Full Kitchen</li>
                                <li>Hall view</li>
                            </ul>
                        </details>
                    </div>

                    <div className={gallerystyles.offerWrapper}>
                        <p>What this place offers</p>
                        <div className={gallerystyles.iconWrapper}>
                            <div>
                                <p><span><FontAwesomeIcon icon={faWifi}  /></span> Wifi</p>
                                <p><span><FontAwesomeIcon icon={faTv} /></span> Flat Screen</p>
                                <p><span><FontAwesomeIcon icon={faKitchenSet} /></span> Cookware/Dishes</p>
                                <p><span><FontAwesomeIcon icon={faUtensils} /></span> Utensils</p>
                            </div>
                            <div>
                                <p><span><FontAwesomeIcon icon={faCouch} /></span> Furnished & Decorated</p>
                                <p><span><FontAwesomeIcon icon={faFan} /></span> Air conditioning</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={gallerystyles.priceComponentWrapper}>
                    <Pricing />
                </div>
            </div>

        </div>
    )
}

export default TheOmo