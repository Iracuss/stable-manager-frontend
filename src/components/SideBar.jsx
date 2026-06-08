import HorseTab from "./HorseTab";

export default function SideBar({horses, onSelectedHorse, onAddHorse}) {
    return (
        <div className="w-70 bg-gray-200 p-4 border-r border-gray-300 flex flex-col">
            <div className="flex-1 overflow-y-auto">
                <p className="text-2xl font-sans font-bold text-center">Horses</p>
                {horses.map((horse) => (
                    <div key={horse.id} className="pt-5">
                        <HorseTab 
                            horseData={horse} 
                            onTabClick={onSelectedHorse}
                            onAddHorse={onAddHorse}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-center">
                <button 
                    onClick={() => {
                        onAddHorse(true)
                    }}
                    className="w-60 h-10 rounded-3xl bg-black text-white font-sans hover:bg-gray-800 active:bg-gray-700 transition-colors"
                >
                    Add Horse
                </button>
            </div>
        </div>
    );
}