import React, { useState } from "react";
import css from "./Input.module.css";
import { formatDate } from "../utils/features";

const Input = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = () => {
    if (!text || !amount) return alert("내용 또는 금액을 입력해주세요.");
    if (amount <= 0) return alert("금액을 올바르게 작성해주세요.");

    const transactions = {
      id: Date.now(),
      description: text,
      amount: Number(amount),
      type,
      date: formatDate(new Date()),
    };

    const data = JSON.parse(localStorage.getItem("transactions")) || [];
    const updated = [transactions, ...data];
    localStorage.setItem("transactions", JSON.stringify(updated));
    setTransactions(updated);

    setText("");
    setType("income");
    setAmount("");
  };

  return (
    <div className={css.con}>
      <h2 className={css.title}>새로운 거래 추가</h2>
      <div className={css.inputGroup}>
        <label htmlFor="desc" className={css.labelDesc}>
          텍스트
        </label>
        <input
          type="text"
          value={text}
          name="desc"
          onChange={(e) => setText(e.target.value)}
          placeholder="내용 입력..."
          className={css.inputBox}
        />
      </div>
      <div className={css.radioGroup}>
        <label className={css.radioLabel}>
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={(e) => setType(e.target.value)}
          />
          수입
        </label>
        <label className={css.radioLabel}>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={(e) => setType(e.target.value)}
          />
          지출
        </label>
      </div>

      <div className={css.inputGroup}>
        <label htmlFor="amount"></label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="금액 입력..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={css.inputBox}
        />
      </div>

      <button className={css.addBtn} onClick={handleAddTransaction}>
        거래 추가
      </button>
    </div>
  );
};

export default Input;
