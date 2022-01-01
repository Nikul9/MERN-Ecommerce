import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {getCategory} from "../../action/category.action."
const CategoryList = () => {
    const dispatch = useDispatch()
    const [categories , setCategory ] = useState([])
    const { getAllCategory } = useSelector((state) => {
        return state.category
    })
    useEffect(() => {
        dispatch(getCategory())  
      
    },[])
    useEffect(() => {
        if(!getAllCategory) {
            return
        } else {
            setCategory(getAllCategory.data);
        }
    },[getAllCategory])
  const showCategories = () =>
    categories.map((c) => (
      <div
        key={c._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/category/${c.slug}`}>{c.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {categories.length <= 0 ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;
