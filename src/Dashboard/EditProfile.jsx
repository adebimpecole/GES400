import "./EditProfile.css"
import plus1 from "../assets/plus1.svg"
import plus2 from "../assets/plus2.svg"
import prince from "../assets/prince.png"
import back from "../assets/bckgrnd.png"
import { useState } from "react"
import { Form } from "react-router-dom"

const EditProfile = ({isOpen, onClose, coverUrl, profileUrl, username}) => {
    const [cover, setCover] = useState(coverUrl)
    const [profile, setProfile] = useState(profileUrl)


    function showCoverImage(e){
        setCover(URL.createObjectURL(e.target.files[0]))
    }

    function showProfileImage(e){
        setProfile(URL.createObjectURL(e.target.files[0]))
    }

  return (<>
    {isOpen && <Form method="POST" encType="multipart/form-data" className='edit_profile_page'>
        <div className="overlay" onClick={onClose}>
            <div className="edit_profile_section" onClick={(e) => e.stopPropagation()}>
                <div className='eprofile_section1'>
                    <div className="profile_background">
                        <img className='back_profile_picture' alt="pic" src={cover}/>
                        <div className='dark_color'></div>
                        <label htmlFor="files"><img src={plus1} className="upload_icon" alt="icon"/></label>
                        <input onChange={showCoverImage} type="file" className="profile_file1" name="cover" id="files"/>
                    </div>
                    
                    <div className="profile_picture_div">
                        <img className='profile_picture' alt='pic' src={profile}/>
                        <div className='dark_color'></div>
                        <label htmlFor="profile"><img src={plus2} className="upload_icon" alt="icon"/></label>
                        <input onChange={showProfileImage} type="file" className="profile_file1" name="profile" id="profile"/>
                    </div>
                </div>
                <div className='edit_profile_section2'>
                    <div className="profile_form1">
                        <label>
                            User name
                            <input type="text" defaultValue={username} name="username" id="user_name"  className="profile_input" placeholder="Username" required/>
                        </label>
                        <label>
                            Phone number
                            <input type="tel" name="phone" id="phone_number"  className="profile_input" placeholder="Tell attendees who's organizing the event" />
                        </label>
                        <label>
                            Bio
                            <textarea type="text" name="bio_input" id="bio_input"  className="bio_input" placeholder="Tell attendees who's organizing the event" />
                        </label>
                    </div>
                    <div className="profile_form2">
                    <label>
                            Website
                            <input type="url" name="website" id="website"  className="website_url" placeholder="Enter url"/>
                        </label>
                        <label>
                            Facebook
                            <input type="url" name="facebook" id="facebook"  className="facebook_url" placeholder="Enter url"/>
                        </label>
                        <label>
                            Twitter
                            <input type="url" name="twitter" id="twitter"  className="twitter_url" placeholder="Enter url"/>
                        </label>
                        <label>
                            Instagram
                            <input type="url" name="instagram" id="instagram"  className="instagram_url" placeholder="Enter url"/>
                        </label>
                    </div>
                </div>
                <div className="update_div"><button className='update_button'>Update</button></div>
            </div>
        </div>
    </Form>
    }
    </>
  )
}

export default EditProfile