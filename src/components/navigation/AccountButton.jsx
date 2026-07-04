import { Link } from "react-router-dom";

export default function AccountButton() {
    const savedUser = JSON.parse(localStorage.getItem("user_info"));


    return (
        <div className="">
            {!savedUser ? 
                <Link
                    to="/auth"
                >
                    Login
                </Link> :
                <p>savedUser.username</p>
            }

        </div>
    );
}