import React, { useState, useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { listAllProduct } from "../../action/product.action"
import { useDispatch, useSelector } from "react-redux";
import AdminProductCard from "../../components/cards/adminProductCard";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { adminOrderList , purchaseUserHistory } from "../../action/user.action";
import ShowPaymentInfo from "../../components/cards/ShowPaymentInfo"


const AdminHistory = () => {
  const [ allProduct , setAllProduct ] = useState([])
  const dispatch = useDispatch()
  const { listedAllproduct } = useSelector((state) => {return state.product })
  const [ orders , setOrder ] = useState([]);
  const { adminAllOrder , purchaseHistory } = useSelector((state) => {
    return state.userReduser
  })
  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Count</th>
          <th scope="col">Shipping</th>
        </tr>
      </thead>
      {order.products.length > 0  &&
      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>{p.product.price}</td>
            <td>{p.product.brand}</td>
            <td>{p.color}</td>
            <td>{p.count}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <CheckCircleOutlined style={{ color: "green" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    }
    </table>
  );
  useEffect(() => {
    dispatch(adminOrderList())
  },[])
  useEffect(() => {
    if(!adminAllOrder) {
      return
    }
    console.log("purchaseHistory.data.products");
    console.log(adminAllOrder.data[0].products);
    setOrder(adminAllOrder.data)
  },[adminAllOrder])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">
          <h4>Admin Dashboard</h4>
          {/* {JSON.stringify(orders)} */}
          {orders.map((order) => (
        <div key={order._id} className="row pb-5">
          <div className="btn btn-block bg-light">
            <ShowPaymentInfo order={order} showStatus={false} />

            <div className="row">
              <div className="col-md-4">Delivery Status</div>
              <div className="col-md-8">
                
              </div>
            </div>
          </div>

          {showOrderInTable(order)}
        </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHistory;