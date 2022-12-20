export const despositMoney = (amount) => {
  //depositmoney is returning a function which is having a amount.and will send a action. So this is basically a action creator. (mom and dad is creating a action . means they are action creator. and here action creator is depositMoney.)
  return (dispatch) => {
    //this is taking dispatch function and it will call it.
    dispatch({
      type: "deposit", //mom and dad is sending action which is having type(bring) and payload(1bat + 1ball).
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
