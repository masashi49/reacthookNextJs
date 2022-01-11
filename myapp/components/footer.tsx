import React, { useState, useCallback, useMemo } from "react"
import Link from 'next/link'
import Button from "./Button"
import ButtonScore from "./ButtonScore"
import Title from "./Title"

const Footer = () => {

  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  const incrementScore = () => {
    setScore(score + 1)
  }

  const incrementAge = () => {
    setAge(age + 1)
  }

  return (
    <footer>
      <ul>
        <li><Link href="/" >トップへ</Link></li>
        <li><Link href="about" >このリポジトリについて</Link></li>
      </ul>
      <Title />
      <br /><br />
      <div>
        {score}<br />
        <ButtonScore text={"score Change"} count={score} />
        <ButtonScore text={"Age Change"} count={age} />
        <ButtonScore text={"CCCC"} count={0} />
        <ButtonScore text={"DDDD"} count={0} />
      </div>
      <br /><br/>
      <div>
        {age}<br />
        <Button handleClick={incrementScore}>スコアプラス</Button>
        <Button handleClick={incrementAge}>ageマイナス</Button>
      </div>
    </footer>
  )
}

export default Footer
