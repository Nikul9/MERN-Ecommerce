import React, { useState , useEffect } from "react"
import {useDispatch , useSelector } from "react-redux"
import { Menu, Slider, Checkbox, Radio } from "antd";
import 'antd/dist/antd.css';
import {
    DollarOutlined,
    DownSquareOutlined,
    StarOutlined,
  } from "@ant-design/icons";
import { getCategory } from "../action/category.action."
import { filterProduct } from "../action/product.action"
import ProductCard from "../components/cards/productCard";
const {SubMenu,ItemGroup} = Menu;

const ShopPage = () => {
    const [ value , setValue ] = useState({brand : [] , color : [] , category : [] ,  shipping : ""})
    const {category , brand , color , price , shipping } = value;
    const [ colors , setColors ] = useState(["Blue","Black","Brown","Silver","White"])
    const [ brands, setBrands] = useState(["Apple","Samsung","Microsoft","Lenovo","Asus"]);   
    const [ categoryIds , setCategoryIds ] = useState([])
    const [ products , setProducts ] = useState([])
    const showShipping = () => (
        <>
          <Radio
            className="pb-2 pl-4 pr-4"
            onChange={heandelShoipping}
            value="Yes"
            checked={shipping == "Yes"}
          >
            Yes
          </Radio>
    
          <Radio
            className="pb-2 pl-4 pr-4"
            onChange={heandelShoipping}
            value="No"
            checked={shipping == "No"}
          >
            No
          </Radio>
        </>
    );
    const showBrands = () =>
    brands.map((b) => (
      <Checkbox
        key={b}
        value={b}
        name={b}
        checked={brand.includes(b)}
       onChange={handleBrand}
        className="pb-1 pl-5 pr-4"
      >
        {b}
      </Checkbox>
    ));
    const showColors = () =>
        colors.map((c) => (
        <Checkbox
            key={c}
            value={c}
            name={c}
            checked={color.includes(c)}
            onChange={handleColor}
            className="pb-1 pl-5 pr-4"
        >
           {c}
        </Checkbox>
    ));
    const dispatch = useDispatch()
    const [categorys , setCategory ] = useState([])
    const { getAllCategory  } = useSelector((state) => {
        return state.category
    })
    const {  getProductFilter } = useSelector((state) => {
        return state.product
    })
    const showCategories = () =>
        categorys.map((c) => (
            <div key={c._id}>
            <Checkbox
                onChange={handleCheck}
                className="pb-2 pl-5 pr-4"
                value={c._id}
                name="category"
                checked={value.category.includes(c._id)}
                >
                {c.name}
            </Checkbox>
                <br />
            </div>
    ));
    const heandelShoipping = (e) => {
        setValue({...value , shipping : [e.target.value]})
    }
    const sendAllFilter = (value) => {
        dispatch(filterProduct(value))
      console.log(value);
    }
    const handleBrand = (e) => {
        let inTheState = brand;
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1
    
        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
          inTheState.push(justChecked);
        } else {
          // if found pull out one item from index
          inTheState.splice(foundInTheState, 1);
        }    
        setValue({...value , brand : inTheState });
        console.log(brand);
        // fetchProducts({ category: inTheState });
    };
    const handleCheck = (e) => {
        let inTheState = category;
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1
    
        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
          inTheState.push(justChecked);
        } else {
          // if found pull out one item from index
          inTheState.splice(foundInTheState, 1);
        }    
        setValue({...value , category : inTheState });
        console.log(category);
        // fetchProducts({ category: inTheState });
    };
    const handleColor = (e) => {
        let inTheState = color;
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1
    
        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
          inTheState.push(justChecked);
        } else {
          // if found pull out one item from index
          inTheState.splice(foundInTheState, 1);
        }    
        setValue({...value , color : inTheState });
        console.log(color);
        // fetchProducts({ category: inTheState });
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
        if(!getProductFilter) {
            return
        }
        setProducts(getProductFilter.data)
    },[getProductFilter])
    const handelSlider = () => {
    //  console.log(e.target.value);
    // setValue({...value ,  price : value })
       //  console.log("asdasd")
    } 
    return (
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 pt-2">
                <h4>Search/Filter</h4>
                <hr />
                <Menu
                    defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7"]}
                    mode="inline"
                >
                    {/* price */}
                    <SubMenu
                    key="1"
                    title={
                        <span className="h6">
                        <DollarOutlined /> Price
                        </span>
                    }
                    >
                    <div>
                        <Slider
                        className="ml-4 mr-4"
                        tipFormatter={(v) => `$${v}`}
                        //range
                        disabled={false}
                        l

                      //  value={price}
                     //   onChange={handelSlider}
                        max="4999"
                        />
                    </div>
                    </SubMenu>

                    {/* category */}
                    <SubMenu
                    key="2"
                    title={
                        <span className="h6">
                        <DownSquareOutlined /> Categories
                        </span>
                    }
                    >
                    <div style={{ maringTop: "-10px" }}>
                            {showCategories()}
                    </div>
                    </SubMenu>

                    {/* stars
                    <SubMenu
                    key="3"
                    title={
                        <span className="h6">
                        <StarOutlined /> Rating
                        </span>
                    }
                    >
                    <div style={{ maringTop: "-10px" }}></div>
                    </SubMenu> */}

                    {/* brands */}
                    <SubMenu
                    key="5"
                    title={
                        <span className="h6">
                        <DownSquareOutlined /> Brands
                        </span>
                    }
                    >
                    <div style={{ maringTop: "-10px" }} className="pr-5">
                        {showBrands()}
                    </div>
                    </SubMenu>

                    {/* colors */}
                    <SubMenu
                    key="6"
                    title={
                        <span className="h6">
                        <DownSquareOutlined /> Colors
                        </span>
                    }
                    >
                    <div style={{ maringTop: "-10px" }} className="pr-5">
                        {showColors()}
                    </div>
                    </SubMenu>

                    {/* shipping */}
                    <SubMenu
                    key="7"
                    title={
                        <span className="h6">
                        <DownSquareOutlined /> Shipping
                        </span>
                    }
                    >
                    <div style={{ maringTop: "-10px" }} className="pr-5">
                        {showShipping()}
                    </div>
                    </SubMenu>
                </Menu>
                <button onClick={() => {sendAllFilter(value)}} >APPLY FILTER</button>
                </div>
                <div className="col-md-9 pt-2">
                    {products.length < 0 ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                        <h4 className="text-danger">Products</h4>
                    )}

                    {products.length < 1 && <p>No products found</p>}

                    <div className="row pb-5">
                        {products.map((p) => (
                        <div key={p._id} className="col-md-4 mt-3">
                            <ProductCard product={p} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopPage