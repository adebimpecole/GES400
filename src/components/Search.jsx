import '../Dashboard/Home.css'
import search from "../assets/search.svg"

const Search = ({onChange, value}) => {
  return (
    <div className='search_div'>
      <span className="search_box">
          <img src={search} className="search_icon" alt="icon"/>
          <input value={value} type="text" className="search" placeholder="Search events..." onChange={onChange}/>
      </span>
    </div>
  )
}

export default Search