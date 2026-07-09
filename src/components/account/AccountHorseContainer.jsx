import AccountHorseCard from "./AccountHorseCard";

export default function AccountHorseContainer({horses}) {


    return (
        <div className="flex flex-col w-full h-fit px-12 pb-6">
            {horses.map((horse) => (
                <div key={horse.id} className="flex-1 py-4 px-20">
                    <AccountHorseCard horse={horse} />
                </div>
            ))}
        </div>
    );
}