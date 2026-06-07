import HorseTab from "./HorseTab";

export default function SideBar({horses}) {
    return (
        <div className="w-70 bg-gray-200 min-h-screen p-4 border-r border-gray-300">
            <div>
                <p className="text-2xl font-sans font-bold text-center">Horses</p>
                {horses.map((horse) => (
                    <div className="pt-5">
                        <HorseTab key={horse.name} horseData={horse} />
                    </div>
                ))}
            </div>
        </div>
    );
}