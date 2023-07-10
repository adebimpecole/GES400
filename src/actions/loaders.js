import { redirect } from "react-router-dom";
import { getUserFromSession } from "../hooks/hooks";

export async function dashboardLoader() {
    console.log('hit here first')
    const user = getUserFromSession()
    
    //if user is not saved in session do not allow further access
    if(!user || !user.token || !user.id || !user.username){
        return redirect('/signup')
    }
    return null
}