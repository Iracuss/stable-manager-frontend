import { Link } from "react-router-dom";

export default function StableButton() {
    return (

        
        <Link
            to='/dashboard'
        >
            <h1 className="inline-block text-xl font-semibold text-white bg-black rounded-xl py-2 px-12 hover:bg-gray-800 active:bg-gray-700 transition-colors">Dashboard</h1>
        </Link>
    )
}