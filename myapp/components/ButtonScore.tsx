import React, { useMemo } from "react"

type props = {
  count: number,
  text: string
}

const ButtonScore: React.FC<props> = ({ text, count }) => {
  console.log(text)
  return (
    <div>{count}</div>
  )
}

export default React.memo(ButtonScore)

// React.memo を使用すると、親から受けとったコンポーネントが受け取るpropの比較し、違いがあったらレンダリングする。
// これを使用しないと、1つのコンポーネントが複数箇所で使いまわされている場合、全てレンダリングされる(footerで4ヶ所使用しているため、4かいレンダリングが走る。)
