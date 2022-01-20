import React from "react"
import Link from 'next/link'

import Title from "./Title"

const Footer = () => {

  return (
    <footer>
      <ul>
        <li><Link href="/" >トップへ</Link></li>
        <li><Link href="about" >このリポジトリについて</Link></li>
        <li><Link href="typescripttest" >TSのテストページ</Link></li>
      </ul>
      <Title />
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
