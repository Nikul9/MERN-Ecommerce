import React, { useState, useEffect } from "react";
import {Link , useHistory , useParams } from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import {  updateCategory } from "../../../action/category.action.";
import {EditOutlined , DeleteOutlined} from "@ant-design/icons"
import CategoryForm from "../../../components/forms/CategoryForms";
const UpdateCategory = ({history , match }) => {
    const dispatch = useDispatch()
    const params = useParams()
    const [name , setName ] = useState('')
    const hendelSubmit = (e) => {
        e.preventDefault()
        const {slug} = match.params
        dispatch(updateCategory( slug , {name}))
        setName('')
        history.push("/admin/category")
    } 
    
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
            <h4>Update Category</h4>
            <CategoryForm setName={setName} name={name} hendelSubmit={hendelSubmit}/>  
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;