import React from "react"
import { Link } from "react-router-dom";
import granEspressoIcon from "../assets/home/desktop/image-gran-espresso.png"
import planaltoIcon from "../assets/home/desktop/image-planalto.png"
import piccolloIcon from "../assets/home/desktop/image-piccollo.png"
import dancheIcon from "../assets/home/desktop/image-danche.png"
import truckIcon from "../assets/home/desktop/icon-truck.svg"
import beanIcon from "../assets/home/desktop/icon-coffee-bean.svg"
import GiftIcon from "../assets/home/desktop/icon-gift.svg"
import "../Css/home.css"

export default function Home(){
    return(
        <section className="home margin-class">
            <section className="home-hero">
                <h1 className="home-hero-title">Great coffee <br /> made simple.</h1>
                <p className="home-hero-description">
                    Start your mornings with the world’s best coffees. 
                    Try our expertly curated artisan coffees from our 
                    best roasters delivered directly to your door, at your schedule.
                </p>
                <Link to="/createplan" className="home-redirect-btn">Create your plan</Link>
            </section>

            <section className="home-collection">

                <div className="home-collection-product">
                    <img src={granEspressoIcon} alt="bag of coffee" className="home-collection-product-img" />
                    <h3 className="home-collection-product-name">Gran Espresso</h3>
                    <p className="home-collection-product-description">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                </div>
                <div className="home-collection-product">
                    <img src={planaltoIcon} alt="bag of coffee" className="home-collection-product-img" />
                    <h3 className="home-collection-product-name">Planalto</h3>
                    <p className="home-collection-product-description">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                </div>
                <div className="home-collection-product">
                    <img src={piccolloIcon} alt="bag of coffee" className="home-collection-product-img" />
                    <h3 className="home-collection-product-name">Piccollo</h3>
                    <p className="home-collection-product-description">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                </div>
                <div className="home-collection-product">
                    <img src={dancheIcon} alt="bag of coffee" className="home-collection-product-img" />
                    <h3 className="home-collection-product-name">Danche</h3>
                    <p className="home-collection-product-description">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </div>
            </section>

            <section className="home-whyus">
                <h2 className="home-whyus-title">Why choose us?</h2>
                <p className="home-whyus-description">
                    A large part of our role is choosing which particular coffees will be featured 
                    in our range. This means working closely with the best coffee growers to give 
                    you a more impactful experience on every level.
                </p>

                <div className="home-whyus-feature-wrapper">

                    <div className="home-whyus-feature">
                        <img src={beanIcon} alt="coffee icon" className="home-whyus-feature-img" />
                        <h4 className="home-whyus-feature-title">Best quality</h4>
                        <p className="home-whyus-feature-description">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                    </div>
                    <div className="home-whyus-feature">
                        <img src={GiftIcon} alt="present icon" className="home-whyus-feature-img" />
                        <h4 className="home-whyus-feature-title">Exclusive benefits</h4>
                        <p className="home-whyus-feature-description">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                    </div>
                    <div className="home-whyus-feature">
                        <img src={truckIcon} alt="courier icon" className="home-whyus-feature-img" />
                        <h4 className="home-whyus-feature-title">Free shipping</h4>
                        <p className="home-whyus-feature-description">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                    </div>
                
                </div>
            </section>

            <section className="home-how">
            <h3 className="home-how-intro">How it works</h3>
                <div className="home-how-steps-wrapper">
                    
               

                    <div className="home-how-step">
                        <h2 className="home-how-step-number">01</h2>
                        <h3 className="home-how-step-title">Pick your coffee</h3>

                        <p className="home-how-step-description">
                            Select from our evolving range of artisan coffees.
                            Our beans are ethically sourced and we pay fair prices for them. 
                            There are new coffees in all profiles every month for you to try out.
                        </p>

                    </div>

                    <div className="home-how-step">
                        <h2 className="home-how-step-number">02</h2>
                        <h3 className="home-how-step-title">Choose the frequency</h3>
                        <p className="home-how-step-description">
                            Customize your order frequency, quantity, even your roast style and grind type. 
                            Pause, skip or cancel your subscription with no commitment through our online portal.
                        </p>
                    </div>

                    <div className="home-how-step">
                        <h2 className="home-how-step-number">03</h2>
                        <h3 className="home-how-step-title">Receive and enjoy!</h3>
                        <p className="home-how-step-description">
                            We ship your package within 48 hours, freshly roasted. 
                            Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
                        </p>
                    </div>

                </div>
                <Link to="/createplan" className="home-redirect-btn">Create your plan</Link>
            </section>
        </section>
    )
}