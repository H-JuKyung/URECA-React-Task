import React from 'react'
import css from './DeleteModal.module.css'

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className={css.modal}>
      <div className={css.con}>
        <h2 className={css.title}>정말 삭제하시겠습니까?</h2>
        <div className={css.button}>
          <button onClick={onClose} className={css.cancelBtn}>
            취소
          </button>
          <button onClick={onDelete} className={css.okBtn}>
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
