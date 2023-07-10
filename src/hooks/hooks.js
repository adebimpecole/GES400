// import { useState } from "react";

export function setUserToSession(object){
    sessionStorage.setItem("prim-user", JSON.stringify(object))
}

export function getUserFromSession(){
    let user = sessionStorage.getItem("prim-user")
    return JSON.parse(user)
}


