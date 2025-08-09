import { useState, useEffect } from "react"
const Account = ({API})=>{
    const[fetchError, SetFetchError]= useState(null)
    const[accounts, SetAccounts]= useState(null)
    useEffect(()=>{
          const loadAccounts= async()=>{
            const data= await API.fetchAccounts()
            if(!data){
            SetFetchError("can't fetch any data") 
            SetAccounts(null)
          }else{
            SetAccounts(data)
            SetFetchError(null)
          }
        }
        loadAccounts()
    },[API])
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