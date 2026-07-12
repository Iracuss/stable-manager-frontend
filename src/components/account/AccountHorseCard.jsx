import horseIcon from "../../assets/horse-icon.png"
export default function AccountHorseCard({horse}) {

    const getHorseAge = () => {
        const currentYear = new Date().getFullYear();

        const horseAge = currentYear - horse.birthYear;
        return horseAge;
    }

    return (
        <div className="flex flex-row bg-gray-200 rounded-2xl hover:bg-gray-300 justify-center items-center gap-2 transition-colors h-[125px] shadow-md w-full overflow-hidden">
            
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-12">
                <img 
                    src={horseIcon}
                    className="w-24 h-24 border-2 border-black-700 bg-gray-300 rounded-full shrink-0"
                    alt="horse icon"
                />
            </div>
            <div className="flex flex-row flex-1 items-center justify-between min-w-0 gap-4 pr-12">
                <h2 className="text-xl font-semibold flex flex-col items-baseline flex-1 min-w-0" title={horse.name}>
                    <span className="text-3xl font-bold shrink-0 mr-2">Name:</span>
                    <span className="truncate w-full">{horse.name}</span>
                </h2>

                <h2 className="text-xl font-semibold flex flex-col items-baseline flex-1 min-w-0" title={horse.nickname}>
                    <span className="text-3xl font-bold shrink-0 mr-2">Nickname:</span>
                    <span className="truncate w-full">{horse.nickname}</span>
                </h2>

                <h2 className="text-xl font-semibold flex flex-col items-baseline flex-1 min-w-0" title={horse.breed}>
                    <span className="text-3xl font-bold shrink-0 mr-2">Breed:</span>
                    <span className="truncate w-full">{horse.breed}</span>
                </h2>

                <h2 className="text-xl font-semibold flex flex-col items-baseline shrink-0">
                    <span className="text-3xl font-bold shrink-0 mr-2">Age:</span>
                    <span>{getHorseAge()}</span>
                </h2>
            </div>
        </div>
    );
}