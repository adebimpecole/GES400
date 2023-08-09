import axios from "axios";
import { getUserFromSession, setUserToSession } from "../hooks/hooks";
import { redirect } from "react-router-dom";
import prince from '../assets/prince.png'

export async function logInAction({request}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    try {
        const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/auth/local', updates)
        const {jwt, user : {id , username}} = res.data
        setUserToSession({token: jwt, id, username})
        return redirect('/dashboard')
    } catch (error) {
        sessionStorage.removeItem("prim-user")
        if(error?.response?.data?.error?.message) return error?.response?.data?.error?.message + '/' + Date.now() 
        else return error?.message
    }
}

export async function signUpAction({request}){
    // const profileImg = new File(prince)
    const formData = await request.formData();

    try {
        // const res = await axios.post(import.meta.env.VITE_SERVER_URL + '/api/auth/local/register', formData)
        // const {jwt, user : {id , username}} = res.data
        // if(!id){
        //     return 'Something went wrong'
        // }
        // const img = new Image(prince)
        const dummyBlob = await fetch(prince).then(res => res.blob())
        const file = new File([dummyBlob], "capture.png", {
            type: 'image/png'
        });
        formData.append("ref", "plugin::users-permissions.user")
        formData.append("refId", 1)
        formData.append("field", "profile")
        formData.append("files", file)
        formData.append("files", file)
        // formData.set("profile", [file, formData.get("profile")])

        const updates = Object.fromEntries(formData);
        console.log(updates)

        await axios.post(import.meta.env.VITE_SERVER_URL + '/api/upload', formData, {
            headers:{
                'Authorization' : 'Bearer ' + getUserFromSession().token
            }
        })




        // setUserToSession({token: jwt, id, username})
        return redirect('/dashboard')
    } catch (error) {
        console.log(error)

        if(error?.response?.data?.error?.details?.errors) return error?.response?.data?.error?.details?.errors?.map(err => err.message)?.join(", ")
        if(error?.response?.data?.error?.message) return error?.response?.data?.error?.message + '/' + Date.now()
        else return error?.message
    }
}