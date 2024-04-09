import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: state.balance === 500 ? state.balance : state.balance + 500,
        isActive: true,
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance <= 0 ? state.balance : state.balance - 50,
      };
    case "loan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: 500,
        balance: state.balance + 500,
        // loan: state.loan === 500 ? state.loan : state.loan + 500,
        // balance: state.loan === 500 ? state.balance : state.balance + 500,
      };
    case "Payloan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        // loan: state.loan !== 500 ? state.loan : state.loan - 500,
        // balance: state.loan !== 500 ? state.balance : state.balance - 500,
      };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;

    default:
      throw new Error("Unknown action");
  }
};
const AppBank = () => {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="AppBank">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open Account
        </button>
      </p>

      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>

      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "loan" })} disabled={!isActive}>
          Request a Loan of 500
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "Payloan" })}
          disabled={!isActive}
        >
          Pay Loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive}
        >
          Close Account
        </button>
      </p>
    </div>
  );
};

export default AppBank;
