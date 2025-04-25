import React, { useState } from 'react'
import css from './TransactionItem.module.css'
import { formatCurrency } from '../utils/features'
import DeleteModal from './DeleteModal'

const TransactionItem = ({ data, onDelete }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleDelete = () => {
    setOpenModal(true)
  }

  const handleOkDelete = () => {
    onDelete(data.id)
    setOpenModal(false)
  }

  const handleCancel = () => {
    setOpenModal(false)
  }
  return (
    <>
      <div className={data.type === 'income' ? css.itemIncome : css.itemExpense}>
        <button className={css.deleteBtn} onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
        <div className={css.description}>{data.description}</div>
        <div className={data.type === 'income' ? css.income : css.expense}>
          {`${data.type === 'income' ? '+' : '-'}${formatCurrency(data.amount)}`}
        </div>
        <div className={css.date}>{data.date}</div>
      </div>

      {openModal && <DeleteModal onClose={handleCancel} onDelete={handleOkDelete} />}
    </>
  )
}

export default TransactionItem
