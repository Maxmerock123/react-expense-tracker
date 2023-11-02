import React from 'react'
import { useState,useEffect } from 'react';




const Display = ({transactionJson}) => {
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

    useEffect(()=>{
        console.log(items)
    },[items])



    



    return (
        <div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>type</th>
                    <th>catagory</th>
                    <th>amount</th>
                </tr>
                {items.map((item)=>(
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.catagory}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
                
            </table>
        </div>
    )
    }

export default Display