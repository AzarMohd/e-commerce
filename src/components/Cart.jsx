import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delCart} from './redux/action/index';
import{addCart} from "./redux/action/index"
import { NavLink } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.handleCart);
    console.log(state);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const handleButton =(product)=>{
        return dispatch(addCart(product));
    };

   
    const cartItems = (product) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="400px" width="400px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">{product.qty} X ${product.price}=${product.qty*product.price}</p>
                            <p className='lead fw-bold'>{product.description}</p>
                            <button className='btn btn-outline-dark me-4' onClick={()=>handleClose(product)}>
                                <i className='fa fa-minus' />
                            </button>
                            <button className='btn btn-outline-dark me-4' onClick={()=>handleButton(product)}>
                                <i className='fa fa-plus' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-lg btn-outline-light mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    )
}

export default Cart;