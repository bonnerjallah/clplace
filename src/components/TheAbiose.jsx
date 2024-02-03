import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCouch, faFan, faKitchenSet, faTv, faUtensils, faWifi, } from "@fortawesome/free-solid-svg-icons"
import gallerystyles from "../styles/gallerystyles.module.css"


//Modals components
import HouseModal from './HouseModal'
import BedRoomModal from './BedRoomModal'
import KitchenModal from './KitchenModal'
import BathRoomModal from "./BathRoomModal"
import LivingRoomModal from './LivingRoomModal'
import Pricing from './Pricing'



const TheAbiose = () => {

    //Modals
    const [openHouseModal, setOpenHouseModal] = useState(false)
    const [openBedRoomModal, setOpenBedRoomModal] = useState(false)
    const [openKetchenModal, setOpenKitchenModal] = useState(false)
    const [openBathRoomModal, setOpenBathRoomModal] = useState(false)
    const [openLivingRoomModal, setOpenLivingRoomModal] = useState(false)

    const handleOpenHouseModal = () => {
        setOpenHouseModal(true)
    }

    const handleOpenBedRoomModal = () => {
        setOpenBedRoomModal(true)
    }

    const handleOpenKitchenModal = () => {
        setOpenKitchenModal(true)
    }

    const handleOpenBathRoomModal = () => {
        setOpenBathRoomModal(true)
    }

    const handleLivingRoomModal = () => {
        setOpenLivingRoomModal(true)
    }

    
    return (
        
        <div className={gallerystyles.theMianContainer}>
            <div>
                <h2 className={gallerystyles.header} >
                    The Ayo
                </h2>
            </div>

            <div className={gallerystyles.mainContainer}>    
                <div className={gallerystyles.imageWrapper}>
                    <span style={{"--i": 1}} onClick={handleOpenHouseModal}>
                        <img src="/Images/house/House1.jpg" alt="" />
                    </span>
                    <span style={{"--i": 2}} onClick={handleOpenBedRoomModal}> 
                        <img src="/Images/house/PHOTO-9.jpg" alt=""  /> 
                    </span>
                    <span style={{"--i": 3}} onClick={handleOpenKitchenModal}>
                        <img src="/Images/house/PHOTO-10.jpg" alt="" />
                    </span>
                    <span style={{"--i": 4}} onClick={handleOpenBathRoomModal}>
                        <img src="/Images/house/PHOTO-11.jpg" alt=""  />
                    </span>
                    <span style={{"--i": 5}} onClick={handleLivingRoomModal}>
                        <img src="/Images/house/PHOTO-5.jpg" alt="" />
                    </span>
                    <span style={{"--i": 6}} onClick={handleLivingRoomModal}>
                        <img src="/Images/house/PHOTO-5.jpg" alt="" />
                    </span>
                    <span style={{"--i": 7}} onClick={handleLivingRoomModal}>
                        <img src="/Images/house/PHOTO-6.jpg" alt="" />
                    </span>
                    <span style={{"--i": 8}} onClick={handleLivingRoomModal}>
                        <img src="/Images/house/PHOTO-7.jpg" alt="" />
                    </span>
                </div>
            </div>
            
            {openHouseModal && (<HouseModal closeHouseModal={setOpenHouseModal} />)}
            {openBedRoomModal && (<BedRoomModal closeBedRoomModal={setOpenBedRoomModal}/>)}
            {openKetchenModal && (<KitchenModal closeKitchenModal={setOpenKitchenModal} />)}
            {openBathRoomModal && (<BathRoomModal closeBathRoomModal={setOpenBathRoomModal} />)}
            {openLivingRoomModal && <LivingRoomModal closeLivingRoomModal={setOpenLivingRoomModal} />}

            <div className={gallerystyles.discriptionContainer} >
                <div className={gallerystyles.disWrapper}>
                    <h2>The Ayo</h2>
                    <div>
                        <details style={{color: "#ad9551", cursor:'pointer', fontSize: "1.3rem"}}>
                            <ul style={{color: "black"}}>
                                <li>Master Bedroom: Queen Bed</li>
                                <li>Bathroom #1: In the Master Bedroom</li>
                                <li>Bedroom #2: Two full size beds </li>
                                <li>Bathroom #2:</li>
                                <li>Dining Room</li>
                                <li>Den</li>
                                <li>Full Kitchen</li>
                                <li>Randall Street view</li>
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

export default TheAbiose