import { useState } from "react"

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit() {

    }
    
    function onCancel() {

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                    <input 
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
                        placeholder="Password"
                    />
                </div>

                <div className="flex gap-3 mt-2">
                    <button 
                        type="button" 
                        onClick={onCancel} // Closes the form without saving
                        className="flex-1 h-11 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
                    >
                        Cancel
                    </button>
                    
                    <button 
                        type="submit" // Triggers the form's onSubmit handler
                        className="flex-1 h-11 bg-black hover:bg-gray-800 text-white font-medium rounded-xl transition-colors"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}