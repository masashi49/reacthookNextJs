import React, { useState, useCallback } from "react"
import Link from 'next/link'
import Button from "./Button"
import ButtonScore from "./ButtonScore"
import Title from "./Title"

const Footer = () => {

  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  const incrementScore = useCallback(() => {
    setScore(score + 1)
  }, [score])

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  return (
    <footer>
      <ul>
        <li><Link href="/" >トップへ</Link></li>
        <li><Link href="about" >このリポジトリについて</Link></li>
      </ul>
      <Title />
      <div>
        {score}<br />
        <ButtonScore text={"スコアプラス"} count={score} />
        <ButtonScore text={"Ageマイナス"} count={age} />
      </div>

      <div>
        {age}<br />
        <Button handleClick={incrementScore}>ageプラス</Button>
        <Button handleClick={incrementAge}>ageマイナス</Button>
      </div>
    </footer>
  )
}

export default Footer
