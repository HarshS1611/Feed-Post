import { useState } from "react";
import axios from 'axios';
import { CiSearch } from "react-icons/ci";


const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [postId, setPostId] = useState('')

    const handleSearch = async (input) => {
        let response;
        if (!isNaN(input) && input <=100) {
            response = await axios.get(`${process.env.REACT_APP_API}/posts/${input}`);
        } 
        if(response){
            setSearchResults([response.data]);
        }else{
            setSearchResults([])
        }
    }

    return (
        <div className="text-white w-[20%]">
            <div>
                <div className="flex items-center bg-gray-600 rounded-full w-max">
                <CiSearch className="w-6 h-6 ml-4 text-gray-50"/>
                <input className="text-white bg-gray-600 p-4 rounded-full focus-none outline-none" type="text" placeholder="Search by postId" onChange={(e) => handleSearch(e.target.value)} />
                </div>

                {searchResults ? (searchResults.map((result, idx) => (
                    <div className="border-[1px] p-2  mt-5 border-stone-700 rounded-2xl" key={idx}>
                        <a href={`/posts/${result.id}`}>
                        <p><span className="text-gray-400">UserId : </span>{result.userId} </p>

                        <p><span className="text-gray-400">Title :</span> {result.title}</p>
                        <p><span className="text-gray-400">Body :</span> {result && result.body && (result.body).substring(0,50)}.... more</p>
                        </a>
                    </div>
                ))) : <>Loading..</>}
            </div>
        </div>
    )
}

export default Search;