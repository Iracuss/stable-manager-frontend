import { Link } from "react-router-dom";

export default function AccountButton() {
    return (
        <div className="">
            <Link
                to="/auth"
            >
                Login
            </Link>
        </div>
    );
}