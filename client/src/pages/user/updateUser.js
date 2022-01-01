import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import {Button, Form, Col} from 'react-bootstrap'
import {Controller, useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'
import ErrorHeandler from "../../Widgets/ErrorLable"
import { joiUpdatedMessage } from '../../Utils/Apputils'
import { useDispatch } from "react-redux";
import { updateUser } from "../../action/user.action"

const UpdateUser = () => {
    const dispatch = useDispatch()
    const onClickToSubmit = (data) => {
        console.log(data);
        dispatch(updateUser(data))
    }
    const {handleSubmit , formState , control } = useForm({
        resolver : joiResolver(
          Joi.object({
              firstName : Joi.string().required().label("firstname").messages(joiUpdatedMessage),
              lastName : Joi.string().required().label("lastname").messages(joiUpdatedMessage),
          })
        ),
    })
  return (<>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col text-center">
        <h4>Update User</h4>
            <Form onSubmit={handleSubmit(onClickToSubmit)}>
                <Controller
                  name="firstName"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="First_Name"
                           value={value}
                           onChange={e => {
                             onChange(e)
                           }}
                        />
                        <ErrorHeandler msg={formState.errors.firstName && formState.errors.firstname.message } />
                      </>
                  )}
                />
                <Controller
                  name="lastName"
                  className="ml-5"
                  control={control}
                  render = {( {field:{value , onChange}}) => (
                      <>
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Last_Name"
                           value={value}
                           onChange={e => {
                             onChange(e)
                           }}
                        />
                        <ErrorHeandler msg={formState.errors.lastName && formState.errors.lastName.message } />
                      </>
                  )}
                />
                <button type="submit" className="btn btn-raised">
                Update
                </button>
            </Form>
        </div>
      </div>
    </div>
</>
);
};

export default UpdateUser;