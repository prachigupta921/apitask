import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import axios from 'axios';

function App() {
  const [count , setCount] = useState(0);
  const [show, setshow] = useState([]);

  function handlechange(){
    setCount(count+1);
    if(count>=4){
      axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(
        (res)=>{
          console.log(res.data);
          setshow(res.data.name);
        }
      )
    }
  }
  console.log("s".show)
  return (
    <div className="App">{count}
      <button value={count} onClick={handlechange}>Increment</button>
      <button value={count} onClick={()=>setCount(count-1)}>Decrement</button>
      <h1> {show}</h1>
    </div>
  );
}

export default App;
