import { VFC } from 'react';

export interface SearchIconProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
const SearchIcon: VFC<SearchIconProps> = ({ width = 21, height = 22, className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20.7307L15.514 16.2367M18 10.2307C18 12.4851 17.1045 14.6471 15.5104 16.2411C13.9163 17.8352 11.7543 18.7307 9.5 18.7307C7.24566 18.7307 5.08365 17.8352 3.48959 16.2411C1.89553 14.6471 1 12.4851 1 10.2307C1 7.97637 1.89553 5.81436 3.48959 4.22031C5.08365 2.62625 7.24566 1.73071 9.5 1.73071C11.7543 1.73071 13.9163 2.62625 15.5104 4.22031C17.1045 5.81436 18 7.97637 18 10.2307Z"
        stroke="#5C16CB"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
