import React from "react";
import { Card , Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "antd/dist/antd.css"
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings"
import RatingModel from "../model/RatingModel"
import { showAverage } from "../../pages/rating"
import _ from "lodash"
import { useDispatch } from "react-redux";
import { addToCart } from "../../action/addTocart.action"

const { TabPane } = Tabs;
const { Meta } = Card;

const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, description, images, slug } = product;
  console.log(title, description, images);
  const dispatch = useDispatch()  
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
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
      dispatch(addToCart({cart : unique}))
      localStorage.setItem("cart",JSON.stringify(unique));
      dispatch({
        type : "ADD_TO_CART_COUNT",
        payload : unique
      })
    }
};

  return (
    <>
      <div className="col-md-7">
        
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        
          <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Call use on xxxx xxx xxx to learn more about this product.
          </TabPane>
        </Tabs>
      </div>

      <div className="col-md-5">
        <h1 className="bg-info p-3">{title}</h1>
        {product && product.ratings && product.ratings.length > 0 ? (
          showAverage(product)
        ) : (
          <div className="text-center pt-1 pb-3">No rating yet</div>
        )}
        <Card
          actions={[
            <>
              <ShoppingCartOutlined onClick={handleAddToCart} className="text-success" /> <br />
              Add to Cart
            </>,
            <Link to="/">
              <HeartOutlined className="text-info" /> <br /> Add to Wishlist
            </Link>,
            <RatingModel>
                <StarRating
                  name={product._id}
                  numberOfStars={5}
                  rating={star}
                  changeRating={onStarClick}
                  isSelectable={true}
                  starRatedColor="brown"
                />
          </RatingModel>
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
