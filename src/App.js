
import { Route,Routes,Link} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
import { useRef, useState } from "react";
import { VscAdd } from "react-icons/vsc";
function App() {
  const [name,setName]=useState('');
  const names=['clinton','jerome','churchil'];
  var num = Math.floor(Math.random()*3);
  const namesChange = ()=>{
    setName(names[num]);
  }
  const ref =useRef();
  return (
    <div >
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/post/:num" element={<Post />}/>
  </Routes>
  <p> <Link to="/home">Click Me</Link></p>
  <p><Link to="/post/1">Post one to view</Link></p>
  <p><Link to="/post/2">Post two to view</Link></p>
  <p onClick={namesChange}>hi every on my name is {name}</p>
<label htmlFor="na">Enter the name</label>
  <input id="na" ref={ref} placeholder="enter the name "/>
  <VscAdd onClick={()=>ref.current.focus()}/>
    </div>
  );
}

export default App;
