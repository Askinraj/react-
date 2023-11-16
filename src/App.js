
import { Route,Routes,Link} from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
function App() {
  return (
    <div >
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/post/:num" element={<Post />}/>
  </Routes>
  <p> <Link to="/home">Click Me</Link></p>
  <p><Link to="/post/1">Post one to view</Link></p>
  <p><Link to="/post/2">Post two to view</Link></p>
    </div>
  );
}

export default App;
