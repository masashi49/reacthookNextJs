import React from "react"

interface Props {
    text: string
}

const TestCompo: React.VFC<Props> = (props) => {

    return (
        <>
            <p>
                {props.text}
            </p>
            <p>propsの方定義</p>
            <p>interfaceで受け取るものを定義するだけ。</p>
            <p>React.VFCとReact.FC</p>
            <p>ここを読む:  https://qiita.com/tttocklll/items/c78aa33856ded870e843</p>
        </>
    )
}

export default TestCompo
