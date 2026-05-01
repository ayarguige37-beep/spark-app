// Header.jsx
export default function Header() {
  return (
    <div className="flex items-start justify-between px-4 pt-6 pb-2 bg-pink-100">
      {/* Left: Avatar + Greeting */}
      <div className="flex flex-col gap-1">
        {/* Avatar icon */}
        <div className="w-10 h-10 flex items-center justify-center">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <circle cx="20" cy="14" r="7" stroke="#1a1a1a" strokeWidth="2.2" fill="none" />
            <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* dot accent */}
            <circle cx="8" cy="6" r="2" fill="#1a1a1a" />
            <circle cx="32" cy="6" r="2" fill="#1a1a1a" />
          </svg>
        </div>

        {/* Greeting */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-gray-900 leading-tight">Hello.Aya</span>
          <span className="text-2xl">✋</span>
        </div>

        {/* Subtitle */}
        <p className="text-sm text-gray-600 font-normal">Lets make today amazing</p>
      </div>

      {/* Right: Settings + Sparkle */}
      <div className="relative mt-1">
        {/* Purple circle background */}
        <div className="w-14 h-14 rounded-full bg-purple-300 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <path
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              stroke="#1a1a1a" strokeWidth="1.8" fill="none"
            />
            <path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              stroke="#1a1a1a" strokeWidth="1.8" fill="none"
            />
          </svg>
        </div>
        {/* Yellow sparkle */}
        <span className="absolute -bottom-1 -left-1 text-yellow-400 text-xl">✦</span>
      </div>
    </div>
  );
}
