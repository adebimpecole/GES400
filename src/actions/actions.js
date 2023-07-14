import axios from "axios";
import { setUserToSession, getUserFromSession } from "../hooks/hooks";
import { redirect } from "react-router-dom";


{/* <input type="text" name="ref" value="api::restaurant.restaurant" />
<input type="text" name="refId" value="5c126648c7415f0c0ef1bccd" />
<input type="text" name="field" value="cover" />
<input type="file" name="cover" className=""/> */}

export async function createAction({request}) {
    const formData = await request.formData();
    
    console.log(formData)
    const updates = Object.fromEntries(formData);

    const startDate = new Date(updates.start_date + ' ' + updates.start_time);
    if(updates.stop_time && updates.stop_date){
        let stopDate = new Date(updates.stop_date + ' ' + updates.stop_time)
        updates.end = stopDate.toISOString()
    }

    updates.createdby =  { "connect" : [getUserFromSession().id]} //attaching id of user who created event
    updates.start = startDate.toISOString() //setting start date to form acceptable by strapi server
    updates.createdby.connect = [Number(getUserFromSession()?.id)]
    
    try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/events?populate=*', {data : updates}, {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        //updating formData to submit and link image to event created above using id
        formData.append("ref", "api::event.event")
        formData.append("refId", res.data.data.id)
        formData.append("field", "cover")

        // console.log(formData)

        const img = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/upload', formData, {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        return redirect('/dashboard/manage')
    } catch (error) {
        console.log(error)
    }

    return null
}

export async function logInAction({request}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/auth/local', updates)
        const {jwt, user : {id , username}} = res.data
        setUserToSession({token: jwt, id, username})
        return redirect('/dashboard')
    } catch (error) {
        console.log(error)
    }

    return null
}

export async function signUpAction({request}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/auth/local/register', updates)
        const {jwt, user : {id , username}} = res.data
        setUserToSession({token: jwt, id, username})
        return redirect('/dashboard')
    } catch (error) {
        console.log(error)
    }

    return null
}