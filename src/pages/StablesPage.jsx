import { useEffect, useState } from "react";
import StableCard from "../components/stables/StableCard";
import { getAllUserStables } from "../api/StableService";

export default function StablesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [stables, setStables] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getAllUserStables()
        .then((data) => {
            setStables(data);
            setIsLoading(false);
        })
        .catch((err) => {
            // Handle error
            console.error('Failed to get all stables:', err);
            setIsLoading(false);
        });
    }, []);

    if(isLoading) return <div className="p-10 text-center">Loading your stables...</div>;
    
    return (
        <div className="w-screen h-screen p-12">
            {/* Select stables */}
            <div className="flex flex-col border border-gray-200 shadow-md rounded-4xl h-full w-full p-8 gap-4">
                {stables.map((stable) => (
                    <StableCard 
                        key={stable.id}
                        stable={stable} 
                    />
                ))}
            </div>
            {/* Add stable */}

        </div>
    )
}