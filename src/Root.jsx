import SideNav from "./Dashboard/SideNav"
import {Outlet} from 'react-router-dom'
import { useLoaderData } from "react-router-dom"

const Root = () => {
  const num = useLoaderData()
  console.log(num)
  return (
    <>
        <SideNav/>
        <Outlet/>
    </>
  )
}

export default Root