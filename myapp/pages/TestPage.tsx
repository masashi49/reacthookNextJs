import React from "react"
import type { NextPage } from 'next'

interface Props {
  text: string
}

const TestComponent: React.FC<Props> = (props) => {
  return (
    <div >
      <h1>{props.text}</h1>
    </div>
  )
}

const TestPage: NextPage = () => {
  return (
    <div>
      <h1><TestComponent text="hello" /></h1>
    </div>
  )
}

export default TestPage
