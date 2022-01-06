import React, { useMemo } from "react"

type props = {
  count: number,
  text: string
}

const ButtonScore: React.FC<props> = ({ text, count }) => {
  console.log(text)
  return (
    <div>{ count}</div>
  )
}

export default React.memo(ButtonScore)
