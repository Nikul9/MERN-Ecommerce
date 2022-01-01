import React, { useState, useEffect } from "react";
import ProductCard from "../../components/cards/productCard";
import { productWithSubCategory } from "../../action/product.action"
import { useSelector , useDispatch } from "react-redux";

const SubCategoryHome = ({ match }) => {
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState({});
  const [products, setProducts] = useState([]);
  const {getProductWithSubCategory} = useSelector((state) => {
    return state.product
  })
  const { slug } = match.params;

  useEffect(() => {
      dispatch(productWithSubCategory({slug}))
  }, []);

  useEffect(() => {
      if(!getProductWithSubCategory) {
          return 
      }
      // setSubCategory(getProductWithSubCategory.data.subCategorys)
      setProducts(getProductWithSubCategory.data)
  },[getProductWithSubCategory])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {!products ? (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products.length} Products in "{slug}" category 
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products.map((p) => (
          <div className="col" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryHome;
