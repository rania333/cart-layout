import { Fragment } from "react";
import classes from './Payment.module.scss';
import AdjacentHeader from "../Components/Layout/AdjacentHeader";
import Header from "../Components/Layout/Header";
import {GrDeliver} from 'react-icons/gr';
//payment
import paybal from '../images/payment/paypal-logo-preview.png';
import visa from '../images/payment/Visa_2014_logo_detail.svg.png';
import masterCard from '../images/payment/1200px-Mastercard-logo.svg.png';
import mastero from '../images/payment/1200px-Maestro_2016.svg.png';
import discover from '../images/payment/1280px-Discover_Card_logo.svg.png';
import ideal from '../images/payment/ideal-logo-png-transparent.png';
//payments
import inpost from '../images/delivery/In post.png';
import dpd from '../images/delivery/DPD.png';
import dhl from '../images/delivery/DHL.png' ;
import fedex from '../images/delivery/FedEX.png';
function Payment(props) {
    return ( 
        <Fragment>
            <Header/>
            <AdjacentHeader>Shipping and Payment</AdjacentHeader>
            <div className={classes.div}>
                <div className={classes.first}> 
                    <div className={classes.btns}>
                        <a> LOG IN </a> 
                        <a>SIGN UP</a>
                    </div>
                    <div className={classes.form}> 
                    <p>Shipping information</p> 
                    <form>
                        <div>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="First name"/>
                            <input type="text" placeholder="Last name"/>
                            <input type="text" placeholder="Phone number"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Address"/>
                            <input type="text" placeholder="City"/>
                            <input type="text" placeholder="Postal Code/ZIP"/>
                            <input type="number" placeholder="Poland"/>
                        </div>
                    </form>
                    </div>
                </div>
                <div className={classes.second}> 
                    <div className={classes.payment}> 
                        <p>Payment method</p>
                        <div className={classes.one}>
                            <span> <img src={paybal}/> </span>
                            <span> <img src={visa}/> </span>
                            <span> <img src={masterCard}/> </span>
                        </div>
                        <div className={classes.two}> 
                            <span> <img src={mastero}/> </span>
                            <span> <img src={discover} /> </span>
                            <span> <img src={ideal}/> </span>
                        </div>
                    </div>
                    <div className={classes.delivery}>
                        <p> Delivery method </p>
                        <div className={classes.one}> 
                            <img src={inpost}/> 
                            <img src={dpd}/>
                        </div>
                        <div className={classes.two}> 
                            <img src={dhl}/>
                            <img src={fedex}/>
                        </div>
                    </div>
                    
                </div>
                <div className={classes.third}> 
                    <div className={classes.one}> 
                        <p>Your cart</p>
                        <div className={classes.div}> 
                            {props.products.map(product => (
                                <div >
                                    <img src={product.img} alt="" width="50px" height="50px" />
                                    <p>{product.name} <small>{product.code}</small></p>
                                    <p> ${product.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className={classes.total}> <a> Total Cost &nbsp; &nbsp; &nbsp; 565 </a> </div>
                    </div>
                    <div className={classes.two}> 
                        <span> <GrDeliver/> </span>
                        <span> You are $30,02 away from free shipping!</span>
                    </div>
                </div>
            </div>
            <div className={classes.div2}>
                <div> <a> &larr; &nbsp; &nbsp; &nbsp; Back </a>  </div>
                <div> 
                    <a> Continue shopping </a> 
                    <a> Proceed to payment </a>
                </div>
            </div>
        </Fragment>
    );
}

export default Payment;