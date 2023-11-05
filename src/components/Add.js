import { Alert } from 'bootstrap';
import React from 'react'
import { useState,useEffect } from 'react';


const Add = ({onSubmit,onUpdate}) => {
  const [name,setName] = useState("")
  const [amount,setAmount] = useState("")
  const [type,setType] = useState("")
  const [catagory,setCatagory] = useState("")
  const [date,setDate] = useState("")

  function onChangeValue(event) {
    setType(event.target.value);
    console.log(event.target.value)
  }

  async function setNegative(amount){
    let result = 0;
    console.log("amount before setNegative: ",amount)
    if (type == "expense"){
      // TODO Set amount to negative value
      result = Math.abs(amount) * -1;
    }
    else if (type == "income"){
      // TODO Set amount to Positive value
      result = Math.abs(amount);
    }
    console.log("setNegative: ",result)
    setAmount(result);
    console.log("amount: ",amount)
    return 
  }

  useEffect(()=>{
    setNegative(amount)
  },[catagory,date])

  async function onSubmit(){
    // console.log(name,expense,type,catagory,date)
    setNegative(amount)

    if (name == "" || amount == "" || type == "" || catagory == "" || date == ""){
      alert("invalid input, please provide all inforamtion about the transaction")
    } else {
      const res = await fetch("http://localhost:5000/transaction",{
        method: "POST",
        mode : "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({name:name,amount:amount,type:type,catagory:catagory,date:date})
      })
      onUpdate()
    }

   
    
  }

  


  return (
    <>
    <div id='container-form'>
      <form>
        <div>
          <label for="name">Transaction Name </label>
          <input type="text" id="name" name="name" autoComplete="off" onChange={(e)=>setName(e.target.value)}/>
        </div>  
        <div>
          <label for="amount">Amount $ </label>
          <input type="number" id="amount" name="amount" autoComplete="off" onChange={(e)=>{setAmount(e.target.value)}}/>
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
    </div>
    <button id='btn-submit' type="submit" onClick={onSubmit}>SUBMIT</button>
   </>
  )
}

export default Add