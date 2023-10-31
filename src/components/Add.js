import React from 'react'
import { useState } from 'react';

const Add = ({onClick}) => {
  const [name,setName] = useState("")
  const [expense,setExpense] = useState("")
  const [income,setIncome] = useState("")
  const [type,setType] = useState("")
  const [catagory,setCatagory] = useState("")
  const [date,setDate] = useState("")


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
      <div>
        <input type="radio" id="expense" name="transaction-type" onChange={(e)=>setType(e.target.value)}></input>
        <label for="expense" id="container-expense">Expense </label>
        <input type="radio" id="income" name="transaction-type" onChange={(e)=>setType(e.target.value)}></input>
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
    <button type="submit">Submit</button>
   </>
  )
}

export default Add