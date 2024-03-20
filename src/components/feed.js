import { useEffect, useState } from "react";
import axios from 'axios';
import Search from "./search";
import Sidebar from "./sidebar";
import { BsTwitterX } from "react-icons/bs";

const Feed = () => {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/posts`);
        const userResponse = await axios.get(`${process.env.REACT_APP_API}/users`)

        console.log(userResponse.data[0].name);
        setData(response.data)
        setUserData(userResponse.data)
    }

    useEffect(() => {
        if (data.length === 0) {
            fetchData();
        }
    }, [data])

    return (
        <div className="overflow-auto  xl:w-[40%] -mt-10">
              <a href="/" className="flex items-center my-10 mx-5 lg:hidden block ">
                <BsTwitterX className="w-8 h-8"/>
            
            </a>
            <p className="font-bold border-[0.3px] border-stone-700 px-4 py-5 text-2xl">For You</p>
            
            <div className="border-x-[0.3px] border-stone-700 ">
            
            {data && userData ? (<div>
                {data.map((feed, idx) => (
                    <div className="relative p-4 py-6 border-b-[1px] border-stone-700 shadow-lg"> 
                        <a href={`/posts/${feed.id}`} >
                            <div className="flex items-start gap-5">
                                <div className="rounded-full border-[0.5px] border-stone-400 p-2 px-4">
                                    {feed.id}
                                </div>
                                <div>{feed.title}</div></div>

                            <div className="ml-16 -mt-2">{(feed.body).substring(0, 50)} ...... more</div>

                        </a>
                        <a href={`/users/${userData[feed.userId] && userData[feed.userId].id}`} className="absolute right-0 mb-5 px-4 hover:border-stone-400 hover:rounded-2xl hover:border-[1px]">
                            <span className=" text-gray-400">By : </span> {userData[feed.userId] && userData[feed.userId].name}
                            </a>
                    </div>
                ))}
            </div>)
                : <>Loading...</>}
        </div>
        </div>
        
    )
}

export default Feed;