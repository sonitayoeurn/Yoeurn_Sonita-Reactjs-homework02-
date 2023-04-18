import React from 'react'

const Btn = ({title,btnStyle}) => {
    const defualtStyle = {style: "backgroundColor: red"}
    const defualtTitle ="click me"
  return (
    <button className={btnStyle?btnStyle: defualtStyle}>
        {title?title:defualtTitle}
    </button>
  )
}

export default Btn