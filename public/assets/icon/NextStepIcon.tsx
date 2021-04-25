import { VFC } from 'react';

export interface NextStepIcon {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
const SearchIcon: VFC<NextStepIcon> = ({ width = 6, height = 13, className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 6 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6.65625L0.626866 12.6562L-3.75648e-08 11.9563L4.74627 6.65625L-6.06404e-07 1.35625L0.626865 0.65625L6 6.65625Z"
        fill="#818189"
      />
    </svg>
  );
};

export default SearchIcon;
