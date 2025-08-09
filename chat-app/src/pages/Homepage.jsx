import { Link } from "react-router-dom"
const HomePage = ()=>{

    return(
        <div className="page home">
            <Link to="/">
            <h1> home</h1>
            </Link>
             <Link to="/create">
            <h1> Create Account</h1>
            </Link>
             <Link to="/account">
            <h1>Display Accounts</h1>
            </Link>
        </div>
    )
}
export default HomePage