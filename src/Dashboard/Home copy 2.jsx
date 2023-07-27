import "./Home.css"

import EventCard from "../components/EventCard"
import useSWR from "swr";
import useSWRInfinite from 'swr/infinite'
import { fetcher, handleHeartClick } from "../actions/actions"
import Loading from "./Loading"
import { getUserFromSession } from "../hooks/hooks"
// import axios from "axios"
import Search from "../components/Search";
import FilterBox from "../components/FilterBox";
import { useEffect, useState } from "react";

import Fuse from 'fuse.js'
import { Spinner } from "flowbite-react";


/* eslint-disable react/prop-types */
const Pager = ({current = 0, totalItemsPerPage, max = 10, onUpdate}) => {

    const [currentIndex, setCurrentIndex] = useState(current)

    function updateCurrent(val){
        if(currentIndex > 0 && val < 0) setCurrentIndex(currentIndex + val);
        if(currentIndex < max && val > 0 ) setCurrentIndex(currentIndex + val);
        // console.log(currentIndex)
        if(onUpdate) onUpdate(currentIndex, totalItemsPerPage, max)
    }

    return(
        <div className="flex items-center justify-end mt-4 pb-4">
            <button style={{visibility : `${currentIndex == current ? 'hidden' : 'visible'}`}} onClick={()=> updateCurrent(-1)} className="rounded-none rounded-l-full py-1 px-2">prev</button>
            <p className="border-black border-[1px] py-1 px-3 inline-block">{currentIndex}</p>
            <button style={{visibility : `${currentIndex == max ? 'hidden' : 'visible'}`}} onClick={()=> updateCurrent(1)} className="rounded-none rounded-r-full py-1 px-2">next</button>
        </div>
    )
}

// const HomeComponent = ({pageNumber}) => {
//     const { data : allEvents, error, isLoading } = useSWR(import.meta.env.VITE_SERVER_URL  + searchURL, fetcher, {revalidateOnMount : true});

// }

const getKey = (pageIndex , previousPageData) => {
    // console.log('here', pageIndex, previousPageData)
    pageIndex++
    if (previousPageData && !previousPageData.data.length) return null // reached the end
    return import.meta.env.VITE_SERVER_URL  + `/api/events?sort=createdAt:desc&populate=*&pagination[pageSize]=25&pagination[page]=${pageIndex}`                   // SWR key
}


const Home = (props) => {
    // const [searchURL, setSearchURL] = useState()
    const { data : allEvents, error, isLoading, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher, {revalidateAll : true});
    //event accumulator will be used to store the events as they come in incrementally
    const [eventAccumulator, setEventAccumulator] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [searchVal, setSearchVal] = useState('')


    if(allEvents){
        // console.log('allEvents', allEvents)
    } 

    useEffect(()=>{
        let flattedEvents = allEvents?.map(data => data["data"])?.flat()
        console.log('all' , flattedEvents)
        if(flattedEvents) setEventAccumulator(flattedEvents)
    }, [allEvents])


    function onSearchChange(e){
        setSearchVal(e.target.value)
    }


    function onPageChange(current, total, max){
        console.log(current, total, max)
        console.log(allEvents)
        console.log(allEvents?.meta?.pagination?.page)
    }
    // console.log(allEvents)
  return (
    <div className='home' style={props.style}>
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Home</h3>
                <h4 className='section_subhead'>Discover Events</h4>
                <div className='filters'>
                    <FilterBox array={allEvents}/>
                    <Search onChange={onSearchChange} value={searchVal}/>
                    <button onClick={() => setSize((size) => size + 1)}>Hola</button>
                </div>
            </div>
            <div className='home_section2'>
                {
                    filteredEvents?.length > 0 ? filteredEvents?.map(data => 
                        <EventCard 
                         key={data.id} 
                         title={data.attributes.name} 
                         type={data.attributes.type} 
                        //  url={import.meta.env.VITE_SERVER_URL + data.attributes.cover.data.attributes.url}
                         url={data.attributes.cover.data.attributes.url}
                         style={"event"}
                         like={Boolean(data.attributes.likedby.data.find(x => x.id == getUserFromSession()?.id))}
                         afterClick={handleHeartClick}
                         eventId={data.id}
                        />
                    )
                    :
                    eventAccumulator?.map(data => 
                        <EventCard 
                         key={data.id} 
                         title={data.attributes.name} 
                         type={data.attributes.type} 
                        //  url={import.meta.env.VITE_SERVER_URL + data.attributes.cover.data.attributes.url}
                         url={data.attributes.cover.data.attributes.url}
                         style={"event"}
                         like={Boolean(data.attributes.likedby.data.find(x => x.id == getUserFromSession()?.id))}
                         afterClick={handleHeartClick}
                         eventId={data.id}
                        />
                    )
                }
                {
                   !isLoading && !allEvents && <p className="italic text-gray-300">No Events yet</p>
                }
            </div>
            {
                isValidating   &&  <div className="flex justify-center">
                                    <Spinner size='xl'/>
                                </div>
            }
            {allEvents && <Pager 
                max={allEvents?.meta?.pagination?.pageCount} 
                current={allEvents?.meta?.pagination?.page}
                onUpdate={onPageChange}/>}
        </div>

        {/* {isLoading && <Loading isopen={true}/>} */}
    </div>
  )
}

export default Home