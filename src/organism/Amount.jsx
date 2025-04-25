import React from 'react'
import css from './Amount.module.css'
import { formatCurrency } from '../utils/features'

const Amount = ({ transactions }) => {
  const totalIncome = transactions.reduce((total, income) => {
    return income.type === 'income' ? total + income.amount : total
  }, 0)

  const totalExpense = transactions.reduce((total, expense) => {
    return expense.type === 'expense' ? total + expense.amount : total
  }, 0)

  return (
    <div className={css.con}>
      <div className={css.income}>
        <h2>수입</h2>
        <p>{formatCurrency(totalIncome)}</p>
      </div>
      <div className={css.expense}>
        <h2>지출</h2>
        <p>{formatCurrency(totalExpense)}</p>
      </div>
    </div>
  )
}

export default Amount
