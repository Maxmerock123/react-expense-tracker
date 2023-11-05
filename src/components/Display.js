import React from 'react'
import { useState,useEffect } from 'react';




const Display = ({onUpdate}) => {
    const [items,setItems] = useState([]);

    const fetchData = async ()=>{
        const res = await fetch("http://localhost:5000/transaction",{
            mode:  "cors"
        });
        const data = await res.json()
        setItems(data)
        
        return data
    }

    useEffect(()=>{
        fetchData()
    },[]);


    var totalIncome = 0;
    var totalExpense = 0;
    var totalRemaining = 0;
    function getAmountSum(items){
        items.map((item)=>{
            totalRemaining += parseFloat(item.amount);

            if (item.type == "income"){
                totalIncome += parseFloat(item.amount);
            }
            else if (item.type == "expense") {
                totalExpense += parseFloat(item.amount);
            }
        })
        return;
    }
    getAmountSum(items)

    function onDeleteCheck(event){
        if (window.confirm("delete the transaction?")){
            onDelete(event)
        } else {
            console.log("canceled delete")
            return 0
        }
    }
    async function onDelete(event){
        console.log("item.id = ",event.currentTarget.id)
        const id = event.currentTarget.id
        const res = await fetch(`http://localhost:5000/transaction/${id}`,{method:'DELETE',mode:  "cors"})
        .then(res => res.json())
        .then((result)=>{
            console.log(result)
        })
        await onUpdate();
    }

    


    



    return (
        <div>
            <div id='container-table'>
                <table className='table'>
                    <thead className='table-head'>
                        <tr className='table-row'>
                            <th scope='col'>Date</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map((item)=>(
                        <tr id='container-items'>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.catagory}</td>
                            <td>{item.amount}</td>
                            <td>
                                <button id={item.id}  onClick={onDeleteCheck}>x</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                    <div id='container-total'>
                        <div id='total'>
                            <h3 className='income-text'>Total Income: {totalIncome}</h3>      
                            <h3 className='expense-text'>Total Expense: {totalExpense}</h3>      
                            <h3>Total Remaining: {totalRemaining}</h3>      
                        </div>
                    </div>
            </div>

            
        </div>
    )
    }

export default Display