import React , { useState } from "react";
import { Card , Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import _ from "lodash";
// import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../pages/rating"
import { useDispatch } from "react-redux";
import { addToCart } from "../../action/addTocart.action"
const { Meta } = Card;

const ProductCard = ({ product }) => {

  // destructure
  const dispatch = useDispatch()
  const { images, title, description, slug } = product;
  const [tooltip, setTooltip] = useState("Click to add");
  
  const handleAddToCart = () => {
    console.log("calling");
    // create cart array
    var cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if ( localStorage.getItem("cart") ) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");
        dispatch(addToCart({cart : unique}))
        dispatch({
          type : "ADD_TO_CART_COUNT",
          payload : unique
        })
      }
  };
  
  return (
    <>
        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}
    
    <Card
      cover={
        <img
          src={images[0].url }
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        
        <Link to={`/product/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <Tooltip title={tooltip}>
        <a onClick={handleAddToCart}>
          <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
        </a>
        </Tooltip>,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
    </>
  );
};

export default ProductCard;
