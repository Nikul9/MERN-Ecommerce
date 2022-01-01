import React from "react";
import { Card } from "antd";
import { deleteProduct } from "../../action/product.action";
// import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "antd/dist/antd.css";
const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  // destructure
  const dispatch = useDispatch()
  const { title, description, images, slug } = product;
    const heandelDelete = (data) => {
        console.log("data");
        console.log("data");
        console.log("data");
        console.log(data);
        console.log(data);
       dispatch(deleteProduct({slug : data}))
    }
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : "NOTHING" }
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        // <Link to={`/admin/product/${slug}`}>
        //   <EditOutlined className="text-warning" />
        // </Link>,
        <div
          onClick={() => {heandelDelete(slug)}}
          className="btn text-danger"
        >DELETE</div>,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
