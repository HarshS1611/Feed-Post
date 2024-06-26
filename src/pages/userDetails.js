import { useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "../components/sidebar";
import Search from "../components/search";
import { useParams } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";


const UserDetails = () => {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);
    const { id } = useParams();

    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/users/${id}/posts`);
        const userResponse = await axios.get(`${process.env.REACT_APP_API}/users`)

        console.log(userResponse.data);
        setUserData(userResponse.data)
        setData(response.data)
    }

    useEffect(() => {
        if (data.length === 0) {
            fetchData();
        }
    }, [data])

    return (
        <div className="flex flex-col lg:flex-row h-[870px] gap-10 justify-center my-10 mx-5 lg:ml-16">
            <div className="hidden lg:block flex flex-col gap-5 justify-start">
            <Sidebar />
            {/* <div className="mr-10 xl:hidden"><Sidebar/></div> */}
            </div>
            <a href="/" className="flex items-center mx-5 lg:hidden block ">
                <BsTwitterX className="w-8 h-8"/>
            
            </a>
            <div className="overflow-auto xl:w-[40%]">


                {
                    userData && userData.map((user,idx) => {
                        if (user.id === parseInt(id)) {
                            console.log(user)
                            return (
                                <div className="flex flex-col border-[0.5px] rounded-2xl p-5 border-stone-700 pb-5 gap-2">
                                    <div><span className="text-gray-400">UserId : </span>{user.id}</div>
                                    <div><span className="text-gray-400">Name : </span>{user.name}</div>
                                    <div><span className="text-gray-400">Username : </span>@{user.username}</div>
                                    <div><span className="text-gray-400">Email : </span>{user.email}</div>
                                </div>
                              
                            )
                        }
                    })

                }

                <div className="text-xl font-semibold mt-2">
                    Posts by You
                </div>


                {data ? (<div>
                    {data.map((feed, idx) => (
                        <a href={`/posts/${feed.id}`}>
                            <div className="py-5 px-6 border-b-[0.5px] border-stone-700" key={idx}>
                                <div className="flex items-center gap-5">
                                    <div className="rounded-full border-stone-700 border-[0.5px] p-2 px-4">
                                        {feed.id}
                                    </div>
                                    <div><span className="text-gray-400">Title :</span> {feed.title}</div></div>

                                <div className="ml-2 mt-5"><span className="text-gray-400">Body :</span> {(feed.body)}</div>

                            </div>
                        </a>
                    ))}
                </div>)
                    : <>Loading...</>}
            </div>
            <div className="hidden xl:block ">
            <Search />
            </div>
        </div>
    )
}

export default UserDetails;