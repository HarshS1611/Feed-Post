import Feed from "../components/feed"
import Search from "../components/search"
import Sidebar from "../components/sidebar"

export default function Home() {
    return (
        <div className='relative flex justify-center gap-10 my-10 ml-16'>
            <Sidebar />
            <Feed />
            <Search />
        </div>
    )
};