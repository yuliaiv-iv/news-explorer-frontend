export const Closebtn = ({ onClose, className }) => {
  return (
    <svg
      className={className}
      onClick={onClose}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.357 20L30 27.643A1.667 1.667 0 1127.643 30l-9.293-9.293a1 1 0 010-1.414L27.643 10A1.667 1.667 0 1130 12.357L22.357 20z"
        fill="#fff"
      />
      <path
        d="M18.13 20l-7.642 7.643A1.667 1.667 0 1012.845 30l9.293-9.293a1 1 0 000-1.414L12.845 10a1.667 1.667 0 10-2.357 2.357L18.13 20z"
        fill="#fff"
      />
    </svg>
  )
}
