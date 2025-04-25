import React, { useEffect, useState } from "react";
import Balance from "./organism/Balance";
import Amount from "./organism/Amount";
import Input from "./organism/Input";
import css from "./App.module.css";
import List from "./organism/List";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  return (
    <div className={css.app}>
      <h1 className={css.title}>용돈기입장</h1>

      <div className={css.balance}>
        <Balance transactions={transactions} />
      </div>

      <div className={css.amount}>
        <Amount transactions={transactions} />
      </div>

      <div className={css.input}>
        <Input setTransactions={setTransactions} />
      </div>

      <div className={css.list}>
        <List transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
};

export default App;
