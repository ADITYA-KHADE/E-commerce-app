import React from "react";
import { useContext } from "react";
import "./style/category.css";
import { ShopContext } from "../contexts/ShopContext";
import Dropdown from "../components/assets/dropdown_icon.png";
import Items from "../components/items/item";
const apiurl = process.env.REACT_APP_SERVER_URL;

const Category = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="banner" src={props.banner} alt="" />
      <div className="shop-cat-indexsort">
        <p>
          <span>sort by 1 to 12 </span>using 36 items
        </p>
        <div className="shop-cat-sort">
          sort by
          <img src={Dropdown} alt="" />
        </div>
      </div>
      <div className="shop-cat-product">
        {all_product.map((item, i) => {
          if (props.sex === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                image={`${apiurl}/${item.image}`}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-cat-loadmore">
        Explore more...
      </div>
    </div>
  );
};

export default Category;
