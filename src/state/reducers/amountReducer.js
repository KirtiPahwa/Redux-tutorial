// this is a reducer which will change the amount. Means this will change the state
const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    return state - action.payload;
  } else {
    return state;
  }
}; //this will take passed initial state . If not passed then it will take default state which is 0. Second parameter is action , what to do?{moneywithdraw, or moneyreducrer}. This is amount reducer which will change amount.
export default reducer;
