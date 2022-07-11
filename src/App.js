import React, { useState } from 'react';
import './App.css';
import Recepe from './Recepe';

const YOUR_APP_ID = "121f9329";
const YOUR_APP_KEY = "acf591a2bb9d43f4ed992c8305fa8a53";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(res => res.json())
      .then(data => setData(data.hits))
      console.log(data);
  }
  return (
    <div className="App">
      <center>
        <h1>Food Receipe App </h1>
        <form >
          <div class="input-group mb-3">
            <input type="text" class="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Example: Chicken" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button" onClick={submitHandler} value="Search">Search</button>
              </div>
          </div>
          {/* <input class="form-control" type="text" placeholder='Ex: "Chicken"' onChange={(e)=> setSearch(e.target.value)}/> &nbsp;
        <input type="submit" className="btn btn-primary" value="Search"/> <br/> */}
        </form>
        {data.length >= 1 ? <Recepe data={data} />
          : <h2> No data found. Try another Recipe.</h2>
        }
      </center>
    </div>
  );
}

export default App;
