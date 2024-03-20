import { BsTwitterX } from "react-icons/bs";
import { MdHome } from "react-icons/md";


const Sidebar = () => {
    return (

        <div className="flex flex-col gap-10">
            <a href="/">
                <BsTwitterX className="w-8 h-8" />
            </a>
            <a className="flex gap-2 items-center text-xl font-bold" href="/">
             <MdHome className="w-6 h-6"/>   Home
            </a></div>
    )
}

export default Sidebar;