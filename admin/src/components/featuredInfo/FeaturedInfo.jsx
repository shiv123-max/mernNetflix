import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹2,000</span>
          <span className="featuredMoneyRate">
            -150.00 <ArrowDownward className="featuredIcon negative"/>
          </span>
          <span className="featuredSub">
              Compared to last month
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹2,400</span>
          <span className="featuredMoneyRate">
            -100.00 <ArrowDownward className="featuredIcon negative"/>
          </span>
          <span className="featuredSub">
              Compared to last month
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹2,080</span>
          <span className="featuredMoneyRate">
            50.00 <ArrowUpward className="featuredIcon"/>
          </span>
          <span className="featuredSub">
              Compared to last month
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
