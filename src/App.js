import { useEffect, useState } from 'react';
import './App.css';
import Add from './components/Add'
import Display from './components/Display'


const fetchData = async ()=>{
  const res = await fetch("http://localhost:5000/transaction",{
    mode:  "cors"
  });
  if (!res.ok){
    console.log("fail to fetch")
  }
  const data = res.json()
  // await console.log(res.status)
  return data
} 












function App() {
  const [onUpdate,setUpdate] = useState(false)

  useEffect(()=>{
    console.log("rendered")
  })

  function handleUpdate(){
    setUpdate(!onUpdate);
  }


  const add = ()=>{
    console.log("added")
  }
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Geologica"></link>
      <div className="App">
        <div id='logo-container'>
          <h1 id='logo'>Expense Tracker App</h1>
        </div>
        <Add onUpdate={handleUpdate} key={onUpdate}/>
      </div>
      <div>
        <Display onUpdate={handleUpdate} key={onUpdate}/>
      </div>
    </div>
  );
}

export default App;
