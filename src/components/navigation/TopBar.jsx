import { Link } from "react-router-dom";
import AccountButton from "./AccountButton";

export default function TopBar() {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-100 shadow-md py-4 px-6 rounded-b-xl">
                <Link
                    to='/'
                >
                    <h1 className="text-xl font-bold text-gray-800">Stable Manager</h1>
                </Link>
                <AccountButton />
            </div>
        </div>
    );
}