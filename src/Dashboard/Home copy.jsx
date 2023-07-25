import "./Home.css"

import EventCard from "../components/EventCard"
import useSWR from "swr";
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

const HomeComponent = ({pageNumber}) => {
    const { data : allEvents, error, isLoading } = useSWR(import.meta.env.VITE_SERVER_URL  + searchURL, fetcher, {revalidateOnMount : true});

}


const Home = (props) => {
    const [searchURL, setSearchURL] = useState('/api/events?sort=createdAt:desc&populate=*&pagination[pageSize]=2&pagination[page]=1')
    const { data : allEvents, error, isLoading } = useSWR(import.meta.env.VITE_SERVER_URL  + searchURL, fetcher, {revalidateOnMount : true});
    //event accumulator will be used to store the events as they come in incrementally
    const [eventAccumulator, setEventAccumulator] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [searchVal, setSearchVal] = useState('')

    // useEffect(()=> {
    //     filter(searchVal)
    //     console.log(searchVal)
    // }, [searchVal])

    // function filter(text){
    //     const options = {
    //         includeScore: true,
    //         keys: ['attributes.name']
    //     }

    //     const fuse = new Fuse(allEvents?.data, options)
    //     if(text){
    //         let result = fuse.search(text)
    //         result = result.map(data => data?.item)

    //         console.log(result)
    //         setFilteredEvents(result)
    //     }
    //     else setFilteredEvents([])
    // }
    useEffect(()=> {
        // console.log('got', allEvents, allEvents?.meta?.pagination?.pageCount, allEvents?.meta?.pagination?.page)
        
        // console.log(eventAccumulator)
        if(allEvents?.data){
            let {meta : {pagination : {page:currentPage , pageSize, pageCount:lastPage, total}}} = allEvents
            setEventAccumulator([...eventAccumulator, ...allEvents.data])

            if(currentPage != lastPage){
                fetchNext(currentPage + 1) //if current page isn't last fetch next page
                return
            }

            console.log('got', currentPage, pageSize, lastPage, total)
        }
    }, [allEvents])

 
    function onSearchChange(e){
        setSearchVal(e.target.value)
    }

    
    function fetchNext(pageToFetch){ 
        //this function is for fetching the data incrementally so it 
        //does not take too much time and does not put a lotta weight 
        //on the frontend
        setSearchURL(`/api/events?sort=createdAt:desc&populate=*&pagination[pageSize]=2&pagination[page]=${pageToFetch}`)
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
                isLoading   &&  <div className="flex justify-center">
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