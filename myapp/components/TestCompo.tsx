import { prependOnceListener } from "process"
import React, { useState } from "react"

interface Props {
    text: string;
    id: number;
}

interface userData {
    id: number;
    name: string;
}

interface inputedesuDeata {
    text: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Inputdesu: React.FC<inputedesuDeata> = (props) => {
    return (
        <div>
            konnnitiwa<br />
            <input type="text" value={props.text} onChange={(e) => { props.onChange(e)}}/>
        </div>
    )
}

const TestCompo: React.VFC<Props> = (props) => {
    const [count, setCount] = useState<number | null>(0)
    const [user, setuser] = useState<userData>({ id: 100, name: "" })
    const [aaarr, setAttr] = useState<number[]>([1, 2, 3, 454, 54, 5, 34,])
    const [inputeData, setInputData] = useState("")

    const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
    }

    const handlers = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value)
    }



    return (
        <>
            <p>
                {props.text}
                {user.id}
                {user.name}
                {
                    aaarr.map((number) =>
                        <span>{number}</span>
                    )
                }
            </p>
            <p>{count}</p>
            <p>propsの方定義</p>
            <p>interfaceで受け取るものを定義するだけ。</p>
            <p>React.VFCとReact.FC</p>
            <p>ここを読む:  https://qiita.com/tttocklll/items/c78aa33856ded870e843</p>
            <input type="text" value={inputeData} onChange={handleInputchange} />
            <p>{inputeData}です！</p>
            <Inputdesu onChange={handlers} text={inputeData} />
        </>
    )
}





export default TestCompo
