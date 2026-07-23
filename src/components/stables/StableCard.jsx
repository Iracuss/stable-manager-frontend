import { Link } from "react-router-dom";

export default function StableCard({stable}) {
    return (
        <Link
            to={`/dashboard/${stable.id}`}
        >
            <div className="flex w-fill px-12 py-8 rounded-2xl border border-gray-200 shadow-sm items-center justify-between hover:bg-gray-200 active:bg-gray-300 active:border-gray-300 transition-colors">
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold">{stable.name}</h1>
                    <h1><span className="font-semibold">Owner: </span>username</h1>
                </div>

                <h1 className="text-xl"><span className="font-semibold">Members: </span>1</h1>
                <h1 className="text-xl"><span className="font-semibold">Horses: </span>0</h1>
            </div>
        </Link>
    )
}