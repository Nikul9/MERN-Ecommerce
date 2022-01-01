import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { useDispatch , useSelector } from "react-redux";
import AdminNav from "../../../components/nav/AdminNav";
import { getCategory } from "../../../action/category.action."
import { parentSubCategory } from "../../../action/sub.acrion"
import { createProduct } from "../../../action/product.action"
import FileUpload from "../../../components/forms/FileUpload"

const ProductCreate = () => {
    const initialState = {
        title: "Macbook Pro",
        description: "This is the best Apple product",
        price: "45000",
        //categories: [],
        category: "",
        subCategorys: "",
        shipping: "Yes",
        quantity: "50",
        images: [],
        //colors: ["Black", "Brown", "Silver", "White", "Blue"],
       // brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
        color: "White",
        brand: "Apple",
    };
    const [ category , setCategory ] = useState([])
    const [ subCategory , setSubCategory ] = useState([])
    const [ showSub , setShowSubs ] = useState(false)
    const [values , setValues] = useState(initialState)
    const [subOptions, setSubOptions] = useState([]);
    
    const dispatch = useDispatch()
    const { getAllCategory } = useSelector((state) => {
        return state.category
    })
    const { parentSub } = useSelector((state) => {
        return state.subCategory
    })
    const {title,price, categoriescategory, subs,
            shipping,quantity,images,colors,brands,
            color,brand , description} = values;
    
    const handleCatagoryChange = (e) => {
        e.preventDefault();
        console.log("CLICKED CATEGORY", e.target.value);
        setValues({ ...values, category: e.target.value });
        dispatch(parentSubCategory({id : e.target.value}))
        console.log("handleCatagoryChange");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(createProduct(values))
        window.location.reload()
    };
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        // console.log(e.target.name, " ----- ", e.target.value);
    };
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
    useEffect(() => {
        console.log("iun parent");
        console.log(parentSub);
        if(!parentSub) {
            return
        } else {
            setSubOptions(parentSub.data);
        }
    },[parentSub])
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>
                    <div className="col mr-5 ml-5 mt-4s" >
                        <h4 className="mb-5">Create Product</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="p-3">
                            <FileUpload
                            values={values}
                            setValues={setValues}
                            
                            />
                        </div>
                        
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                type="text"
                                name="title"
                                className="form-control"
                                value={title}
                                onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                type="text"
                                name="description"
                                className="form-control"
                                value={description}
                                onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                type="number"
                                name="price"
                                className="form-control"
                                value={price}
                                onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Shipping</label>
                                <select
                                name="shipping"
                                className="form-control"
                                onChange={handleChange}
                                >
                                <option>Please select</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                                </select>
                            </div>

                            <div className="form-group">
                                    <label>Quantity</label>
                                    <input
                                    type="number"
                                    name="quantity"
                                    className="form-control"
                                    value={quantity}
                                    onChange={handleChange}
                                    />
                            </div>
                            
                            <div className="form-group">
                                <label>Color</label>
                                <select name="color" className="form-control" onChange={handleChange}>
                                <option>Plese Select</option>
                                        <option value="Black" >Black</option>
                                        <option value="Red" >Red</option>
                                        <option value="Brown" >Brown</option>
                                        <option value="White" >White</option>
                                        <option value="Blue" >Blue</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Grey" >Grey</option>
                                </select>
                            </div>
                                    
                            <div className="form-group">
                                <label>Brand</label>
                                <select name="brand" className="form-control" onChange={handleChange}>
                                <option>Plese Select</option>
                                        <option value="Lenovo">Lenovo</option>
                                        <option value="Asus">Asus</option>
                                        <option value="Microsoft">Microsoft</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Acer">Acer</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="HP">HP</option>
                                        <option value="MSI">MSI</option>
                                </select>
                            </div>                
                                    
                            <div className="form-group">
                                <label>Category</label>
                                <select
                                name="category"
                                className="form-control"
                                onChange={handleCatagoryChange}
                                >
                                <option>Please select</option>
                                {category.length > 0 &&
                                    category.map((c) => (
                                    <option key={c._id} value={c._id}>
                                        {c.name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            
                            {subOptions[0] &&
                            <div>
                            <label>Sub Categories</label>
                            <select
                              //  mode="multiple"
                                className="form-control"
                                placeholder="Please select"
                                onChange={(e) => setValues({ ...values, subCategorys: e.target.value })}
                            >
                                
                                <option>Please select</option>
                                {subOptions.map((s) => (
                                    <option key={s._id} value={s._id}>
                                    {s.name}
                                    </option>
                                ))}
                            </select>
                            </div>
                            }

                            <br />
                            <button className="btn btn-outline-info">Save</button>
                            </form>                      
                </div>      
            </div>
        </div>
        </>
    )
}

export default ProductCreate