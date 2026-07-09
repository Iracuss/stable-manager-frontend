import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { updateAccount } from "../../api/userService";

export default function AccountEditForm({setIsEditing}) {
    const {user, setUser} = useAuth();
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            username: username,
            email: email
        }
        setUser(updatedUser);
        await updateAccount(updatedUser);
        setIsEditing(false);
        nav("/me");
    }

    return (
        <div className="flex flex-row w-1/2">
            <form onSubmit={handleSubmit} className="gap-3 w-full flex flex-col">
                <div className="flex flex-row gap-3">
                    <div className="flex-1 flex-col">
                        <h1 className="pb-1 pl-1">Username</h1>
                        <input 
                            type="text"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
                            placeholder="Username"
                        />
                    </div>
                    <div className="flex-1 flex-col">
                    <h1 className="pb-1 pl-1">Email</h1>
                        <input 
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <button 
                    type="submit"
                    className="h-11 bg-black text-white font-medium rounded-xl hover:bg-blue-400 hover:text-black active:bg-blue-300 transition-colors"
                >
                    Save Edit
                </button>
            </form>
        </div>
    );
}