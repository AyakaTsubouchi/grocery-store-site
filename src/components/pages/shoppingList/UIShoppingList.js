import React from "react";
import cx from "classnames";

const UIShoppingList = ({
  shoppingList,
  doneShopping,
  deleteShopping,
  emptyText,
  addQuantity,
  subQuantity,
}) => {
  const tempList = shoppingList.length ? (
    shoppingList.map((shopping) => {
      return (
        <div className="collection-item" key={shopping.id}>
          <span
            style={{
              textDecoration: shopping.isDone ? "line-through" : "none",
            }}
            onClick={() => {
              doneShopping(shopping.id);
            }}>
            {shopping.name}
          </span>
          <button
            onClick={() => {
              subQuantity(shopping.id);
            }}>
            -
          </button>
          {shopping.quontity}
          <button
            onClick={() => {
              addQuantity(shopping.id);
            }}>
            +
          </button>
          <a
            href="#~"
            onClick={() => {
              deleteShopping(shopping.id);
            }}
            className="secondary-content">
            <i className="material-icons red-text text-accent-1">delete</i>
          </a>
          <a
            href="#~"
            onClick={() => {
              doneShopping(shopping.id);
            }}
            className="secondary-content">
            <i
              className={cx("material-icons", {
                "blue-text text-lighten-4": !shopping.isDone,
                "amber-text text-darken-2": shopping.isDone,
              })}>
              check
            </i>
          </a>
        </div>
      );
    })
  ) : (
    <p className="center">{emptyText}</p>
  );
  return <div className="collection">{tempList}</div>;
};

export default UIShoppingList;
