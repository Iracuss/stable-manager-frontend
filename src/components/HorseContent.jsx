export default function HorseContent({horse}) {
    if(!horse) {
        return (
            <main className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
                <p className="text-xl text-gray-400 font-medium">
                    Select a horse from the sidebar to view details.
                </p>
            </main>
        );
    }
    return (
        <div className="flex flex-1 justify-center">
            <p className="text-5xl text-gray-700 font-sans font-bold pt-12">{horse.name}</p>
        </div>
    );
}