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

    console.log(request.url)
    if(endUrl == 'manage') return 1
    if(endUrl == 'profile') return 2
    if(endUrl == 'create') return 3
    if(endUrl == 'tickets') return 4
    
    
    return 0
    // return 1
}

export async function manageLoader(){
    // try {
    //     console.log()
    //     const createdEvents = await axios.get(import.meta.env.VITE_SERVER_URL  + '/api/events?populate=*', {
    //         headers:{
    //             'Authorization' : 'Bearer ' + getUserFromSession().token
    //         }
    //     })

    //     return createdEvents.data
    // } catch (error) {
    //     console.log(error)
    //     return null
    // }
    return null
}

export async function homeLoader(){
    // try {
    //     console.log()
    //     const createdEvents = await axios.get(import.meta.env.VITE_SERVER_URL  + '/api/events?populate=*', {
    //         headers:{
    //             'Authorization' : 'Bearer ' + getUserFromSession().token
    //         }
    //     })

    //     return createdEvents.data
    // } catch (error) {
    //     console.log(error)
    //     return null
    // }

    return null
}

export async function eventLoader({params}){
    const eventId = params?.eventId
    
    console.log(eventId)  
    if(eventId) return eventId
    return null
}

export async function analyticsLoader({params}){
    const eventId = params?.eventId
    
    console.log(eventId)  
    if(eventId) return eventId
    return null
}

