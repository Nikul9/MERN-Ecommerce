import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { listAllProduct } from "../../../action/product.action"
import { useDispatch, useSelector } from "react-redux";
import AdminProductCard from "../../../components/cards/adminProductCard";

const AllProduct = () => {
  const [ allProduct , setAllProduct ] = useState([])
  const dispatch = useDispatch()
  const { deletedProduct , listedAllproduct } = useSelector((state) => {return state.product })
  useEffect(() => {
    console.log("NIKUL");
    dispatch(listAllProduct())
  },[deletedProduct])
  useEffect(() => {
    if(!listedAllproduct) {
      return
    } 
    setAllProduct(listedAllproduct.data)
  },[listedAllproduct, ])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
        <h4 className="text-center">All Products</h4>
        <br/>
        {/* {JSON.stringify(allProduct)} */}
        <div className="row" >
        {allProduct.map((product)  => (
            <div key={product._id} className="col-md-4 pb-3">
              <AdminProductCard product={product} />
            </div>
          )
        )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default AllProduct;