import { VFC } from 'react';
import styled from '@emotion/styled';

export interface FontColorProps {
  className?: string;
}
const Conatiner = styled.div``;

const FontColor: VFC<FontColorProps> = ({ className }) => {
  return (
    <Conatiner className={className}>
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.55362 14H6.22762V2.21002H10.2236V0.788025H0.557617V2.21002H4.55362V14Z"
          fill="#505055"
        />
      </svg>

      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 -6.10352e-05H6V5.99994H0V-6.10352e-05Z" fill="#505055" />
      </svg>
    </Conatiner>
  );
};

export default FontColor;
