import supabase from "../config/superbase"
import { useState, useEffect } from "react"
const Account = ()=>{
    const[fetchError, SetFetchError]= useState(null)
    const[accounts, SetAccounts]= useState(null)
    useEffect(()=>{
        const fetchAccounts= async()=>{
            const{data, error}= await supabase
            .from("accounts")
            .select()
            
            if(error){
                SetFetchError("Couldn't fetch no account")
                SetAccounts(null)
            }
            if(data){
                console.log(data)
                SetAccounts(data)
                SetFetchError(null)
            }
        }
        fetchAccounts()
    },[])
    return(
        <div className="page Account">
            <h1> Account</h1>
            <hr/>
            {fetchError && <h3>{fetchError}</h3>}
            {accounts && accounts.map(acc => (
            <h2 key={acc.id}>{acc.first_name}</h2>
))}
        </div>
    )
}
export default Account