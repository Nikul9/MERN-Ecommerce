import React, { useContext, useEffect, useState } from "react"
import { oneProduct } from "../action/product.action"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SingleProduct from "../components/cards/SingleProduct";
import "antd/dist/antd.css"
import { productStar , reletedProduct } from "../action/product.action"
import {GlobalContext} from "../Context/Globlecontext"
import ProductCard from "../components/cards/productCard";

const Product = ({ match }) => {
    const { userData } = useContext(GlobalContext)
    const [ star , setStar ] = useState(0);
    const [ productId , setProductId ] = useState("")
    const [productOne , setProduct] = useState({})
    const [ reletedPro , setReletedProduct ] = useState([])
    const { getReletedProduct , getoneProduct } = useSelector((state) => {return state.product})
    const { slug } = useParams()
    const dispatch = useDispatch()
    const onStarClick = (newRating, name) => {
        setStar(newRating);
        console.table(newRating, name);
        dispatch(productStar( {star : newRating } , {productId} ))
    };
    // const { slug } = match.params;
    
    useEffect(() => {
        dispatch(oneProduct({slug}))
    },[slug])
    
    useEffect(() => {
        
        if(!getoneProduct) {
            return 
        }
        dispatch(reletedProduct({productId : getoneProduct.data._id  }))
        setProductId(getoneProduct.data._id)
        setProduct(getoneProduct.data)
    },[getoneProduct])
    useEffect(() => {
        if(Object.keys(productOne).length === 0) {
            return
        }
        if(!userData) {
                return
        }
        let existingRatingObject = productOne.ratings.find(
            (ele) => ele.postedBy.toString() === userData._id
          );
        if(existingRatingObject === undefined) {
            setStar(0)
        } else {
            existingRatingObject && setStar(existingRatingObject.star);
        } 
    },[productOne])
    useEffect(() => {
        if(!getReletedProduct) {
            return
        }
        setReletedProduct(getReletedProduct.data)
    } ,[getReletedProduct])
    return (
         <>
            <div className="container-fluid">
                <div className="row pt-4">
                    <SingleProduct product={productOne} onStarClick={onStarClick} star={star} />
                </div>

                <div className="row">
                    <div className="col text-center pt-5 pb-5">
                    <hr />
                    <h4>Related Products</h4>
                    <hr />
                    </div>
                </div>
                <div className="row pb-5">
                    {reletedPro.length ? (
                    reletedPro.map((r) => (
                        <div key={r._id} className="col-md-4">
                        <ProductCard product={r} />
                        </div>
                    ))
                    ) : (
                    <div className="text-center col">No Products Found</div>
                    )}
                </div>
            </div>
        </>
    )
        
}

export default Product