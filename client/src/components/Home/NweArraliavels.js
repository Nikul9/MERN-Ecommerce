import React, { useEffect, useState } from "react";
import ProductCard from "../cards/productCard";
import { Pagination } from "antd";
import { listForNewArrivals } from "../../action/product.action";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css"
const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  const { newArriavals } = useSelector((state) => {return state.product})
  useEffect(() => {
    dispatch(listForNewArrivals({sort : "createdAt" , page , order : "desc"}))
  }, [page]);

  useEffect(() => {
    console.log("from =NewArriavals Data")
    console.log(newArriavals);
    if(newArriavals === undefined ) {
        return
    }
    setProductsCount(newArriavals.data.countData)
    setProducts(newArriavals.data.filterData)
    setLoading(false)
  },[newArriavals]);

  return (
    <>
      <div className="container">
        {!products ? <div>LOADING</div> : (     <div className="row">
                {products.map((product) => (
                <div key={product._id} className="col-md-4">
                    <ProductCard product={product} />
                </div>
                ))}
            </div>
        )}
      </div>

      <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3 ">
          <Pagination
            current={page}
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
            className="row"
            
          />
        </nav>
      </div>
    </>
  );
};

export default NewArrivals;
