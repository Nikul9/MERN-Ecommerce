import React from "react";
import {Button, Form, Col} from 'react-bootstrap'
import {Controller, useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'
import ErrorHeandler from "../../Widgets/ErrorLable"
import { joiUpdatedMessage } from '../../Utils/Apputils'
import { useDispatch } from "react-redux"
import { signup } from "../../action/auth.action"


const Register = () => {

  const {handleSubmit, formState, control} = useForm({
    resolver : joiResolver(
      Joi.object({
          firstName : Joi.string().required().label("firstName").messages(joiUpdatedMessage),
          lastName : Joi.string().required().label("Last Name").messages(joiUpdatedMessage),
          email :   Joi.string()
                         .email({ tlds: {allow: false} })
                         .required()
                         .label("Email")
                         .messages(joiUpdatedMessage),
          password : Joi.string().required().min(3).max(20).label("password").messages(joiUpdatedMessage),
          confirm_password : Joi.string().equal(Joi.ref("password")).label("confir_password").messages(joiUpdatedMessage)
      })
    ),
  })
  const dispetch = useDispatch()
  const onClickToSubmit = data => {
    //dispatch(loginUser(data))
    // console.log(data);
    dispetch(signup(data))
  }

return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Regiester</h4>
            <Form onSubmit={handleSubmit(onClickToSubmit)}>
                <Controller
                  name="firstName"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="firstName"
                          value={value}
                          onChange={e => {
                            onChange(e)
                          }}
                        />
                        <ErrorHeandler msg={formState.errors.firstName && formState.errors.firstName.message } />
                      </>
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="lastName"
                          value={value}
                          onChange={e => {
                            onChange(e)
                          }}
                        />
                        <ErrorHeandler msg={formState.errors.lastName && formState.errors.lastName.message } />
                      </>
                  )}
                />
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
                <Controller
                  name="confirm_password"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm_Password"
                          value={value}
                          onChange={e => {
                            onChange(e)
                          }}
                        />
                        <ErrorHeandler msg={formState.errors.confirm_password && formState.errors.confirm_password.message } />
                      </>
                  )}
                />
                <button type="submit" className="btn btn-raised">
                Register
                </button>
            </Form>
        </div>
      </div>
    </div>
  );
};
export default Register;