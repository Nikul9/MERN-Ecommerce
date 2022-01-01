import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";

const History = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col text-center">
          <h4>
              History Page
            {/* {orders.length > 0 ? "User purchase orders" : "No purchase orders"} */}
          </h4>
          {/* {showEachOrders()} */}
        </div>
      </div>
    </div>
  );
};

export default History;
