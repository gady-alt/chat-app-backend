import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import HomePage from "./components/Homepage"
import Create from "./components/Create"
import Acount from "./components/Acount"
function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<Create/>}/>
       <Route path="/acount" element={<Acount/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
