export function ChinesePatternDivider() {
  return (
    <div className="w-full h-24 flex items-center justify-center my-4 overflow-hidden">
      <div className="flex items-center w-full max-w-4xl">
        <div className="h-px bg-gradient-to-r from-transparent via-chinese-red/20 to-transparent flex-grow"></div>
        <div className="mx-4 text-chinese-red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-45"
          >
            <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9z" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-r from-chinese-red/20 via-chinese-red/20 to-transparent flex-grow"></div>
      </div>
    </div>
  )
}
