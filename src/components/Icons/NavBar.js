export const NavBar = ({theme}) => {
  return (
    <svg
      className={`header__bar header__bar_${theme}`}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={'currentColor'} d="M4 8h16v2H4zM4 14h16v2H4z" />
    </svg>
  )
};