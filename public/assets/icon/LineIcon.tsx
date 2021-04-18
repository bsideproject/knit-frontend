import { VFC } from 'react';
import styled from '@emotion/styled';

export interface LineIconProps {
  className?: string;
}
const LineIcon: VFC<LineIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="2"
      viewBox="0 0 22 2"
      fill="none"
      className={className}
    >
      <line data-stroke y1="1" x2="22" y2="1" strokeWidth="2" />
    </svg>
  );
};

export default styled(LineIcon)``;
