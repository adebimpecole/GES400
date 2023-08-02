import "./TagSelector.css"
import { useState } from "react";



const TagSelector = ({items}) => {
  const [tagText, setTagText] = useState([])

  const Pick = (event)=> {
    if(event.currentTarget.classList.contains("pick")){
        // setTagText((text) => text += event.currentTarget.innerText)
        event.currentTarget.classList.remove('pick');
    }
    else{
        setTagText(tagText => tagText.push(event.currentTarget.innerText))
        console.log(event.currentTarget.innerText)
        event.currentTarget.classList.add('pick');
    }
  }

  return (
    <div className="tag_div">
    <span className="tag_header">Tags</span>
    <ul className="tags">
      {
        items && items.map((item, i)=> <li key={i} className="each_tag" onClick={Pick}>{item}</li>)
      }
    </ul>

    {/* the part below is hidden from the user and will be for submitting the form */}
    <input type="text" defaultValue={tagText}/>
</div>
  )
}

export default TagSelector