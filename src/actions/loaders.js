import { redirect } from "react-router-dom";
import { getUserFromSession } from "../hooks/hooks";
import axios from "axios";


export async function dashboardLoader({request}) {
    console.log('hit here first')
    const user = getUserFromSession()
    
    //if user is not saved in session do not allow further access
    if(!user || !user.token || !user.id || !user.username){
        return redirect('/signup')
    }

    let endUrl = request.url.replaceAll("\\", '/').split('/').pop()

    if(endUrl == 'manage') return 1
    if(endUrl == 'profile') return 2
    if(endUrl == 'create') return 3
    
    return 0
    console.log(endUrl)
    // return 1
}

export async function manageLoader(){
    try {
        console.log()
        const createdEvents = await axios.get(import.meta.env.VITE_SERVER_URL  + '/api/events?populate=*', {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        return createdEvents.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function homeLoader(){
    try {
        console.log()
        const createdEvents = await axios.get(import.meta.env.VITE_SERVER_URL  + '/api/events?populate=*', {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        return createdEvents.data
    } catch (error) {
        console.log(error)
        return null
    }
}

