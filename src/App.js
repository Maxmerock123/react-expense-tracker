import { useEffect, useState } from 'react';
import './App.css';
import Add from './components/Add'
import Display from './components/Display'
import 'bootstrap/dist/css/bootstrap.css';

const fetchData = async ()=>{
  const res = await fetch("http://localhost:5000/transaction");
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
      <div className="App">
        <h1>Expense Tracker App</h1>
        <Add onUpdate={handleUpdate} key={onUpdate}/>
      </div>
      <div>
        <Display onUpdate={handleUpdate} key={onUpdate}/>
      </div>
    </div>
  );
}

export default App;
