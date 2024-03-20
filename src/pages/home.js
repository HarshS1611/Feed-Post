import Feed from "../components/feed"
import Search from "../components/search"
import Sidebar from "../components/sidebar"

export default function Home() {
    return (
        <div className='relative flex justify-center xl:h-[890px] h-[1000px] xl:gap-10 my-10 xl:ml-16'>
            <div className="flex flex-col gap-5 justify-start">
            <Sidebar />
            <div className="mr-10 xl:hidden"><Search/></div>
            </div>
            <Feed />
            <div className="hidden xl:block ">
            <Search />
            </div>
        </div>
    )
};