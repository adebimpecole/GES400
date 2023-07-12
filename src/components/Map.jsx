import {useState, useEffect, useRef, Suspense} from 'react'
import PropTypes from 'prop-types';
import { Spinner } from 'flowbite-react';
import axios from 'axios'
import locate from "../assets/location.svg"
import { Tooltip } from 'flowbite-react';

const Map = () => {
    const [searchTxt, setSearchTxt] = useState('')
    const [sugestions, setSuggestions] = useState([])
    const [searching, setSearching] = useState(false)
    const [currentLocationChoosen, setCurrentLocationChoosen] = useState(false)
    const userPos = useRef({lat: '4.8472', lon: '6.9746'})
    const [eventPos, setEventPos] = useState({lat: '', lng: ''})
    const timeoutID = useRef('')
    const closeSuggestionBox = useRef(false)
    

    useEffect(()=>{

        const suggest = async () =>{
            // fetch(`https://autosuggest.search.hereapi.com/v1/autosuggest?q=ecobank%20obio&at=4.8472,8.6753&in=countryCode:NGA&limit=10&apiKey=5y2zHwbPFj0aT7ZDSdlfF8OKHz1iwJ2uuqowbesXLa4`)
            if(!searchTxt || closeSuggestionBox.current) return; //if searchText is empty make no request to api

            setSearching(true)
            axios.get('https://autosuggest.search.hereapi.com/v1/autosuggest', {
                params: {
                    apiKey:'5y2zHwbPFj0aT7ZDSdlfF8OKHz1iwJ2uuqowbesXLa4',
                    q:searchTxt,
                    at:`${userPos.current.lat},${userPos.current.lon}`,
                    in:'countryCode:NGA',
                    limit:'5'
                }
              })
              .then(function (response) {
                setSuggestions(response.data.items)
                setSearching(false)
                // console.log(response.data.items);
                updateEventPos()
              })
              .catch(function (error) {
                setSearching(false)
                console.log(error);
              }) 
        }

        if(timeoutID.current) clearTimeout(timeoutID.current) //if user types again when request is about to be made, Cancel request.
        timeoutID.current = setTimeout(suggest, 1000) //only make api request after user has stopped typing for a while

    }, [searchTxt])

    function handleChange(e){//updates search value
        closeSuggestionBox.current = false
        setSearchTxt(e.target.value)
    }

    function getUserCurrentPos(){ //sets user positin using geolocation API
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {coords : {latitude, longitude}} = position
                userPos.current.lat = latitude
                userPos.current.lon = longitude
              });
        }
    }

    function update(e){
        if(e.target.innerText){
            closeSuggestionBox.current = true
            updateEventPos()
            // setSuggestions([])
            setSearchTxt(e.target.innerText)
        }

        // console.log(eventPos)
    }

    function Label( {text, onClick}){//coponent for each suggested item
        return(
            <label tabIndex="0" onClick={onClick} className='hover:bg-teal-600 hover:text-white py-1 px-2 text-[12px] md:text-[16px] italic text-gray-400'>{text}</label>
        )
    }

    Label.propTypes = {
        text : PropTypes.string.isRequired,
        onClick : PropTypes.func
    }

    function close(e){//closses the suggestion box
        if(e.key){
            if(e.key !== 'Enter') return;
        }
        updateEventPos()
        setSuggestions([])
        closeSuggestionBox.current = true
    }

    

    function updateEventPos(){ // this function is for setting the latitude and longitude of the event from the suggestion box to be sent to the server
        // console.log(sugestions)
        
        let choosenSuggestion = sugestions.find((suggestion)=> suggestion.address?.label == searchTxt)
        if(choosenSuggestion){
            console.log(choosenSuggestion.position)
            setEventPos(choosenSuggestion.position)
            setCurrentLocationChoosen(false)
        } 
        // console.log(choosenSuggestion)
    }

    async function chooseCurrentLocation (){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const {coords : {latitude, longitude}} = position
                userPos.current.lat = latitude
                userPos.current.lon = longitude
                //set event position to the current user positio
                setEventPos({lat : latitude, lng : longitude})
                setCurrentLocationChoosen(true)

                // console.log(userPos.current)
                await axios.get('https://revgeocode.search.hereapi.com/v1/revgeocode', {
                    params: {
                        apiKey:'5y2zHwbPFj0aT7ZDSdlfF8OKHz1iwJ2uuqowbesXLa4',
                        in:`circle:${userPos.current.lat},${userPos.current.lon};r=1000`,
                        limit:'5'
                    }
                  })
                  .then(function (response) {
                    setSuggestions(response.data.items)
                  })
                  .catch(function (error) {
                    setSearching(false)
                    console.log(error);
                  }) 
              });
        }
    }

    return (
  
        <div onMouseLeave={close} className='relative w-full flex justify-center gap-0 flex-col '>
            <input onSubmit={(e)=> e.preventDefault()} name='location' onKeyDown={close} value={searchTxt} onFocus={getUserCurrentPos} placeholder='Search...' onChange={handleChange} className='p-4 rounded-md'/>
            {searching ? 
                <Spinner className='absolute top-0 right-2 h-full' aria-label="Default status example" /> 
                : 
                <div onClick={chooseCurrentLocation} className={`bg-transparent absolute top-2 bottom-2 right-2 w-6 bg-contain bg-center bg-no-repeat bg-[url("/location.svg")] hover:cursor-pointer  ${currentLocationChoosen ? 'bg-teal-200' : null}`}></div>
            }
            <div className='bg-white w-full absolute top-[30px] shadow-xl rounded-b-md [&>*:nth-child(even)]:border-y-[1px] [&>*:nth-child(even)]:border-y-gray-300'>
                {
                    
                    sugestions.length >= 1 &&
                    sugestions.map((suggestion, id) => 
                    <Label 
                        key={id} 
                        text={suggestion.address? suggestion.address.label : suggestion.title}
                        onClick={update}
                    />)
                }
            </div>
            <input className='absolute top-11 hidden' type='text' name="lon" defaultValue={eventPos.lng} />
            <input className='absolute top-16 hidden' type='text' name="lat" defaultValue={eventPos.lat} />
        </div>
    )
}

export default Map