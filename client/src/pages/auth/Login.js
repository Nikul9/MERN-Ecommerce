import React, { useEffect } from "react";
import {Button, Form, Col} from 'react-bootstrap'
import {Controller, useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'
import ErrorHeandler from "../../Widgets/ErrorLable"
import { joiUpdatedMessage } from '../../Utils/Apputils'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { loginUser , socialLogin } from "../../action/auth.action"
import { GoogleLogin } from "react-google-login"
import { GlobalContext } from "../../Context/Globlecontext"

const Login = () => {

const history = useHistory()
const   responseGoogle = (result) => {
  console.log(result);
  dispatch(socialLogin(result))

}
const ErrResponseGoogle = (result) => {
  console.log("result");
  console.log(result);
}
const dispatch = useDispatch()
const {handleSubmit , formState , control } = useForm({
  resolver : joiResolver(
    Joi.object({
        // firstName : Joi.string().required().label("firstName").messages(joiUpdatedMessage)
        // lastName : Joi.string().reuired().lable("Last Name").message(joiUpdatedMessage),
         email : Joi.string()
                       .email({ tlds: {allow: false} })
                       .required()
                       .label("Email")
                       .messages(joiUpdatedMessage),
         password : Joi.string().required().min(3).max(20).label("password").messages(joiUpdatedMessage),
        // confirm_password : Joi.string().equal(Joi.ref("password")).lable("confir_password").message(joiUpdatedMessage)
    })
  ),
})

const onClickToSubmit = data => {
  dispatch(loginUser(data))
  //console.log(data);
}
  
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>9328217188nikul@gmail.com</h4>
            <Form onSubmit={handleSubmit(onClickToSubmit)}>
                <Controller
                  name="email"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Email"
                           value={value}
                           onChange={e => {
                             onChange(e)
                           }}
                        />
                        <ErrorHeandler msg={formState.errors.email && formState.errors.email.message } />
                      </>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                           type="password"
                           className="form-control"
                           placeholder="Password"
                           value={value}
                           onChange={e => {
                             onChange(e)
                           }}
                        />
                        <ErrorHeandler msg={formState.errors.password && formState.errors.password.message } />
                      </>
                  )}
                />
                <button type="submit" className="btn btn-raised">
                          Login
                </button>
            </Form>
            <GoogleLogin
                clientId="336148226089-812kkd4c9jfgullks4826scaej76gc15.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={ErrResponseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
      </div>
    </div>
  );
};

export default Login;