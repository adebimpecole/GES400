import axios from "axios";
import { getUserFromSession } from "../hooks/hooks";


{/* <input type="text" name="ref" value="api::restaurant.restaurant" />
<input type="text" name="refId" value="5c126648c7415f0c0ef1bccd" />
<input type="text" name="field" value="cover" />
<input type="file" name="cover" className=""/> */}

export async function createAction({request}) {
    const formData = await request.formData();
    
    const updates = Object.fromEntries(formData);
    console.log(updates)

    const startDate = new Date(updates.start_date + ' ' + updates.start_time);
    if(updates.stop_time && updates.stop_date){
        let stopDate = new Date(updates.stop_date + ' ' + updates.stop_time)
        updates.end = stopDate.toISOString()
    }

    updates.createdby =  { "connect" : [getUserFromSession().id]} //attaching id of user who created event
    updates.start = startDate.toISOString() //setting start date to form acceptable by strapi server
    updates.createdby.connect = [Number(getUserFromSession()?.id)]
    
    try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/events', {data : updates}, {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        //updating formData to submit and link image to event created above using id
        formData.append("ref", "api::event.event")
        formData.append("refId", res.data.data.id)
        formData.append("field", "cover")

        await axios.post(import.meta.env.VITE_SERVER_URL + '/api/upload', formData, {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })

        // return redirect('/dashboard/manage')
        return true
    } catch (error) {
        console.log(error)
    }

    return null
}



export const fetcher = (url) =>
    axios
      .get(url, { headers: { Authorization: "Bearer " + getUserFromSession()?.token } })
      .then((res) => res.data);

export async function handleHeartClick(isLiked, eventID){
    isLiked = !isLiked //note to self: react value for this will be delayed b/c itll only be updated after setState
    console.log(typeof(getUserFromSession().id))
    try {
        if(isLiked){
            // axios.put(import.meta.env.VITE_SERVER_URL + `/api/users/${getUserFromSession().id}`, 
            // {data : {likes : {connect : [eventID]} }}, { headers: { Authorization: "Bearer " + getUserFromSession()?.token } })

            await axios.put(import.meta.env.VITE_SERVER_URL + `/api/events/${eventID}`, 
            {data : {likedby : {connect : [getUserFromSession()?.id]} }}, { headers: { Authorization: "Bearer " + getUserFromSession()?.token } })
        }
        else{
            // axios.put(import.meta.env.VITE_SERVER_URL + `/api/users/${getUserFromSession().id}`, 
            // {data : {likes : {disconnect : [eventID]} }}, { headers: { Authorization: "Bearer " + getUserFromSession()?.token } })

            await axios.put(import.meta.env.VITE_SERVER_URL + `/api/events/${eventID}`, 
            {data : {likedby : {disconnect : [getUserFromSession()?.id]} }}, { headers: { Authorization: "Bearer " + getUserFromSession()?.token } })
        }
        

        return true
    } catch (error) {
        return false
    }
}