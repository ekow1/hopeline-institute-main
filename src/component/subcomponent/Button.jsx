
import {FiArrowUpRight, FiArrowLeft} from "react-icons/fi";



const Button = ({content}) => {
    return (
        <>
            <button type="button"
                    className='   cursor-pointer  flex items-center justify-center   gap-2  px-3 py-2 outline outline-2 hover:bg-green-700 ease-in-out duration-200 hover:text-white  hover:outline-none hover:transition-all'>
                {content}

              <FiArrowUpRight className="transform hover:rotate-45 transition-transform duration-300"  />
            </button>

        </>
)
}


export default Button