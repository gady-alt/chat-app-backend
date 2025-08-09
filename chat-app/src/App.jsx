import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/Homepage"
import Create from "./pages/Create"
import Account from "./pages/Acount"
import { API } from "./APIs/fetchdata"
function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<Create/>}/>
       <Route path="/account" element={<Account API={API()}/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App
