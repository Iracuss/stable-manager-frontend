export default function HorseOverview({horse}) {
    return (
        <div className="flex flex-col gap-6 text-gray-700 text-lg">
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p><span className="font-bold text-gray-900">Microchip ID:</span> {horse.microchipId || 'Not Recorded'}</p>
                <p><span className="font-bold text-gray-900">MD Bred Status:</span> {horse.isMdBred ? 'Yes (Registered)' : 'No'}</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="font-bold text-gray-900">Medical Notes & Directives:</p>
                <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/80 min-h-[120px] text-gray-800 whitespace-pre-wrap break-words">
                    {horse.medicalNotes || 'No active medical notes or allergies on file.'}
                </div>
            </div>
        </div>
    );
}