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
          <div className="ui link cards">
            <div className="card" style={{ height: "300px" }}>
              <div className="image">
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
              <div className="content">
                <div className="header">{product.name}</div>
                <div className="description">
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
    <div className="ui container">
      <h3>Products</h3>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          fontSize: "15px",
          display: "flex",
          flexWrap: "wrap",
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
