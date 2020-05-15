import React from "react";
import { newShoppingAction } from "../../../action/actions";

import { connect } from "react-redux";

const Products = ({ newShopping, productsData }) => {
  const addShopping = (name) => {
    newShopping(name);
  };
  const linkList = productsData.map((product) => {
    return (
      <div style={{ width: "25%", margin: "10px" }}>
        <li key={product.id}>
          <div class="ui link cards">
            <div class="card" style={{ height: "300px" }}>
              <div class="image">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  style={{ height: "200px" }}
                  onClick={() => {
                    addShopping({ name: product.name });
                    alert(`${product.name} is added `);
                  }}
                />
              </div>
              <div class="content">
                <div class="header">{product.name}</div>
                <div class="description">
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  });

  return (
    <div className="ui container full-height">
      <h3>Products</h3>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          fontSize: "15px",
          display: "flex",
        }}>
        {linkList}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingList,
    productsData: state.productsData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newShopping: (name) => {
      dispatch(newShoppingAction(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
