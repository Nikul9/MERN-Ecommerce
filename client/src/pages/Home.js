import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/Home/NweArraliavels";
import BestSellers from "../components/Home/BestSellers";
import CategoryList from "../components/Category/categoryList";
import SubList from "../components/sub/SubList"
  const Home = () => {
      return (
        <>
          <div className="jumbotron text-danger h1 font-weight-bold text-center">
            <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
          </div>

          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            New Arrivals
          </h4>
          <NewArrivals />

          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            Best Sellers
          </h4>
          <BestSellers />

          <br />
          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            Categories
          </h4>
          <CategoryList />

          <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
            Sub Categories
          </h4>
          <SubList />
        </>
      )
    };

export default Home;