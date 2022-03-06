import Reactm, { ChangeEventHandler, useState } from "react"
import type { NextPage } from 'next'
import TestCompo from "../components/TestCompo"

interface Props {
  text: string
}

interface UserData {
  id: number;
  name: string;
  login: boolean
}

const TestComponent: React.FC<Props> = (props) => {
  return (
    <div >
      <h1>{props.text}</h1>
    </div>
  )
}

const Riretion: React.FC = () => {
  return (
    <div>
      <p>Hasuraを学ぶ上でリレーションの理解が必要</p>
      <a href="https://coosy.co.jp/blog/web-database-base/"></a>
      リレーションとは関係性を表す。
      1:1 1:n n:nがある。
      ユーザー一人に対してのプロフィール情報は1:1
      ユーザー1人に対して受講できる授業は1:n
      ブログ記事テーブルに対してのタグテーブルはn:n、この場合、中間に位置するテーブルを挟んで整理するとよい。作りながらなれるのが良さそう。
      <p>Foreign Keys</p>
      依存関係のあるテーブル同士を関連づけるためのキー。<br />
      中間テーブルに設定する。<br />
      中間テーブルは勝手に書き換えると、テーブル同士の結びつきがぐちゃるので、決められたもの（結びついているテーブルの値）しかいれることができないように制限する。
    </div>
  )
}

const TestPage: NextPage = () => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "太郎",
    login: false
  })
  const [inputData, setInputData] = useState("")
  const nueId = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("テスト")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }

  return (
    <div>
      <h1><TestComponent text="hello" /></h1>
      {count} <br />
      {user.id}
      {user.name}
      {user.login && "ログインでkkkkkす"}
      <br />
      <button onClick={nueId}>ボタンです</button>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h2>{inputData}</h2>
      <TestCompo id={20} text="hello from App" />
      <Riretion />
    </div>
  )
}

export default TestPage
