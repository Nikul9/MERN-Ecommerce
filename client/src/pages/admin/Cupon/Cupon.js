import React, { useEffect, useState } from "react";
import {Controller, useForm} from 'react-hook-form'
import {joiResolver} from '@hookform/resolvers/joi'
import Joi from 'joi'
import ErrorHeandler from "../../../Widgets/ErrorLable"
import { joiUpdatedMessage } from '../../../Utils/Apputils'
import {Button, Form, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdminNav from "../../../components/nav/AdminNav"
import { useDispatch, useSelector } from "react-redux";
import { removeCupon , addCupon , listCupon } from "../../../action/cupon";
import { DeleteOutlined } from "@ant-design/icons";
import { add } from "lodash";

const Cupon = () => {
    const dispatch = useDispatch()
    const [coupons , setCupons] = useState([])
    const { listAllCupon , removedCoupon , addedCoupon } = useSelector((state) =>{
        return state.coupon
    })
    const { handleSubmit , formState , control } = useForm({
        resolver : joiResolver(
            Joi.object({
                name : Joi.string().required().label("CuponName").messages(joiUpdatedMessage),
                date : Joi.date().greater("now").required(),
                discount : Joi.number().required()
            })
        )
    })
    const handleRemove = (id) => {
        dispatch(removeCupon(id))
    }
    const onClickToSubmit = (data) => {
        console.log(data);
        dispatch(addCupon(data))
    }
    useEffect(() => {
        dispatch(listCupon())
    },[ removedCoupon , addedCoupon])
    useEffect(() => {
        if(!listAllCupon) {
            return
        }
        // if(listAllCupon.data.length == 0) {
        //     return
        // }
        console.log(listAllCupon.data);
        setCupons(listAllCupon.data)
    },[listAllCupon])
    return (
        <>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
          <div className="col-md-6 offset-md-1">
            <h4>Add Copun</h4>
              <Form onSubmit={handleSubmit(onClickToSubmit)}>
                  <label>Cupon Name</label>
                  <Controller
                    name="name"
                    control={control}
                    render = {( {field:{value , onChange}}) => (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Name"
                            value={value}
                            onChange={e => {
                              onChange(e)
                            }}
                          />
                          <ErrorHeandler msg={formState.errors.name && formState.errors.name.message } />
                        </>
                    )}
                  />
                  <label>Expirey Date</label>
                  <Controller
                    name="date"
                    control={control}
                    render = {( {field:{value , onChange}}) => (
                        <>
                            <DatePicker
                                className="form-control"
                                selected={value}
                                onChange={onChange}
                            />
                          <ErrorHeandler msg={formState.errors.date && formState.errors.date.message } />
                        </>
                    )}
                  />
                  <label>Discount %</label>
                  <Controller
                    name="discount"
                    control={control}
                    render = {( {field:{value , onChange}}) => (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Discount %"
                            value={value}
                            onChange={e => {
                              onChange(e)
                            }}
                          />
                          <ErrorHeandler msg={formState.errors.discount && formState.errors.discount.message } />
                        </>
                    )}
                  />
                <button type="submit" className="btn btn-raised mt-3">
                  Add Coupan
                </button>
              </Form>
              <br />
              <h4>{coupons.length} Coupons</h4>
                <table className="table table-bordered">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Expiry</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {coupons.map((c) => (
                        <tr key={c._id}>
                        <td>{c.name}</td>
                        <td>{new Date(c.date).toLocaleDateString()}</td>
                        <td>{c.discount}%</td>
                        <td>
                            <DeleteOutlined
                            onClick={() => handleRemove(c._id)}
                            className="text-danger pointer"
                            />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
          </div>
        </div>
      </div>
    </>
    )
}

export default Cupon