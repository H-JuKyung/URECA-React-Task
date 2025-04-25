import React from 'react'
import css from './InputRadio.module.css'

const InputRadio = ({ type, onChange }) => {
  return (
    <div className={css.con}>
      <label className={css.label}>
        <input
          type="radio"
          name="type"
          value="income"
          checked={type === 'income'}
          onChange={onChange}
        />
        수입
      </label>
      <label className={css.label}>
        <input
          type="radio"
          name="type"
          value="expense"
          checked={type === 'expense'}
          onChange={onChange}
        />
        지출
      </label>
    </div>
  )
}

export default InputRadio
