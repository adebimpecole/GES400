import "./TagSelector.css"
import { useState } from "react";



const TagSelector = ({items}) => {
  const [tagText, setTagText] = useState([])

  const Pick = (event)=> {
    if(event.currentTarget.classList.contains("pick")){
      removeText(event.currentTarget.innerText)
      event.currentTarget.classList.remove('pick');
    }
    else{
      addIext(event.currentTarget.innerText)
      event.currentTarget.classList.add('pick');
    }
  }

  function addIext(text){
    setTagText([...tagText, text])
  }

  function removeText(text){
    setTagText(tagText.filter(item => item != text))
  }

  return (
    <div className="tag_div relative">
    <span className="date_time_head tag_head">Tags</span>
    <ul className="tags relative z-[3]">
      {
        items && items.map((item, i)=> <li key={i}  className="each_tag" onClick={Pick}>{item}</li>)
      }
    </ul>

    {/* the part below is hidden from the user and will be for submitting the form */}
    <input required title="select at least a tag" className="absolute text-transparent bg-transparent  border-transparent top-0 h-[90%] w-full" name="category" type="text" defaultValue={tagText} />
</div>
  )
}

export default TagSelector