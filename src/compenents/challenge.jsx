// ChallengeCard.jsx
export default function ChallengeCard() {
  return (
    <div className="mx-4 mt-4 bg-white rounded-3xl p-5 shadow-sm flex items-start justify-between gap-4">
      {/* Left content */}
      <div className="flex flex-col gap-3 flex-1">
        {/* Top pill / tag (blurred placeholder — shown as a muted purple pill) */}
        <div className="w-36 h-7 bg-pink-200 rounded-full" />

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          Read 10 pages<br />of a book
        </h2>

        {/* Subtitle */}
        <p className="text-xs text-gray-500 leading-snug max-w-[180px]">
          A little progress today leads<br />to big changes tomorrow
        </p>

        {/* CTA button */}
        <button className="w-40 h-14 bg-purple-300 rounded-2xl mt-1 hover:bg-purple-400 transition-colors duration-200" />
      </div>

      {/* Right illustration */}
      <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 relative">
        {/* Notebook + pencil + flower emoji combo */}
        <div className="relative">
          {/* Notebook icon */}
          <svg
            viewBox="0 0 80 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-28"
          >
            {/* Rings on left */}
            <rect x="2" y="18" width="10" height="8" rx="4" fill="#1a1a1a" />
            <rect x="2" y="38" width="10" height="8" rx="4" fill="#1a1a1a" />
            <rect x="2" y="58" width="10" height="8" rx="4" fill="#1a1a1a" />
            {/* Book body */}
            <rect x="12" y="5" width="58" height="80" rx="6" fill="#1a1a1a" />
            {/* Lines on book */}
            <rect x="22" y="28" width="36" height="4" rx="2" fill="white" opacity="0.85" />
            <rect x="22" y="40" width="36" height="4" rx="2" fill="white" opacity="0.85" />
            <rect x="22" y="52" width="26" height="4" rx="2" fill="white" opacity="0.85" />
          </svg>

          {/* Pencil icon — overlapping bottom-right */}
          <div className="absolute -bottom-2 right-0 text-4xl rotate-12 select-none">✏️</div>

          {/* Rose emoji — bottom-right corner */}
          <div className="absolute -bottom-4 -right-4 flex flex-col items-center">
            <span className="text-3xl select-none">🌹</span>
            <span className="text-2xl select-none">🌿</span>
          </div>

          {/* Sparkles around flower */}
          <span className="absolute top-0 right-0 text-yellow-400 text-base select-none">✦</span>
          <span className="absolute bottom-4 right-10 text-yellow-400 text-xs select-none">✦</span>
        </div>
      </div>
    </div>
  );
}