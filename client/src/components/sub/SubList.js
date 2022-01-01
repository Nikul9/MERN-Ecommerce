import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allSubCategory } from "../../action/sub.acrion";
import { useSelector , useDispatch } from "react-redux"
const SubList = () => {
  const dispatch = useDispatch()
  const [subs , setSubCategory ] = useState([])
  const { allSubCategorys } = useSelector((state) => {
    return state.subCategory
  })
  useEffect(() => {
    dispatch(allSubCategory())
  },[])
  useEffect(() => {
    if(!allSubCategorys) {
        return
    } else {
        setSubCategory(allSubCategorys.data);
    }
},[allSubCategorys])

  const showSubs = () =>
    subs.map((s) => (
      <div
        key={s._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/sub/${s.slug}`}>{s.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {subs <= 0 ? <h4 className="text-center">Loading...</h4> : showSubs()}
      </div>
    </div>
  );
};

export default SubList;
