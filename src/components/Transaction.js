import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text}{" "}
        <span>
          {sign}&#8377;{Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
