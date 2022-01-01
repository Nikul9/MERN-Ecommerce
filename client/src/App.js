import React, { useEffect, useState } from "react";
import Header from "./components/nav/Header";
import { useDispatch, useSelector } from "react-redux"
import VerifyUser from "./pages/auth/VarifyUser"
import { LOG_IN , SOCIAL_LOGIN , UPDATE_USER } from "./action/reducer.types"
import { GlobalContext } from './Context/Globlecontext'
import AppRoute from "./router/app-route";
import { WindowsOutlined } from "@ant-design/icons";
import useSelection from "antd/lib/table/hooks/useSelection";
import { getUser } from "./action/user.action";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product";
import { addToCart, getAddToCart } from "./action/addTocart.action";

const App = () => {
  const dispatch = useDispatch()
  const { successLabels = [] } = useSelector((state) => {
    return state.apiReduser
  })

  const { loginData , socialLogin} = useSelector((state) => {
    return state.authReduser
  })
  const { updateValue } = useSelector((state) => {
      return state.userReduser
  })
  const [ userData , setUserData ] = useState(JSON.parse(window.localStorage.getItem('userData')))
  const [ isLogin , setLogin ] = useState(window.localStorage.getItem('userData') ? true : false)
  const { newCart , saveCart } = useSelector((state) => { return state.addToCart });
  const setUserInfo = data => {
    console.log('in app success' + data);
    setUserData(data.data)
    window.localStorage.setItem('userData', JSON.stringify(data.data))
  }
  const setToken = ( token ) => {
      window.localStorage.setItem("token" , token)
  }
  
  useEffect(() => {
    console.log("lable change");
    let cart = JSON.parse(localStorage.getItem("cart"))
      if(successLabels.includes(LOG_IN)) {
        console.log("LOG_IN");
        setUserInfo(loginData)
        setToken(loginData.data.token)
        if(cart) {
          dispatch(addToCart({cart}))
        }
        setLogin(true)
      }
      if(successLabels.includes(SOCIAL_LOGIN)) {
        console.log('SOCIAL_LOGIN');
        setUserInfo(socialLogin)
        setToken(socialLogin.data.token)
        if(cart) {
          dispatch(addToCart({cart}))
        }
        setLogin(true)
      }
      if(successLabels.includes(UPDATE_USER)) {
        console.log("IN UPDATE value");
        setUserInfo(updateValue)
      }
  },[successLabels])
  
  useEffect(() => {
    dispatch(getUser())
    const value = window.localStorage.getItem("userData")
    console.log(value);
      if(value) {
        setLogin(true)
      }
  },[])
  useEffect(() => {
    if(isLogin) {
      dispatch(getAddToCart())
    }
  },[isLogin])
  useEffect(() => {
      if(!isLogin) {
        return
      }
      if(!saveCart) {
        return
      }
      dispatch({
        type: "ADD_TO_CART_COUNT",
        payload: saveCart.data[0].products
      });
    },[saveCart])
  return (
    <>
    <GlobalContext.Provider value={{
      isLogin,
      userData,
      setUserData,
      setLogin
    }}>
      <Header />
      <AppRoute />
    </GlobalContext.Provider>
    </>
  );
};

export default App;
