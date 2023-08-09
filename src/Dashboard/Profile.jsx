import "./Profile.css"
import { getUserFromSession } from "../hooks/hooks"
import prince from "../assets/prince.png"
import back from "../assets/bckgrnd.png"
import { GoPencil } from "react-icons/go";
import { AiOutlineLink, AiOutlineInstagram } from "react-icons/ai";
import { LiaFacebookSquare, LiaCalendarAlt } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import EditProfile from "./EditProfile";
import useSWR from "swr";
import { fetcher } from "../actions/actions";
import { useState } from "react";

/* eslint-disable react/prop-types */

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data : user } = useSWR(import.meta.env.VITE_SERVER_URL  + `/api/users/${getUserFromSession().id}?populate=*`, fetcher);


  const EditFunction = () => {
    // alert("clicked")
    // props.EditF("open")
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }

  if(user){
    console.log(user)
  }
  return (
    <div className='profile'>
      <div className='profile_section'>
        <div className='profile_section1'>
            <img className='back_picture' alt="pic" src={user?.profile[0]?.url}/>
            <div className="profile_picture_div">
              <img className='profile_picture' alt='pic' src={user?.profile[1]?.url}/>
            </div>
        </div>
        <div className='profile_section2'>
          <h2 className='person_name'>{getUserFromSession()?.username}</h2>
          <span className='user_name'>@{getUserFromSession()?.username}</span>
          <div className='link_and_join'>
              <span className='website'><AiOutlineLink className='link_icon'/>www.jordanhughes.com</span>
              <span className='join_date'><LiaCalendarAlt className='date_icon'/>Joined June 2023</span>
          </div>
          <div className='bio'>
              A passionate event enthusiast with an unquenchable thirst for creating memorable experiences. With a keen eye for detail and a flair for creativity, Jordan Hughes has developed a reputation as a skilled event planner and curator.
          </div>
          <div className='socials'>
            <LiaFacebookSquare/>
            <AiOutlineInstagram/>
            <FiTwitter/>
          </div>
          {user && <div className='edit_link' onClick={EditFunction}>
              <GoPencil className="pencil_icon"/>
              <span className='mini_edit_link' >Edit Profile</span>
          </div>}
        </div>
      </div>
      {user && <EditProfile 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        profileUrl={user?.profile[0]?.url}
        coverUrl={user?.profile[1]?.url}
        username={user.username}
      />}
    </div>
  )
}

export default Profile