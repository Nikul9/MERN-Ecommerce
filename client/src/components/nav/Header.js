import React, { useContext, useEffect, useState } from "react";
import {useHistory} from "react-router-dom"
import { Menu , Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from "../../Context/Globlecontext"
import { useSelector , useDispatch } from "react-redux";
const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const {  isLogin , setUserData , setLogin , userData } = useContext(GlobalContext)
  const history = useHistory()
  const [ cartCount , setCartCount ] = useState(0)
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  const dispatch = useDispatch()
  const { newCart } = useSelector((state) => {
     return state.addToCart
  })
  if(!newCart) {
    dispatch({
      type : "ADD_TO_CART_COUNT",
      payload : []
    })
  }
  const  logout = async () => {
    localStorage.clear()
    setLogin(false)
    setUserData(null)
    history.push('/login')
  }
  let newUser ;
  let userName = "DROUPDOWN"
  if(isLogin) { 
    const data = userData
    if(typeof data === 'object') {
        
        newUser = data
    }
    if(typeof data === 'string') {
        const jsonData = JSON.parse(data)
        console.log("jsonData");
        newUser = jsonData
    }
  }
  useEffect(() => {
    if(!newCart) {
      return
    }
    console.log(Object.keys(newCart).length);
    setCartCount(Object.keys(newCart).length)
    
  })
  return (<>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                  <Badge count={cartCount} offset={[9, 0]}>
                    Cart
                  </Badge>
                </Link>
              </li>
              {!isLogin &&
                <li className="nav-item">
                  <Link className="nav-link" to="/login" >LOGIN</Link>
                </li>
              }
              {!isLogin &&
              <li className="nav-item">
                <Link className="nav-link" to="/register">REGISTER</Link>
              </li>
              }
              {isLogin &&
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {newUser.firstName}
                </a>   
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {newUser.role === "subscriber" &&
                      <li><Link className="nav-link" to="/admin/dashboard">Dashboard</Link></li>
                  }
                  {!newUser.role === "subscriber" &&
                      <li><Link className="nav-link" to="/user/history">Dashboard</Link></li>
                  }
                  <li><a className="dropdown-item" href="" onClick={logout}>LOGOUT</a></li>
                  </ul>
                </li>
              }
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
  </>);
};

export default Header;
