import React from 'react'
import css from './InputText.module.css'

const InputText = ({ text, onChange }) => {
  return (
    <div className={css.con}>
      <label htmlFor="desc" className={css.label}>
        텍스트
      </label>
      <input
        type="text"
        id="desc"
        name="desc"
        placeholder="내용 입력..."
        value={text}
        onChange={onChange}
        className={css.input}
      />
    </div>
  )
}

export default InputText
