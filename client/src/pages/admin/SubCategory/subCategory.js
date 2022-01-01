import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { createSubCategory , updateSubCategory , deleteSubCategory , allSubCategory } from "../../../action/sub.acrion";
import {getCategory} from "../../../action/category.action."
import {EditOutlined , DeleteOutlined} from "@ant-design/icons"
import LocalSearch from "../../../components/forms/localSerch"
import CategoryForm from "../../../components/forms/CategoryForms";

const SubCreate = () => {
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [keyword , setKeyword] = useState("")
    const [selectedCategory , setSelectedCategory] = useState("")
    const [category , setCategory ] = useState([])
    const [subCategory , setSubCategory ] = useState([])
    const { createdSubCategory , updatedSubCategory , deletedSubCategory , allSubCategorys } = useSelector((state) => {
        return state.subCategory
    })
    const { getAllCategory } = useSelector((state) => {
        return state.category
    })
    const hendelSubmit = (e) => {
        e.preventDefault()  
        dispatch(createSubCategory({name , parent : selectedCategory}))
        setName('')
    } 
    const onDelete = (data) => {
        console.log('in delete');
        console.log(data);
        let conform = window.confirm("Are you Sure do ypu want to delete ??")
        if(conform) {
            dispatch(deleteSubCategory({data}))
        }
    }
    useEffect(() => {
        dispatch(getCategory())  
      
    },[])
    useEffect(() => {
        dispatch(allSubCategory())
    },[createdSubCategory , updatedSubCategory , deletedSubCategory])
    useEffect(() => {
        if(!getAllCategory) {
            return
        } else {
            setCategory(getAllCategory.data);
        }
    },[getAllCategory])
    useEffect(() => {
        console.log("allSubCategorys");
        console.log(allSubCategorys);
        if(!allSubCategorys) {
            return
        } else {
            console.log("allSubCategorys");
            console.log(allSubCategorys);
            setSubCategory(allSubCategorys.data);
        }
    },[allSubCategorys])
    const serch = (keyword) => (c) => c.name.toLocaleLowerCase().includes(keyword)
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
            <h4>Create Sub Category</h4>
            <div className="form-group"  >
                <label>SELECT CATEGORTY</label>
                <select name="category" 
                    onChange={(e) => setSelectedCategory(e.target.value)} 
                    className="form-control" 
                >
                    <option value="" >Plese Select Category</option>
                    {category.length > 0 && category.map((c) => (<option value={c._id}  key={c._id} >{c.name}</option> ))}
                </select>
            </div>
            <CategoryForm setName={setName} name={name} hendelSubmit={hendelSubmit}/>  
            <LocalSearch keyword={keyword}  setKeyword={setKeyword} />
            <hr />
            {subCategory.map((c) => (
                <div className="alert alert-secondary" key={c.id}>
                    {c.name}
                    <span onClick={() => onDelete(c.slug)} value={c.slug} className="btn btn-sm mr-4 float-right"  >
                            <DeleteOutlined className="text-denger" />
                    </span>
                    <Link className="btn mr-4 float-right" to={`/admin/updateSub/${c.slug}`} >
                        <EditOutlined className="text-waring" />
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SubCreate;