import React, { useState } from "react";
import AddForm from "./AddForm";
import UIShoppingList from "./UIShoppingList";
import FilterList from "./FilterList";

import {
  deleteShoppingAction,
  markShoppingAction,
  newShoppingAction,
  increaseQuantityAction,
  decreaseQuantityAction,
} from "../../../action/actions";

import { connect } from "react-redux";

const ShoppingList = ({
  shoppingList,
  newShopping,
  markShopping,
  removeShopping,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [filterVal, setFilterVal] = useState("SHOW_ALL");
  const deleteShopping = (id) => {
    removeShopping(id);
  };

  const addShopping = (name) => {
    //I tried to add a func that if the selected item already exists, increase the quontity to avoid duplicate. but it doesn't work...
    // shoppingList.map((item) => {
    //   if ((item.name = name)) {
    //     increaseQuantity(item.id);
    //   }
    //   newShopping(name);
    // });
    newShopping(name);
  };

  const doneShopping = (id) => {
    markShopping(id);
  };

  const addQuantity = (id) => {
    increaseQuantity(id);
  };
  const subQuantity = (id) => {
    decreaseQuantity(id);
  };
  const getVisibleShopping = (shoppingList, filterVal) => {
    switch (filterVal) {
      case "SHOW_COMPLETED":
        return shoppingList.filter((item) => item.isDone);
      case "SHOW_ACTIVE":
        return shoppingList.filter((item) => !item.isDone);
      case "SHOW_ALL":
        return shoppingList;
      default:
        break;
    }
  };

  const visibleList = getVisibleShopping(shoppingList, filterVal);

  const getCurrentView = (filterVal) => {
    switch (filterVal) {
      case "SHOW_COMPLETED":
        return "Let's go shopping!!";
      case "SHOW_ACTIVE":
        return "Finish!!!";
      default:
        return "What are you going to buy?";
    }
  };

  const displayMessage = getCurrentView(filterVal);

  const filterFunc = (action) => {
    setFilterVal(action);
  };

  return (
    <div className="ui container full-height">
      <h3>Shopping List</h3>
      <FilterList filterFunc={filterFunc} filterVal={filterVal} />
      <UIShoppingList
        shoppingList={visibleList}
        doneShopping={doneShopping}
        deleteShopping={deleteShopping}
        filterVal={filterVal}
        emptyText={displayMessage}
        addQuantity={addQuantity}
        subQuantity={subQuantity}
      />
      <AddForm addShopping={addShopping} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    newShopping: (content) => {
      dispatch(newShoppingAction(content));
    },
    markShopping: (id) => {
      dispatch(markShoppingAction(id));
    },
    removeShopping: (id) => {
      dispatch(deleteShoppingAction(id));
    },
    increaseQuantity: (id) => {
      dispatch(increaseQuantityAction(id));
    },
    decreaseQuantity: (id) => {
      dispatch(decreaseQuantityAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
