import React, { useState, useEffect } from "react";
import ProductCard from "../../components/cards/productCard"
import { productWithCategory } from "../../action/product.action"
import { useSelector , useDispatch } from "react-redux";

const CategoryHome = ({ match }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState([]);
  const {getProductWithCategory} = useSelector((state) => {
    return state.product
  })
  const { slug } = match.params;

  useEffect(() => {
      dispatch(productWithCategory({slug}))
  }, []);

  useEffect(() => {
      if(!getProductWithCategory) {
          return 
      }
      setCategory(getProductWithCategory.data.category)
      setProducts(getProductWithCategory.data.products)
  },[getProductWithCategory])

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
              {products.length} Products in "{category.name ? category.name : slug}" category 
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

export default CategoryHome;
