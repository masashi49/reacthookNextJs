import React, { useState, useCallback, useMemo } from "react"
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Button from "../components/Button"
import ButtonScore from "../components/ButtonScore"

// const names: Array<string> = [] // string型の配列
// names[0].split(''); // stringだと保証されているのでsplitを入れてもエラーにならない。

// any型にすると、どんなメソッドもthenで使用できると認識される、numberなのにsplitとか。
// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました") //stringを返している
//   })
// })

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("終わりました") //stringを返している
  })
})
promise.then(data => {
  data.split('') // stringが入っているのがわかっているのでsplit使える
})

// 下記でもmergedObjedtオブジェクトの呼び出しが可能だが、いちいち書くのは面倒くさい
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB)
// }
// const mergedObjedt = merge({ name: "MAx" }, { age: 10 } ) as {
//   name: string;
//   age: number;
// }
// mergedObjedt.age

function merge<T, U>(objA: T, objB: U) { //Object.assignの役割を理解し、交差型を返すと推論する
  return Object.assign(objA, objB)
}
const mergedObjedt = merge({ name: "MAx" }, { age: 10 })
const mergedObjedt2 = merge<{ name: string }, { age: number }>({ name: "MAx" }, { age: 10 }) // ジェネリクスに明示的に型を渡す。こんなことしなくていい。typescriptは自動で引数から読み込んでくれる。

//バグがある
const mergedObjedt3 = merge({ name: "MAx" }, 30) // 2つ目の引数をnumberにしてもエラーがおきない、にもかかわらず、Object.assignは失敗する。
console.log(mergedObjedt3) // {name:"Max"} だけ。numberはmergeされない。


function merge4<T extends object, U extends object>(objA: T, objB: U) { //extends でobject固定とする
  return Object.assign(objA, objB)
}
const merge4dObjedt4 = merge4({ name: "MAx" }, { age: 30 })
console.log(merge4dObjedt4) // 正しくマージされた

interface NAME {
  first: string;
  last: string
}
interface NAME {
  age: number
}
const namedayo: NAME = {
  first: "yamada",
  last: "taro",
  age: 30
}
console.log(namedayo)

type PROF = {
  age: number;
  city: string;
}
type LOGIN = {
  username: string;
  pass: string;
}
type users = PROF & LOGIN // intersection types

const suserA: users = {
  age: 20,
  city: "オーストラリア",
  username: "tarosa-n",
  pass: "string",
}

// Uinon types
let value: boolean | number

value = true
value = 3
// value = "" stringは受け付けていない

let arrayUni: (number | string)[];

arrayUni = [230, ""]
// arrayUni = ["",true,[]] boolと配列は指定外なのでout

// リテラルタイプ
let company: "Facebook" | "google" | "amazon"
company = "amazon"
// company = "yahoo" リテラルタイプ宣言のもの以外は入れれない

let memory: 256 | 512
// memory = 2226 こちらも指定外は無理


// typeof
let msg: string = "Hi"
let msg2: typeof msg // 元の変数のtypeを継承
msg2 = "helllo"
// msg2 = 2 stging以外は無理

//typeof 変数の継承
let animal = { cat: "smlal cat" }
let newAnimal: typeof animal = { cat: "bigCat" }

let msg3 = "hi"
let msg4: typeof msg3;  // すでにある変数の方を継承する

// msg4 = 23 msg３の型なのでnumはダメ

let animal2 = { cat: "small cat" }
let animal3: typeof animal2 // オブジェクトの中にstringという型
// animal3 = { dog:"wan";} catじゃないからだめ
// 複雑なjsonのオブジェクトを変数で受け取っているとき、typeofで構造を継承することで何が抜けているかなどわかりやすくなる

// keyof 型の継承 

type KEYS = {
  primary: string;
  seccondary: string;
}
let key: keyof KEYS
key = "primary" // keyofは、宣言されたものをユニオン型で受けとる
key = "seccondary" // どちらかしかダメ

// typeof + ketof

const SPORTS = {
  scoccedr: "Soccer",
  baseball: "Baseball"
}
let keySprtrs: typeof SPORTS;
keySprtrs = {
  scoccedr: "string",
  baseball: "string",
}

// 変数を型ととして継承し、ユニオン型で指定できるようにする。
let keySports2: keyof typeof SPORTS;
keySports2 = "scoccedr"

// enum型列挙型　自動で連番をつけます
// 下記のように、OSに対して番号がふられている場合。
// windows = 0
// Mac = 1
// Linex = 2
// 仕様書やwikiをみて、0はwindowsなんだなと理解する必要がある。
// それをTypescriptで可視化する。
// オブジェクトを作って変数に格納し、定数を定義てもいいけど、Typescriptはenum型を使えばOK
// TSで保管して候補をあげてくれるので、スペルミスなど減らせる

enum OS {
  Windows,
  Mac,
  Linux
}

interface PC {
  id: number,
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}

const PC2: PC = {
  id: 2,
  OSType: OS.Mac
}



const Home: NextPage = () => {

  const [age, setAge] = useState(0)
  const [score, setScore] = useState(0)

  const incrementScore = useCallback(() => {
    setScore(score + 1)
  }, [score])

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  console.log("a")
  return (
    <div className={styles.container}>
      <h1>typescriptTestのページ</h1>
      <Footer />

      <br /><br />
      <div>
        {score}<br />
        <ButtonScore text={"score Change"} count={score} />
        <ButtonScore text={"Age Change"} count={age} />
        <ButtonScore text={"C"} count={0} />
        <ButtonScore text={"D"} count={0} />
      </div>
      <br /><br />
      <div>
        {age}<br />
        <Button handleClick={incrementScore}>スコアプラス</Button>
        <Button handleClick={incrementAge}>ageマイナス</Button>
      </div>
    </div>
  )
}

export default Home
