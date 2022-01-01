import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAddToCart } from "../action/addTocart.action";
import ProductCardInCheckout from "../components/cards/productCartChrckout";
import { GlobalContext } from "../Context/Globlecontext";
// import { } from "../action/"

const Cart = ({ history }) => {
    const { newCart , saveCart } = useSelector((state) => { return state.addToCart });
    const [ cart , setCart ] = useState([])
    const { isLogin } =  useContext(GlobalContext)
    const localCart = JSON.parse(localStorage.getItem("cart"))
    const dispatch = useDispatch();  
    
    useEffect(() => {
        dispatch(getAddToCart())
    },[])
    useEffect(() => {
        if(!isLogin) {
          if(localCart) {
            setCart(localCart)
          }
            return
        }
        if (!saveCart) {
            return
        }
        console.log(saveCart.data[0].products);
        localStorage.removeItem("cart")
        let NewData = []
        saveCart.data[0].products.map((result) => {
            NewData.push({ 
              ...result.product,
              count : result.count
            })
        })
        //console.log("****************************************NewData**************************");
        //console.log(NewData);
        localStorage.setItem("cart",JSON.stringify(NewData))
         setCart(NewData)
        dispatch({
          type: "ADD_TO_CART",
          payload: NewData,
        });
    },[saveCart ])
    // useEffect(() => {
      
    // }, [cart])
  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showCartItems = () => {
    if(cart[0]) {
      return(
        <table className="table table-bordered">
          <thead className="thead-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Count</th>
            <th scope="col">Shipping</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>

          {cart.map((p) => (
              <ProductCardInCheckout key={p._id} p={p} />
          ))}
        </table>
      )
    }
  };

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          {cart[0] &&
                  <h4>Cart / {cart.length} Product</h4>
          }

          {!cart[0] ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        {cart[0] &&
        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>${getTotal()}</b>
          <hr />
          {isLogin ? (
            <>
              <Link to="/cart/checkout">
              <button
              //  onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
                Proceed to Checkout
              </button>
              </Link>
              <br />
              <button
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
                Pay Cash on Delivery
              </button>
            </>
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div>
      }
      </div>
    </div>
  );
};

export default Cart;
