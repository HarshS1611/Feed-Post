import { useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "../components/sidebar";
import Search from "../components/search";
import { useParams } from "react-router-dom";


const FeedDetails = () => {
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([])
    const { id } = useParams();


    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API}/posts/${id}/comments`);
        const response1 = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`);

        console.log(response.data);
        setData(response1.data)
        setComments(response.data)
    }

    useEffect(() => {
        if (data.length === 0) {
            fetchData();
        }
    }, [data])

    return (
        <div className="flex gap-10 h-[870px] justify-center my-10 ml-16">
            <Sidebar/>
            <div className="overflow-auto w-[40%]">

            {data ? (<div className="flex flex-col border-[0.5px] rounded-2xl p-5 border-stone-700 pb-5 gap-2">
                <div><span className="text-gray-400">UserId : </span>{data.userId}</div>
                <div><span className="text-gray-400">Title : </span>{data.title}</div>
                <div><span className="text-gray-400">Body : </span>{data.body}</div>
            </div>) : <>Loading...</>}

            <div className="text-xl font-semibold mt-2">
                Comments
            </div>


            {comments ? (<div>
                {comments.map((feed, idx) => (
                    <div className="py-5 px-6 border-b-[0.5px] border-stone-700" key={idx}>
                        <div className="flex items-center gap-5">
                            <div className=" p-2">
                            <span className="text-gray-400">Email :</span>  {feed.email}
                            </div>
                            <div><span className="text-gray-400">Name :</span> {feed.name}</div></div>

                        <div className="ml-2 mt-5"><span className="text-gray-400">Body :</span> {(feed.body)}</div>

                    </div>
                ))}
            </div>)
                : <>Loading...</>}
        </div>
        <Search/>
        </div>
    )
}

export default FeedDetails;