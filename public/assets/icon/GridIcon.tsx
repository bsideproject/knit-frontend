import { VFC } from 'react';
import styled from '@emotion/styled';

export interface GridIconProps {
  className?: string;
}
const GridIcon: VFC<GridIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <rect x="0.5" y="0.5" width="21" height="21" strokeWidth="2" fill="transparent" data-stroke />
      <rect x="7.5" y="0.5" width="7" height="21" strokeWidth="1" fill="transparent" data-stroke />
      <rect x="0.5" y="7.5" width="21" height="7" strokeWidth="1" fill="transparent" data-stroke />
    </svg>
  );
};

export default styled(GridIcon)``;
