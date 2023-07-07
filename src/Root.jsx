import SideNav from "./Dashboard/SideNav"
import {Outlet} from 'react-router-dom'

const Root = () => {
  return (
    <>
        <SideNav/>
        <Outlet/>
    </>
  )
}

export default Root