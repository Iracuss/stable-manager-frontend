import horseIcon from "../../assets/horse-icon.png"
export default function AccountHorseCard({horse}) {

    const getHorseAge = () => {
        const currentYear = new Date().getFullYear();

        const horseAge = currentYear - horse.birthYear;
        return horseAge;
    }

    return (
        <div className="flex flex-row bg-gray-200 rounded-2xl hover:bg-gray-300 justify-center items-center gap-10 transition-colors h-[125px] shadow-md">
            <div className="w-24 h-24 bg-gray-300 rounded-full shrink-0 -translate-x-4">
                <img 
                    src={horseIcon}
                    className="w-24 h-24 border-2 border-black-700 bg-gray-300 rounded-full shrink-0"
                    alt="horse icon"
                />
            </div>
            <h2 className="text-xl font-semibold"><span className="text-3xl font-bold ">Name: </span>{horse.name}</h2>
            <h2 className="text-xl font-semibold"><span className="text-3xl font-bold ">Nickname: </span>{horse.nickname}</h2>
            <h2 className="text-xl font-semibold"><span className="text-3xl font-bold ">Breed: </span>{horse.breed}</h2>
            <h2 className="text-xl font-semibold"><span className="text-3xl font-bold ">Age: </span>{getHorseAge()}</h2>
        </div>
    );
}