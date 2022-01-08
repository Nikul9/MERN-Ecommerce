import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addAddress, applyCoupon } from "../action/user.action"
import { SaveFilled } from "@ant-design/icons";
import { APPLY_COUPON_USER } from "../action/reducer.types";
import { useHistory } from "react-router";
const Checkout = ({ history }) => {
    const [ products, setProducts] = useState([]);
    const [ total , setTotal ] = useState(0);
    const [ address, setAddress] = useState("");
    const [ addressSaved, setAddressSaved] = useState(false);
    const [ coupon, setCoupon] = useState("");
  // discount price
  
  const histroy = useHistory()
    
    const [discountError, setDiscountError] = useState("");
    const { getUser , applyedCoupon } = useSelector((state) =>{ return state.userReduser})
    const { apiErrorData } = useSelector((state) =>  {
        return state.apiReduser
    })
    const [totalAfterDiscount , setTotalAfterDiscount] = useState(0);
    const { saveCart } = useSelector((state) => { return state.addToCart });
    const dispatch = useDispatch();
    const saveAddressToDb = () => {
    console.log(address);
    dispatch(addAddress({address}))
  };

const applyDiscountCoupon = () => {
    console.log("send coupon to backend", coupon);
    dispatch(applyCoupon({coupon}))
  };    
  useEffect(() => {
   // dispatch(getUser())
   setTotalAfterDiscount(0)
  },[address])
  useEffect(() => {
      
        if(!getUser) {
            return
    }
    if(getUser.data.address){
        setAddress(getUser.data.address)
    }
  },[getUser])
  
  useEffect(() => {
    if(!apiErrorData) {
        setTotalAfterDiscount(0)
        return
    }
    // setTotalAfterDiscount(0)
    setDiscountError("invalid Coupon")
  },[apiErrorData])
  useEffect(() => {
    if(!saveCart){
        return
    }
    setProducts(saveCart.data[0].products)
    setTotal(saveCart.data[0].cartTotal)
  },[saveCart])
  useEffect(() => {
    if(!applyedCoupon) {

        return
    }
    setTotalAfterDiscount(applyedCoupon.data.totalAfterDiscount)
  },[applyedCoupon])
  const showAddress = () => (
    <>
      <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
        Save
      </button>
    </>
  );

  const showProductSummary = () =>
    products.map((p, i) => (
      <div key={i}>
        <p>
          {p.product.title} x {p.count} ={" "}
          {p.product.price * p.count}
        </p>
      </div>
    ));
    
    const showApplyCoupon = () => (
        <>
        <input
            onChange={(e) => {
            setCoupon(e.target.value);
            setDiscountError("");
        }}
        value={coupon}
        type="text"
        className="form-control"
      />
      <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
        Apply
      </button>
    </>
  );

    const createCashOrder = () => {
    
    };

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        {showAddress()}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>}
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>Products {products.length} </p>
        <hr />
        {showProductSummary()}
        <hr />
        <p>Cart Total: {total}</p>

        {totalAfterDiscount > 0 && 
                (
                    <p className="bg-success p-2">
                        Discount Applied: Total Payable: ${totalAfterDiscount}
                    </p>
                )
        }

        <div className="row">
          <div className="col-md-6">
            {/* {COD ? ( */}
              {/* <button
                className="btn btn-primary"
                disabled={!addressSaved || !products.length}
               // onClick={createCashOrder}
              >
                Place Order
              </button> */}
            {/* ) : ( */}
              <button
                className="btn btn-primary"
              //  disabled={!addressSaved || !products.length}
                onClick={() => history.push("/payment")}
              >
                Place Order
              </button>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
