import React from 'react'
import css from './InputAmount.module.css'

const InputAmount = ({ amount, onChange }) => {
  return (
    <div className={css.con}>
      <label htmlFor="amount"></label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="금액 입력..."
        value={amount}
        onChange={onChange}
        className={css.input}
      />
    </div>
  )
}

export default InputAmount
