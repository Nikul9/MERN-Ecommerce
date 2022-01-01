import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { updateSubCategory  , oneSubCategory } from "../../../action/sub.acrion";
import {getCategory} from "../../../action/category.action."
import CategoryForm from "../../../components/forms/CategoryForms";

const UpdateSubCreate = ({ history , match}) => {
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [selectedCategory , setSelectedCategory] = useState("")
    const [category , setCategory ] = useState([])
    const [ parent , setParent ] = useState("")
    const {  getOneSubCategory } = useSelector((state) => {
        return state.subCategory
    })
    const { getAllCategory } = useSelector((state) => {
        return state.category
    })
    const hendelSubmit = (e) => {
        e.preventDefault()  
        dispatch(updateSubCategory({parent , name},{ slug : match.params.slug }))
        setName('')
        history.push("/admin/subCategory")
    } 
    
    useEffect(() => {
        dispatch(oneSubCategory({slug : match.params.slug}))     
    },[])
    useEffect(() => {
        dispatch(getCategory())     
    },[])
    useEffect(() => {
        if(!getOneSubCategory) {
            return
        }
        setName(getOneSubCategory.data.name)
        setParent(getOneSubCategory.data.parent)
    },[getOneSubCategory])
    
    useEffect(() => {
        if(!getAllCategory) {
            return
        } else {
            setCategory(getAllCategory.data);
        }
    },[getAllCategory])
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
            <h4>Update Sub Category</h4>
            <div className="form-group"  >
                <label>SELECT CATEGORTY</label>
                <select name="category" 
                    onChange={(e) => {setParent(e.target.value)}}
                    className="form-control" 
                >
                    <option value="" >Plese Select Category</option>
                    {category.length > 0 && category.map((c) => (
                        <option selected={c._id === parent}  value={c._id}  key={c._id} >{c.name}</option> 
                    ))}
                </select>
            </div>
            <CategoryForm setName={setName} name={name} hendelSubmit={hendelSubmit}/>  
        </div>
      </div>
    </div>
  );
};

export default UpdateSubCreate;