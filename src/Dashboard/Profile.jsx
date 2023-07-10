import "./Profile.css"
import { getUserFromSession } from "../hooks/hooks"

/* eslint-disable react/prop-types */

const Profile = (props) => {
  return (
    <div style={props.style} className="profile">{getUserFromSession()?.username}</div>
  )
}

export default Profile