
import React, { useState } from "react"

function Check() {
  const [countOne, setCoountOne] = useState(0)
  const [countTwo, setCoountTwo] = useState(0)

  const incliment = () => {
    setCoountOne(countOne + 1)
  }
  const inclimentTwo = () => {
    setCoountTwo(countTwo + 1)
  }

  const isEven = () => {
    return countOne % 2 === 0
  }
  return (
    <div>
      カウント1 : {isEven() ? "偶数" : "奇数"}
      <button onClick={incliment}>カウント1 = {countOne}</button>
      <button onClick={inclimentTwo}>カウント2 = {countTwo}</button>
    </div>
  )
}

export default Check
