
const TOTAL_DAYS = 7;
const COMPLETED_DAYS = 3; 

export default function Streak({ completedDays = COMPLETED_DAYS, totalDays = TOTAL_DAYS }) {
  return (
    <div className="mx-4 mt-5 bg-white rounded-3xl px-5 py-4 shadow-sm">
      <div className="flex items-center gap-4">
       
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
          <span className="text-3xl select-none">🔥</span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <span className="text-base font-bold text-gray-900">7Day Streak</span>

          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalDays }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full transition-all duration-300 ${
                  i < completedDays
                    ? "bg-pink-400 shadow-sm"
                    : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}