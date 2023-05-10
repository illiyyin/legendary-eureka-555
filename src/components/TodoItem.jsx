/* eslint-disable no-unused-vars */
import React from 'react'
import style from '../App.module.css'

const TodoItem = ({ todo }) => {
  return (
    <div className={style["nama-card"]}>
      <p>{todo.title}</p>
    </div>
  )
}

// const style = {
//   border: '2px solid #f4f4f4',
//   fontSize: '24px',
// }

export default TodoItem