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
            <table className='table table-dark'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Date</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>type</th>
                        <th scope='col'>catagory</th>
                        <th scope='col'>amount</th>
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
                    </tr>
                ))}
                </tbody>
            </table>

            
        </div>
    )
    }

export default Display