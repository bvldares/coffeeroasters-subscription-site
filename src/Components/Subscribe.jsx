import React,{useState} from "react";
import "../Css/Subscribe.css"


export default function Subscribe(){

    const[mode, setMode] = useState("")
    const modeUpdate = (mode)=> setMode(mode)

    const[type, setType] = useState("")
    const typeUpdate = (type) => setType(type)
    
    const[quantity, setQuantity] = useState("")
    const quantityUpdate = (quantity) => setQuantity(quantity)


    const[grind, setGrind] = useState("")
    const grindUpdate = (grind) => setQuantity(grind)

    const[delivery, setDelivery] = useState("")
    const deliveryUpdate = (delivery) => setQuantity(delivery)






    return (
        <div className="wrapper">
            <section className="sub__hero">
                <h1 className="sub__hero--title">Create a plan</h1>
                <p className="sub__hero--p">
                    Build a subscription plan that best fits your needs. 
                    We offer an assortment of the best artisan coffees 
                    from around the globe delivered fresh to your door.
                </p>
            </section>

            <section className="sub__steps">

                <div className="sub__steps--step">
                    <h2 className="sub__steps--step--number">01</h2>
                    <h3 className="sub__steps--step--title">Pick your coffee</h3>
                    <p className="sub_steps--step--p">
                        Select from our evolving range of artisan coffees. 
                        Our beans are ethically sourced and we pay fair prices for them. 
                        There are new coffees in all profiles every month for you to try out.
                    </p>
                </div>

                <div className="sub__steps--step">
                    <h2 className="sub__steps--step--number">02</h2>
                    <h3 className="sub__steps--step--title">Choose the frequency</h3>
                    <p className="sub_steps--step--p">
                        Customize your order frequency, quantity, even your roast style and grind type. 
                        Pause, skip or cancel your subscription with no commitment through our online portal.
                    </p>
                </div>

                <div className="sub__steps--step">
                    <h2 className="sub__steps--step--number">03</h2>
                    <h3 className="sub__steps--step--title">Receive and enjoy</h3>
                    <p className="sub_steps--step--p">
                        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                        world-class coffees curated to provide a distinct tasting experience.  
                    </p>
                </div>
            </section>

            <section className="sub__order">
                <ul className="order-checklist">
                    <li className="order__list-item">
                        <span>01</span>
                        Preferencies
                    </li>
                    <li className="order__list-item">
                        <span>02</span>
                        Bean Type
                    </li>
                    <li className="order__list-item">
                        <span>03</span>
                        Quantity
                    </li>
                    <li className="order__list-item">
                        <span>04</span>
                        Grind Option
                    </li>
                    <li className="order__list-item">
                        <span>05</span>
                        Deliveries
                    </li>
                </ul>

                <form>
                


                <input type="radio" name="mode" value="capsule" id="capsule" />
                <label htmlFor="capsule" className="answer-label">
                        <div className="form-answer" id="0">
                        <h4 className="form-answer-title">Capsule</h4>
                        <p className="form-answer-p">Compatible with Nespresso systems and similar brewers</p>
                    </div>
                </label>

                </form>
            
                <div className="order-summary">
                    <p className="order-summary-title">Order summary</p>
                    <p className="order-summary-resume">
                    “I drink my coffee using  <span className="order-summary-span">{mode ? mode : " _____ "} </span>, 
                    with a <span className="order-summary-span" >{type ? type : " _____ "}</span>  type of bean. 
                    <span className="order-summary-span">{quantity ? quantity : " ______ "}</span>
                    , sent to me <span className="order-summary-span">{delivery ? delivery : " ______ "}</span>.”
                    </p>
                </div>

            </section>

        </div>
    )
}