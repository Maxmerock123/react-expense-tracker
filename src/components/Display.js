import React from 'react'
import { useState,useEffect } from 'react';




const Display = ({onDelete}) => {
    const [items,setItems] = useState([]);

    const fetchData = async ()=>{
        const res = await fetch("http://localhost:5000/transaction");
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



    



    return (
        <div>
            <table className='table table-dark'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Date</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>type</th>
                        <th scope='col'>catagory</th>
                        <th scope='col'>amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                {items.map((item)=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.catagory}</td>
                        <td>{item.amount}</td>
                        <td>
                            <button onClick={onDelete}>x</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <h2>Total Income: {totalIncome}</h2>      
                <h2>Total Expense: {totalExpense}</h2>      
                <h2>Total Remaining: {totalRemaining}</h2>      
            </div>
            
        </div>
    )
    }

export default Display