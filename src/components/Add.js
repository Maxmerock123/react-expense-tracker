import React from 'react'
import { useState } from 'react';

const Add = () => {
  const [name,setName] = useState("")
  const [expense,setExpense] = useState("")
  const [type,setType] = useState("")
  const [catagory,setCatagory] = useState("")
  const [date,setDate] = useState("")

  function onChangeValue(event) {
    setType(event.target.value);
    console.log(event.target.value)
  }

  function onSubmit(){
    console.log(name,expense,type,catagory,date)
  }


  return (
    <>
    <form>
      <div>
        <label for="name">Transaction Name </label>
        <input type="text" id="name" name="name" autocomplete="off" onChange={(e)=>setName(e.target.value)}/>
      </div>  
      <div>
        <label for="expense">Amount $ </label>
        <input type="number" id="amount" name="amount" autocomplete="off" onChange={(e)=>setExpense(e.target.value)}/>
      </div>  
      <div onChange={onChangeValue}>
        <input type="radio" id="expense" name="type" value="expense"></input>
        <label for="expense" id="container-expense">Expense </label>
        <input type="radio" id="income" name="type"  value="income"></input>
        <label for="income" id="container-income">Income </label>
      </div>  
      <div>
        <lable for="catagory-form">Catagory </lable>
        <select name="catagory" form="catagory-form" onChange={(e)=>setCatagory(e.target.value)}>
          <option value="none">-Select a Catagory-</option>
          <option value="food-beverage">Food-beverage</option>
          <option value="transport">Transport</option>
          <option value="bill">Bill</option>
          <option value="shopping">Shopping</option>
          <option value="salary">Salary</option>
          <option value="gift">Gift</option>
          <option value="others">Others</option>
        </select>
      </div>  
      <div>
        <label for="date" >Date </label>
        <input type="date" id="date" name="date" onChange={(e)=>setDate(e.target.value)}/>
      </div>
    </form>
    <button type="submit" onClick={onSubmit}>Submit</button>
   </>
  )
}

export default Add