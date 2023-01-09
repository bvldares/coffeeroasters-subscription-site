import React from "react";
import "../Css/About.css"

import canadaIcon from "../assets/about/desktop/illustration-canada.svg"
import ukIcon from "../assets/about/desktop/illustration-uk.svg"
import AustraliaIcon from "../assets/about/desktop/illustration-australia.svg"


import commitImg from  "../assets/about/mobile/image-commitment.jpg"
import qualityImg from  "../assets/about/mobile/image-quality.jpg"


export default function About(){
    return(
       <div className="wrapper">
        <main className="about">
            <section className="about__hero">
                <h1 className="about__hero--title">About us</h1>
                <p className="about-hero--paragraph">
                    Coffeeroasters began its journey of exotic discovery in 1999, 
                    highlighting stories of coffee from around the world. 
                    We have since been dedicated to bring the perfect cup
                     - from bean to brew - in every shipment.
                </p>
            </section>


            <section className="about__commit">
                <img src={commitImg} alt="" className="about__commit--img" />
                <div className="about__commit--wrapper">
                    <h2 className="about__commit--title">Our Commitment</h2>
                    <p className="about__commit--paragraph">
                        We’re built on a simple mission and a commitment to doing good along the way. 
                        We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. 
                        To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places.
                        We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks.
                        We also offer training, support farm community initiatives, and invest in coffee plant science. 
                        Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
                    </p>
                </div>
            </section>

            <section className="about__quality-wrapper">
                <div className="about__quality">
                    <img className="about__quality--img" src={qualityImg} alt="coffee on wood table" />
                    <div className="about__quality--intro">
                        <h2 className="about__quality--intro-title">Uncompromising quality</h2>
                        <p className="about__quality--intro-paragraph">
                            Although we work with growers who pay close attention to all stages of harvest and processing,
                            we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. 
                            Every bag of coffee is tagged with a roast date and batch number.
                            Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </p>
                    </div>
                </div>
            </section>
            
            

            <section className="about__hq">
                <h3 className="about__hq--title">Our headquartes</h3>

                <div className="about__hq--office">
                    <img src={canadaIcon} alt="canada icon" className="about__hq--img" />
                    <h3 className="about__hq--location">Canada</h3>
                    <p className="about__hq-contactinfo">
                    1528  Eglinton Avenue <br />
                    Toronto <br />
                    Ontario M4P 1A6 <br />
                    +1 416 485 2997
                    </p>
                </div>

                <div className="about__hq--office">
                    <img src={ukIcon} alt="united kingdom icon" className="about__hq--img" />
                    <h3 className="about__hq--location">United Kingdom</h3>
                    <p className="about__hq-contactinfo">
                    68  Asfordby Rd <br />
                    Alcaston <br />
                    SY6 1YA <br />
                    +44 1241 918425
                    </p>
                </div>


                <div className="about__hq--office">
                    <img src={AustraliaIcon} alt="australia icon" className="about__hq--img" />
                    <h3 className="about__hq--location">Australia</h3>
                    <p className="about__hq-contactinfo">
                        36 Swanston Street <br />
                        Kewell <br />
                        Victoria <br />
                        +61 4 9928 3629
                    </p>
                </div>
            </section>

        </main>
       </div>
    )
}