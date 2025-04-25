import React, { useState } from 'react'
import InputText from '../components/InputText'
import InputRadio from '../components/InputRadio'
import InputAmount from '../components/InputAmount'
import css from './Input.module.css'
import { formatDate } from '../utils/features'

const Input = ({ setTransactions }) => {
  const [text, setText] = useState('')
  const [type, setType] = useState('income')
  const [amount, setAmount] = useState('')

  const handleAddTransaction = () => {
    if (!text || !amount) return alert('내용 또는 금액을 입력해주세요.')
    if (amount <= 0) return alert('금액을 올바르게 작성해주세요.')

    const transactions = {
      id: Date.now(),
      description: text,
      amount: Number(amount),
      type,
      date: formatDate(new Date()),
    }

    const data = JSON.parse(localStorage.getItem('transactions')) || []

    const updated = [transactions, ...data]
    localStorage.setItem('transactions', JSON.stringify(updated))
    setTransactions(updated)

    setText('')
    setType('income')
    setAmount('')
  }

  return (
    <div className={css.con}>
      <h2 className={css.title}>새로운 거래 추가</h2>
      <InputText text={text} onChange={e => setText(e.target.value)} />
      <InputRadio type={type} onChange={e => setType(e.target.value)} />
      <InputAmount amount={amount} onChange={e => setAmount(e.target.value)} />
      <button className={css.addBtn} onClick={handleAddTransaction}>
        거래 추가
      </button>
    </div>
  )
}

export default Input
