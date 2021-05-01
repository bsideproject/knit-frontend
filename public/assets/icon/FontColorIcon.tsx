import { VFC } from 'react';

export interface FontColorProps {
  className?: string;
}

const FontColor: VFC<FontColorProps> = () => {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.55362 14H6.22762V2.21002H10.2236V0.788025H0.557617V2.21002H4.55362V14Z"
        fill="#505055"
      />
    </svg>
  );
};

export default FontColor;
