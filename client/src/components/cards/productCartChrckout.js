import React , { useEffect, useState }from "react";
import ModalImage from "react-modal-image";

import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { updateCart , addToCart , deleteAddToCart , getAddToCart } from "../../action/addTocart.action"
 

const ProductCardInCheckout = ({ p }) => {
  const { saveCart , updatedCart } = useSelector((state) =>  state.addToCart )
  useEffect(() => {
    if(!updatedCart) {
      return
    }
    dispatch(getAddToCart())
  },[updatedCart])
  let dispatch = useDispatch();

  const [ valueCount , setCount ] = useState(p.count)
  const handleQuantityChange = (data , e) => {
    e.preventDefault()
    console.log(data);
     console.log("available quantity", p.quantity);
    let count = data < 1 ? 1 : data;

    if (count > p.quantity) {
      //toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      let getNewCart = JSON.parse(localStorage.getItem("cart"))
      console.log("getNewCartgetNewCartgetNewCartgetNewCart");
      console.log("getNewCartgetNewCartgetNewCartgetNewCart");
      console.log("getNewCartgetNewCartgetNewCartgetNewCart");
      console.log("getNewCartgetNewCartgetNewCartgetNewCart");
      console.log("getNewCartgetNewCartgetNewCartgetNewCart");
      console.log(getNewCart);
      dispatch({
        type: "ADD_TO_CART_COUNT",
        payload: cart,
      });
      dispatch(updateCart(p._id , {count : data}))
    // dispatch(getAddToCart())

      
    }
  };

   const handleRemove = (e) => {
        e.preventDefault()
        console.log(p._id, "to remove");
        let cart = [];

       if (typeof window !== "undefined") {
         if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(deleteAddToCart(p._id))
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
      dispatch(getAddToCart())
    }
   };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto" }}>
            
              <ModalImage small={p.images[0].url} large={p.images[0].url}/>
            
          </div>
        </td>
        <td>{p.title}</td>
        <td>${p.price}</td>
        <td>{p.brand}</td>
        
        <td className="text-center">
          <form onSubmit={() => handleQuantityChange(valueCount, window.event)}>
          <input
            type="number"
            className="form-control"
            value={valueCount}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit">Update</button>
          </form>
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <CloseOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ProductCardInCheckout;
