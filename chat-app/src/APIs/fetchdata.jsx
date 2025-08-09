import supabase from "../config/supabase"
export const API=()=>{
    const fetchAccounts= async()=>{
    try {
        const {data, error}= await supabase
        .from("accounts")
        .select("*")
        if(error){
            console.log("Error", error.message)
            return null
        }
        return data
    } catch (err) {
        console.log("Unexpected error:", err)
        return null
    }
}
 const addData= async(username)=>{
    try {
        const {data, error}= await supabase
        .from("accounts")
        .insert({first_name: username})
        if(error){
            console.log("Error", error.message)
            return null
        }
        return data
    } catch (err) {
        console.log("Unexpected error:", err)
        return null
    }
}
return {addData,fetchAccounts}
}
