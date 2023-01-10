import React,{useState} from "react";
import "../Css/Subscribe.css"


export default function Subscribe(){

    const[mode, setMode] = useState("")
    const handleMode = (event) => setMode(event.target.value)

    const[type, setType] = useState("")
    const handleType = (event) => setType(event.target.value)

    const[quantity, setQuantity] = useState("")
    const handleQuantity = (event) => setQuantity(event.target.value)

    const[grind, setGrind] = useState("")
    const handleGrind = (event) => setGrind(event.target.value)

    const[delivery, setDelivery] = useState("")
    const handleDelivery = (event) => setDelivery(event.target.value)


    const[openModal, setOpenModal] = useState(false)
    
    function openDialog(event){
        event.preventDefault()

        if(mode && type && quantity && grind && delivery){
            document.querySelector(".form-error").style.display = "none"
            document.querySelector("dialog").showModal()

        }else{
            document.querySelector(".form-error").style.display = "block"
        }
    }


    function closeModal(){
        document.querySelector("dialog").close()
    }



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
                    <li className="order__list-item" style={{color: mode ? "#333D4B" : "rgba(0,0,0,0.3)"}}>
                        <span>01</span>
                        Preferencies
                    </li>
                    <li className="order__list-item" style={{color: type ? "#333D4B" : "rgba(0,0,0,0.3)"}}>
                        <span>02</span>
                        Bean Type
                    </li>
                    <li className="order__list-item" style={{color: quantity ? "#333D4B" : "rgba(0,0,0,0.3)"}}>
                        <span>03</span>
                        Quantity
                    </li>
                    <li className="order__list-item" style={{color: grind ? "#333D4B" : "rgba(0,0,0,0.3)"}} >
                        <span>04</span>
                        Grind Option
                    </li>
                    <li className="order__list-item" style={{color: delivery ? "#333D4B" : "rgba(0,0,0,0.3)"}}>
                        <span>05</span>
                        Deliveries
                    </li>
                </ul>

                <form>
                <h3 className="form-question">How do you drink your coffee?</h3>

                <div className="form-answers-wrapper">
                    <input type="radio" name="mode" value="Capsule" id="capsule"  onClick={handleMode}/>
                    <label htmlFor="capsule" className="answer-label">
                        <h4 className="form-answer-title">Capsule</h4>
                        <p className="form-answer-p">Compatible with Nespresso systems and similar brewers</p>
                    </label>

                    <input type="radio" name="mode" value="Filter" id="filter"  onClick={handleMode}/>
                    <label htmlFor="filter" className="answer-label">
                        <h4 className="form-answer-title">Filter</h4>
                        <p className="form-answer-p">For pour over or drip methods like Aeropress, Chemex, and V60</p>
                    </label>

                    <input type="radio" name="mode" value="Espresso" id="espresso"  onClick={handleMode}/>
                    <label htmlFor="espresso" className="answer-label">
                        <h4 className="form-answer-title">Espresso</h4>
                        <p className="form-answer-p">Dense and finely ground beans for an intense, flavorful experience</p>
                    </label>
                </div>
                
                <h3 className="form-question">What type of coffee?</h3> 

                <div className="form-answers-wrapper">
                    <input type="radio" name="type" value="Single origin" id="singleorigin"  onClick={handleType}/>
                    <label htmlFor="singleorigin" className="answer-label">
                        <h4 className="form-answer-title">Single Origin</h4>
                        <p className="form-answer-p">Distinct, high quality coffee from a specific family-owned farm</p>
                    </label>

                    <input type="radio" name="type" value="Decaf" id="decaf"  onClick={handleType}/>
                    <label htmlFor="decaf" className="answer-label">
                        <h4 className="form-answer-title">Decaf</h4>
                        <p className="form-answer-p">Just like regular coffee, except the caffeine has been removed</p>
                    </label>

                    <input type="radio" name="type" value="Blended" id="blended"  onClick={handleType}/>
                    <label htmlFor="blended" className="answer-label">
                        <h4 className="form-answer-title">Blended</h4>
                        <p className="form-answer-p">Combination of two or three dark roasted beans of organic coffees</p>
                    </label>
                </div>


                <h3 className="form-question">How much would you like?</h3>

                <div className="form-answers-wrapper">
                    <input type="radio" name="quantity" value="250" id="250"  onClick={handleQuantity}/>
                    <label htmlFor="250" className="answer-label">
                        <h4 className="form-answer-title">250g</h4>
                        <p className="form-answer-p">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                    </label>

                    <input type="radio" name="quantity" value="500" id="500"  onClick={handleQuantity}/>
                    <label htmlFor="500" className="answer-label">
                        <h4 className="form-answer-title">500g</h4>
                        <p className="form-answer-p">Just like regular coffee, except the caffeine has been removed</p>
                    </label>

                    <input type="radio" name="quantity" value="1000" id="1000"  onClick={handleQuantity}/>
                    <label htmlFor="1000" className="answer-label">
                        <h4 className="form-answer-title">1000g</h4>
                        <p className="form-answer-p">Combination of two or three dark roasted beans of organic coffees</p>
                    </label>
                </div>

                
                <h3 className="form-question">Want us to grind them?</h3>

                <div className="form-answers-wrapper">
                    <input type="radio" name="grind" value="Wholebean" id="wholebean"  onClick={handleGrind}/>
                    <label htmlFor="wholebean" className="answer-label">
                        <h4 className="form-answer-title">Wholebean</h4>
                        <p className="form-answer-p">Best choice if you cherish the full sensory experience</p>
                    </label>

                    <input type="radio" name="grind" value="Filter" id="filtergrind"  onClick={handleGrind}/>
                    <label htmlFor="filtergrind" className="answer-label">
                        <h4 className="form-answer-title">Filter</h4>
                        <p className="form-answer-p">For drip or pour-over coffee methods such as V60 or Aeropress</p>
                    </label>

                    <input type="radio" name="grind" value="Cafetiére" id="cafetiere"  onClick={handleGrind}/>
                    <label htmlFor="cafetiere" className="answer-label">
                        <h4 className="form-answer-title">Cafetiére</h4>
                        <p className="form-answer-p">Course ground beans specially suited for french press coffee</p>
                    </label>
                </div>
                <h3 className="form-question">How often should we deliver?</h3>

                <div className="form-answers-wrapper">
                    <input type="radio" name="shipment" value="Every Week" id="everyWeek"  onClick={handleDelivery}/>
                    <label htmlFor="everyWeek" className="answer-label">
                        <h4 className="form-answer-title">Every week</h4>
                        <p className="form-answer-p">$7.20 per shipment. Includes free first-class shipping.</p>
                    </label>

                    <input type="radio" name="shipment" value="Every 2 Weeks" id="every2weeks"  onClick={handleDelivery}/>
                    <label htmlFor="every2weeks" className="answer-label">
                        <h4 className="form-answer-title">Every 2 weeks</h4>
                        <p className="form-answer-p">$9.60 per shipment. Includes free priority shipping.</p>
                    </label>

                    <input type="radio" name="shipment" value="Every Month" id="everyMonth"  onClick={handleDelivery}/>
                    <label htmlFor="everyMonth" className="answer-label">
                        <h4 className="form-answer-title">Every month</h4>
                        <p className="form-answer-p">$12.00 per shipment. Includes free priority shipping.</p>
                    </label>
                </div>


                <div className="order-summary">
                    <p className="order-summary-title">Order summary</p>
                    <p className="order-summary-resume">
                    “I drink my coffee as  <span className="order-summary-span">{mode ? mode : " _____ "} </span>, 
                    with a <span className="order-summary-span" >{type ? type : " _____ "}</span>  type of bean.  
                    <span className="order-summary-span">{quantity ? " " + quantity + "g " : " ______ "}</span> 
                    ground ala <span className="order-summary-span">{grind ? grind : " _____ "}</span> 
                    , sent to me <span className="order-summary-span">{delivery ? delivery : " ______ "}</span>.”
                    </p>
                </div>

                <div className="button-container">
                    <button className="form-btn" onClick={openDialog}>Create my plan!</button>
                    <p className="form-error">Please, make sure you selected all the required fields before proceeding</p>
                </div>
                
                </form>
            

            
            </section>

            <dialog open={openModal} onClose={closeModal} >
                <h2 className="dialog-title">Order Summary</h2>
                <p className="dialog-summary-resume">
                    “I drink my coffee as  <span className="order-summary-span">{mode ? mode : " _____ "} </span>, 
                    with a <span className="order-summary-span" >{type ? type : " _____ "}</span>  type of bean.  
                    <span className="order-summary-span">{quantity ? " " + quantity + "g " : " ______ "}</span> 
                    ground ala <span className="order-summary-span">{grind ? grind : " _____ "}</span> 
                    , sent to me <span className="order-summary-span">{delivery ? delivery : " ______ "}</span>.”
                </p>
                <button className="dialog-btn" onClick={closeModal}>Checkout</button>

            </dialog>


        </div>
    )
}