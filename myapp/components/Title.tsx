import React from "react"

const Title = () => {
  console.log("タイトル")
  return <div>たいとる</div>
}

export default React.memo(Title) // react.memo を使用することで不要なレンダリングを防いだ
