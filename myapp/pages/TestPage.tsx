import Reactm, { useState } from "react"
import type { NextPage } from 'next'

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

const TestPage: NextPage = () => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "太郎",
    login: false
  })
  const nueId = () => {
    setUser({ ...user, login: true })
  }
  return (
    <div>
      <h1><TestComponent text="hello" /></h1>
      {count} <br />
      {user.id}
      {user.name}
      {user.login && "ログインです"}
      <br />
      <button onClick={nueId}></button>
    </div>
  )
}

export default TestPage
