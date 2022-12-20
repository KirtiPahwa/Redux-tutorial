import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

export const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);

  const { withdrawMoney, despositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2 className="my-3">Deposit/Withdraw Money</h2>
      <button
        className="mx-2 btn btn-primary"
        onClick={() => {
          despositMoney(100);
        }}
      >
        +
      </button>
      Update Balance {balance}
      <button
        className="mx-2 btn btn-primary"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
    </div>
  );
};
