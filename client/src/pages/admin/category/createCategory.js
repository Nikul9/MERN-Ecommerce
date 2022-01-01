import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { createCategory , updateCategory , removeCategory , getCategory } from "../../../action/category.action.";
import {EditOutlined , DeleteOutlined} from "@ant-design/icons"
import LocalSearch from "../../../components/forms/localSerch"
import CategoryForm from "../../../components/forms/CategoryForms";
import "antd/dist/antd.css"

const CreateCategory = ( ) => {
    const dispatch = useDispatch()
    const [name , setName] = useState('')
    const [keyword , setKeyword] = useState("")
    const { createdCategory , updatedCategory , removedCategory , getAllCategory } = useSelector((state) => {
        return state.category
    })
    const [category , setCategory ] = useState([])
    const hendelSubmit = (e) => {
        e.preventDefault()  
        dispatch(createCategory({name}))
        setName('')
    } 
    const onDelete = (data) => {
        console.log('in delete');
        console.log(data);
        let conform = window.confirm("Are you Sure do ypu want to delete ??")
        if(conform) {
            dispatch(removeCategory({slug :  data}))
        }
    }
    useEffect(() => {
        dispatch(getCategory())  
      
    },[createdCategory , updatedCategory , removedCategory])
    useEffect(() => {
        if(!getAllCategory) {
            return
        } else {
            setCategory(getAllCategory.data);
        }
    },[getAllCategory])
    const serch = (keyword) => (c) => c.name.toLocaleLowerCase().includes(keyword)
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
            <h4>Create Category</h4>
            <CategoryForm setName={setName} name={name} hendelSubmit={hendelSubmit}/>  
            <LocalSearch keyword={keyword}  setKeyword={setKeyword} />
            <hr />
            {category.filter(serch(keyword)).map((c) => (
                <div className="alert alert-secondary" key={c.id}>
                    {c.name}
                    <span onClick={() => onDelete(c.slug)} value={c.slug} className="btn btn-sm mr-4 float-right"  >
                            <DeleteOutlined className="text-denger" />
                    </span>
                    <Link className="btn mr-4 float-right" to={`/admin/updateCategory/${c.slug}`} >
                        <EditOutlined className="text-waring" />
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;