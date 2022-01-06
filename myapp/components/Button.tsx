import React, { useMemo } from "react"

type props = {
  handleClick: VoidFunction,
  children: string
}

const Button: React.FC<props> = ({ handleClick, children }) => {
  console.log(children)
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default React.memo(Button)
