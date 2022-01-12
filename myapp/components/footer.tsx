import React, { useState, useCallback, useMemo } from "react"
import Link from 'next/link'
import Button from "./Button"
import ButtonScore from "./ButtonScore"
import Title from "./Title"

const Footer = () => {

  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  const incrementScore = useCallback(() => {
    setScore(score + 1)
  },[score])

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  console.log("a")
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
        <ButtonScore text={"C"} count={0} />
        <ButtonScore text={"D"} count={0} />
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

// 親に更新が走ると、親がレンダリングする
// 　それに紐づく子供もレンダリングされる。
// React.memoあり
//　　propsを監視しているので、propsに変化がないものはレンダリングされない。　
//     ButtonScoreにReact.memoをおくと、text={"C"}とtext={"D"}は変化ないので、親がレンダリングされてもこの2つはレンダリングされない。
//　　　Buttonは、メソッドを受け取っているので、React.memoだけだと親レンダリングの影響を受ける。(メソッドはレンダリングのたびに別オブジェクトとして認識されるため)
//     これを回避するのにuseCallbackが必要、これを仕込めばメソッドも親レンダリングの影響を防ぐ
