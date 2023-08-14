import "./Home.css"

import EventCard from "../components/EventCard"
import useSWR from "swr";
// import useSWRInfinite from 'swr/infinite'
import { fetcher, handleHeartClick } from "../actions/actions"
// import Loading from "./Loading"
import { getUserFromSession } from "../hooks/hooks"
// import axios from "axios"
import Search from "../components/Search";
import FilterBox from "../components/FilterBox";
import { useEffect, useState } from "react";

import Fuse from 'fuse.js'
// import { Spinner } from "flowbite-react";


/* eslint-disable react/prop-types */


const HomeComponent = ({pageNumber, text}) => {
    const { data : allEvents } = useSWR(import.meta.env.VITE_SERVER_URL  + `/api/events?sort=createdAt:desc&populate=*&pagination[pageSize]=25&pagination[page]=${pageNumber}`, fetcher, {revalidateOnMount : true, refreshWhenHidden : true, refreshInterval : 200});
    const [filteredEvents, setFilteredEvents] = useState([])
    useEffect(()=> {
        if(text){
            filter(text)
        }
    }, [text])

    function filter(text){
        const options = {includeScore: true, keys: ['attributes.name']}

        const fuse = new Fuse(allEvents?.data, options)
        if(text){
            let result = fuse.search(text)
            result = result.map(data => data?.item)
            setFilteredEvents(result)
        }
        else setFilteredEvents([])
    }

    return(
        <>
            {
                text ?
                filteredEvents?.map(data => 
                    data && data?.attributes?.live == true && <EventCard 
                        key={data?.id} 
                        title={data?.attributes?.name} 
                        type={data?.attributes?.type} 
                    //  url={import.meta.env.VITE_SERVER_URL + data.attributes.cover.data.attributes.url}
                        interested={data?.attributes?.likedby?.data?.length}
                        url={data?.attributes?.cover?.data?.attributes?.url}
                        style={"event"}
                        like={Boolean(data?.attributes?.likedby?.data?.find(x => x.id == getUserFromSession()?.id))}
                        afterClick={handleHeartClick}
                        eventId={data?.id}
                        going={data?.attributes?.tickets?.data?.length}
                    />
                )
                :
                allEvents?.data?.map(data => 
                    data && data?.attributes?.live == true && <EventCard 
                        key={data?.id} 
                        title={data?.attributes?.name} 
                        type={data?.attributes?.type} 
                    //  url={import.meta.env.VITE_SERVER_URL + data.attributes.cover.data.attributes.url}
                        interested={data?.attributes?.likedby?.data?.length}
                        url={data?.attributes?.cover?.data?.attributes?.url}
                        style={"event"}
                        like={Boolean(data?.attributes?.likedby?.data?.find(x => x.id == getUserFromSession()?.id))}
                        afterClick={handleHeartClick}
                        eventId={data?.id}
                        going={data?.attributes?.tickets?.data?.length}
                    />
                )
            }
        </>
    )
}



const Home = (props) => {
    const { data : allEvents } = useSWR(import.meta.env.VITE_SERVER_URL  + `/api/events?sort=createdAt:desc&populate=*&pagination[pageSize]=25`, fetcher, {revalidateOnMount : true});
    const [total, setTotal] = useState([])
    const [searchVal, setSearchVal] = useState('')

    useEffect(()=>{
        if(allEvents?.meta){
            let arr = []
            
            for(let i = 1; i <= allEvents.meta.pagination.pageCount; i++){
                arr.push(i)
            }

            setTotal(arr)
        } 
    }, [allEvents])


    function onSearchChange(e){
        setSearchVal(e.target.value)
    }
    // console.log(allEvents)
  return (
    <div className='home' style={props.style}>
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Home</h3>
                <h4 className='section_subhead'>Discover Events</h4>
                <div className='filters'>
                    <FilterBox />
                    <Search onChange={onSearchChange} value={searchVal}/>
                </div>
            </div>
            <div className='home_section2'>
               {
                    total?.map(pageNum => <HomeComponent key={pageNum} text={searchVal} pageNumber={pageNum}/>)
               }
            </div>
        </div>
    </div>
  )
}

export default Home