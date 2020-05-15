export const deleteShoppingAction = (id) => {
  return { type: "REMOVE_Shopping", payload: id };
};

export const markShoppingAction = (id) => {
  return { type: "DONE_Shopping", payload: id };
};

export const newShoppingAction = (content) => {
  return { type: "NEW_Shopping", payload: content };
};

export const increaseQuantityAction = (id) => {
  return { type: "INCREASE_QTY", payload: id };
};
export const decreaseQuantityAction = (id) => {
  return { type: "DECREASE_QTY", payload: id };
};
