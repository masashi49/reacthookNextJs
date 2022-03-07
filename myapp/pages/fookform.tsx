import React from "react"
import { appendErrors, useForm } from "react-hook-form"
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'


const FookForm: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data: object): void => {
    console.log(data)
  }
  console.log(watch("watchする")) // 変更された内容をwatchできる
  return (
    <div className={styles.container}>
      <h1>React hook form</h1>

      {
        //handleSubmit は、「onSubmit」を呼び出す前に入力を検証します
      }
      <form onSubmit={handleSubmit(onSubmit)}>

        <dl>
          <dt>register(登録)機能を呼び出して、入力をhookに登録します</dt>
          <dd><input defaultValue="姓" {...register("sei")} /></dd>
          <dt>defaultValueで初期値を設定できる</dt>
          <dd><input defaultValue={"名"} {...register("mei")} /></dd>
          <dd><input placeholder={"18"} {...register("age")} /></dd>
          <dt> required はオプションで、必須項目を表す</dt>
          <dd><input defaultValue={"必須"}{...register("hissu", { required: true })} /></dd>
          <dd>{errors.hissu && <span>必須項目です</span>}</dd>
          <dt> registerに登録したものは、errorsオブジェクトで状態を把握できる。errorがあるとテキストを表示する↓</dt>
          <dt>文字数の設定 : minLength, maxLength</dt>
          <dd><input type="number" {...register("phone", {
            required: true,
            minLength: 4,
            maxLength:5
          })} /></dd>
          <dd>{errors.phone && console.log(errors.phone)}</dd>
        </dl>

        <input type="submit" />
      </form>
    </div>
  )
}

export default FookForm
