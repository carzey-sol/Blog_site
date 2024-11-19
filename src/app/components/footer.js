import { FaBlogger, FaRegUserCircle } from "react-icons/fa";

const footer = () => {
    return (
        <div className="flex  h-[70px] rounded justify-between items-center ml-4 mr-4">
            <div className="flex gap-2 items-center">
                <FaBlogger className='text-3xl text-[#004b68]' /> &#169; <p>Crystal Solution. All rights Reserved</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
                <h1 className="font-bold">Contact Us</h1>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}

export default footer