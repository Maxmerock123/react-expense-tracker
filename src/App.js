import './App.css';
import Add from './components/Add'



function App() {



  const add = ()=>{
    console.log("added")
  }
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <Add/>
    </div>
  );
}

export default App;
