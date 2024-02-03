import Footer from "../components/Footer";

import aboutusstyles from "../styles/aboutusstyles.module.css"

import ScrollToTop from "../components/ScrollToTop";


const AboutUs = () => {
    return (
        <div className={aboutusstyles.mainContainer}>
            <ScrollToTop />
            <div className={aboutusstyles.mainWrapper}>
                <h1 className={aboutusstyles.header}>
                    About Us
                </h1>

                <section>            
                        <p className={aboutusstyles.firstLetter}>
                            For over a century, the CLAD Homestead has remained within the Davies family, passing through five successive generations.  Originally acquired by Thomas and Elizabeth Davies upon their settlement in Liberia.Thomas, a contractor, built a two-story framed house where he and his wife lived until his death.  Upon Thomas's passing, Elizabeth bequeathed the estate to their sole biological son, affectionately known as C.L. Abiose Davies.
                        </p>
                        <img src="/Images/daviesTree.jpg" alt="" className={aboutusstyles.floteImageLeft} />
                        <p className={aboutusstyles.firstLetter}>
                            This property is where C.L. Abiose Davies and his wife, Catherine O. Davies, raised their five children: Claudia, Thomas, Catherine, Reginal, and Claudius. Subsequently, in 1976, the land was leased to the Eid family (Eagle Electric), who established and grew a thriving building supply business within the city.
                        </p>
                        
                        <p className={aboutusstyles.firstLetter}> 
                            Upon C.L. Abiose Davies' demise, he passed the property on to his five surviving children, with the stipulation that the estate remain within the family lineage.  As the family expanded and the potential heirs (including great-grandchildren) increased, C.L. Abiose Davies' heirs collectively decided to designate their successors and transfer ownership while they were alive, preempting any future confusion. 
                        </p>
                    {/* <div style={{padding: '3rem', margin : "-2rem"}}>
                        <img src="/Images/family.jpg" alt="" height={300} />
                    </div> */}
                </section>
            </div>

            <div className={aboutusstyles.Inspiration}>
                <h1 className={aboutusstyles.header}>
                    The Inspiration
                </h1>
                <section>
                    <p className={aboutusstyles.firstLetter}>
                        In 2018, one of our cousins was traveling t Monrovia to negotiate an expiring lease with Eagle Electric, and as part of his preparation, he sought an Airbnb for his two-week stay in Monrovia. Upon expressing interest in a specific property, Lush Place managed by Naji, he received a response that initially seemed promising:
                        <br />
                        "Hi XXX,
                        The apartment is on 21st Street Sinkor, surrounded by supermarkets, restaurants, and hotels. Sinkor is a lovely residential area in Monrovia. Are you a Liberian/American?"
                    </p>

                    <p className={aboutusstyles.firstLetter}>
                        Excited for his trip back home, he affirmed being a Liberian and added that he had been away abroad for over 37 Years. Shockingly, Naji promptly replied, refusing to lease to Liberians and retracted the property's availability.
                        This discriminatory exchange led to a report filed with Airbnb, prompting an investigation. Naji's attempt to backtrack and offer excuses a day later which did little to mitigate the offense.
                    </p>

                    <p className={aboutusstyles.firstLetter}>
                        This discriminatory incident left a lasting negative impact on our cousin's perception of how Liberians were being treated in Liberia by non-Liberians. Consequently, when we had to decide on the next path for the homestead, he strongly advocated for the heirs to undertake a project: renovating the property for short-term rentals to visitors, regardless of rece, religion, nationality, or sexual orientation.
                    </p>
                </section>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default AboutUs