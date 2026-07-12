export default function HorseContentTitle({horse}) {
    return (
        <div className="flex flex-row gap-6 justify-between">
            <div className="flex-col flex items-start px-12 flex-1 min-w-0 w-1/2">
                <h2 className="text-5xl text-gray-700 font-sans font-bold pb-6 truncate w-full">{horse.name}</h2>
                <p className="truncate w-full"><span className="font-bold text-gray-900">Nickname:</span> {horse.nickname}</p>
            </div>
            <div className="flex flex-col gap-2 text-lg text-gray-700 items-end text-right pr-12 flex-1 min-w-0 w-1/2">
                <p className="truncate w-full"><span className="font-bold text-gray-900">Breed:</span> {horse.breed}</p>
                <p className="truncate w-full"><span className="font-bold text-gray-900">Birth Year:</span> {horse.birthYear}</p>
                <p className="truncate w-full"><span className="font-bold text-gray-900">Born in: </span> {horse.foalingState}</p>
            </div>
        </div>

    );
}