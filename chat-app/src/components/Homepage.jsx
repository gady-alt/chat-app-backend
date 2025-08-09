import supabase from "../config/superbase"
const HomePage = ()=>{
    console.log(supabase)
    return(
        <div className="page home">
            <h1> home</h1>
        </div>
    )
}
export default HomePage