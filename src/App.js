import './App.css';
import Add from './components/Add'
import Display from './components/Display'

const fetchData = async ()=>{
  const res = await fetch("http://localhost:5000/transaction");
  if (!res.ok){
    console.log("fail to fetch")
  }
  const data = res.json()
  // await console.log(res.status)
  return data
} 

// async function testPrint() {
//   const result = await fetchData();
//   console.log(JSON.stringify(result))
// }
// testPrint()






function App() {



  const add = ()=>{
    console.log("added")
  }
  return (
    <div>
      <div className="App">
        <h1>Expense Tracker App</h1>
        <Add/>
      </div>
      <div>
        <Display fetchData={fetchData}/>
      </div>
    </div>
  );
}

export default App;
