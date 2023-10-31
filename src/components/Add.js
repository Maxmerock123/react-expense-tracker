import React from 'react'
import { useState } from 'react';

const Add = ({onClick}) => {
  const [name,setName] = useState("")
  const [expense,setExpense] = useState("")
  const [income,setIncome] = useState("")
  const [catagory,setCatagory] = useState("")
  const [date,setDate] = useState("")

  return (
    <>
    <form>
      <div>
        <label for="name">Transaction Name </label>
        <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
      </div>  
      <div>
        <label for="expense">expense </label>
        <input type="number" id="expense" name="expense" onChange={(e)=>setExpense(e.target.value)}/>
      </div>  
      <div>
        <label for="income">Amount </label>
        <input type="number" id="income" name="income" onChange={(e)=>setIncome(e.target.value)}/>
      </div>  
      <div>
        <lable for="catagory-form">Catagory </lable>
        <select name="catagory" form="catagory-form" onChange={(e)=>setCatagory(e.target.value)}>
          <option value="none">-Select a Catagory-</option>
          <option value="food-beverage">food-beverage</option>
          <option value="transport">transport</option>
          <option value="bill">bill</option>
          <option value="shopping">shopping</option>
          <option value="others">others</option>
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