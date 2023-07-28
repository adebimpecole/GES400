import "../Dashboard/Home.css"
import date from "../assets/date.svg"
import location from "../assets/location.svg"
import { useState } from "react"

function IconButton({text, icon, onClick}){
    return(
        <button onClick={onClick} className='each_filter'><img src={icon} className='filter_icon' alt='icon'/><span className='filter_text'>{text}</span></button>
    )
}

function Dropdown({text, icon, children}){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="relative flex flex-col justify-center items-center">
            <IconButton text={text} icon={icon} onClick={()=> setIsOpen(!isOpen)}/>
            {isOpen && children && <div onMouseLeave={()=> setIsOpen(false)} className="absolute top-[100%]  z-10 bg-[#133C55] border-white border-[2px] text-white rounded-md mt-1 shadow-xl p-2">
               {children}
            </div>}
        </div>
    )
}

const FilterBox = ({array, onFilterChange}) => {
    

    function handleChange(){

    }

  return (
    <>
        <Dropdown text="Around You" icon={location}>
            <input type="range" min="1" max="5" step="1" list="values"/>
            <datalist id="values">
                <option value="1" label="0"></option>
                <option value="2" label="25"></option>
                <option value="3" label="50"></option>
                <option value="4" label="75"></option>
                <option value="5" label="100"></option>
            </datalist>
        </Dropdown>
    
        <input type="date"/>
        {/* <button className='each_filter'><img src={date} className='filter_icon' alt='icon'/><span className='filter_text'>Any date</span></button> */}
        <span className='each_filter'><span className='filter_text'>Top</span></span>
        <span className='each_filter'><span className='filter_text'>Following</span></span>
    </>
  )
}

export default FilterBox