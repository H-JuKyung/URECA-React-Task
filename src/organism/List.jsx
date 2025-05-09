import React from "react";
import css from "./List.module.css";
import TransactionItem from "../components/TransactionItem";

const List = ({ transactions, setTransactions }) => {
  const handleDelete = (id) => {
    const updated = transactions.filter((data) => data.id !== id);
    setTransactions(updated);
    localStorage.setItem("transactions", JSON.stringify(updated));
  };
  return (
    <div className={css.con}>
      <h2 className={css.title}>내역</h2>
      {transactions.length === 0 ? (
        <p>거래 내역이 없습니다.</p>
      ) : (
        <div className={css.scrollArea}>
          <ul>
            {transactions.map((data) => (
              <li key={data.id}>
                <TransactionItem data={data} onDelete={handleDelete} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
