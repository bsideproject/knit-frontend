import { VFC } from 'react';

export interface HeadingCollapseIconProps {
  className?: string;
}

const HeadingCollapseIcon: VFC<HeadingCollapseIconProps> = () => {
  return (
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.34961 1.3501L4.84961 4.8501L1.34961 1.3501"
        stroke="#999999"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default HeadingCollapseIcon;
