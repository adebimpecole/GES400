import '../Dashboard/Home.css'
import search from "../assets/search.svg"

const Search = ({onChange, value}) => {
  return (
    <span className="search_box"><img src={search} className="search_icon" alt="icon"/>
        <input value={value} type="text" className="search" placeholder="Search events" onChange={onChange}/>
    </span>
  )
}

export default Search