import "./EditProfile.css"
import plus1 from "../assets/plus1.svg"
import plus2 from "../assets/plus2.svg"
import prince from "../assets/prince.png"
import back from "../assets/bckgrnd.png"

const EditProfile = () => {
  return (
    <div className='edit_profile_page'>
        <div className="overlay">
            <div className="edit_profile_section">
                <div className='eprofile_section1'>
                    <div className="profile_background">
                        <img className='back_profile_picture' alt="pic" src={back}/>
                        <div className='dark_color'></div>
                        <input type="file" className="profile_file1" name="files" id="files"/>
                        <label htmlFor="files"><img src={plus1} className="upload_icon" alt="icon"/></label>
                    </div>
                    
                    <div className="profile_picture_div">
                        <img className='profile_picture' alt='pic' src={prince}/>
                        <div className='dark_color'></div>
                        <input type="file" className="profile_file1" name="files" id="files"/>
                        <label htmlFor="files"><img src={plus2} className="upload_icon" alt="icon"/></label>
                    </div>
                </div>
                <div className='edit_profile_section2'>
                    <div className="profile_form1">
                        <label>
                            User name
                            <input type="text" name="username" id="user_name"  className="profile_input" placeholder="Username" required/>
                        </label>
                        <label>
                            Phone number
                            <input type="tel" name="phone" id="phone_number"  className="profile_input" placeholder="Tell attendees who's organizing the event" required/>
                        </label>
                        <label>
                            Bio
                            <textarea type="text" name="bio_input" id="bio_input"  className="bio_input" placeholder="Tell attendees who's organizing the event" required/>
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
                <div className="update_div"><span className='update_button'>Update</span></div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile