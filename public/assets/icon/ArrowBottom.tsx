import { VFC } from 'react';

export interface ArrowBottomProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
const ArrowBottom: VFC<ArrowBottomProps> = ({ width = 24, height = 12, className, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12L0 1.25373L1.4 0L12 9.49254L22.6 0L24 1.25373L12 12Z" fill="#818189" />
    </svg>
  );
};

export default ArrowBottom;
