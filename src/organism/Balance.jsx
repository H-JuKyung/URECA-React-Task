import React from 'react'
import css from './Balance.module.css'
import { formatCurrency } from '../utils/features'

const Balance = ({ transactions }) => {
  const totalAmount = transactions.reduce((total, amount) => {
    return amount.type === 'income' ? total + amount.amount : total - amount.amount
  }, 0)

  return (
    <div className={css.con}>
      <h2>잔액</h2>
      <p className={totalAmount > 0 ? css.plus : totalAmount < 0 ? css.minus : css.zero}>
        {formatCurrency(totalAmount)}
      </p>
    </div>
  )
}

export default Balance
