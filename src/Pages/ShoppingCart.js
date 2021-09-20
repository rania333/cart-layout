import react, { Fragment } from 'react';
import AdjacentHeader from '../Components/Layout/AdjacentHeader';
import Header from '../Components/Layout/Header';
import classes from './ShoppingCart.module.scss';
import {RiSendPlaneFill} from 'react-icons/all';
function ShoppingCart(props) {
    const products = props.products;
    return ( 
        <div className={classes.cart}>
            <Header/>
            <AdjacentHeader>Shopping Cart</AdjacentHeader>
            <table className={classes.table}>
                <thead> 
                <tr>
                    <td>Product</td>
                    <td>Color</td>
                    <td>Size</td>
                    <td>Amount</td>
                    <td>Price</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr>
                            <td className={classes.td}>
                                <img src={product.img} alt="" width="50px" height="50px" />
                                <p>{product.name} <small>{product.code}</small></p>
                            </td>
                            <td>{product.color}</td>
                            <td>{product.size}</td>
                            <td><div>
                                    <span> - </span>
                                    <span> {product.Amount} </span>
                                    <span> + </span>
                                </div>
                            </td>
                            <td>${product.price}</td>
                            <td>x</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className={classes.div}>
                <div> <a> &larr; &nbsp; &nbsp; &nbsp; Continue Shopping </a>  </div>
                <div><input type="text" placeholder="Promo Code" /> <span><RiSendPlaneFill/></span> </div>
                <div>
                    <span>Total Cost &nbsp; &nbsp; &nbsp;</span>
                    <span>$4545</span>
                </div>
                <div><a> Checkout </a> </div>
            </div>
        </div>
    );
}

export default ShoppingCart;