import { VFC } from 'react';
import styled from '@emotion/styled';

export interface BackColorProps {
  className?: string;
}
const Conatiner = styled.div``;

const BackColor: VFC<BackColorProps> = ({ className }) => {
  return (
    <Conatiner className={className}>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="20" height="20" fill="white" stroke="#818189" />

        {/* <ConainerColor> */}
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.04809 12H5.53609V1.51998H9.08809V0.255981H0.496094V1.51998H4.04809V12Z"
            fill="#505055"
          />
        </svg>
        {/* </ConainerColor> */}
      </svg>
    </Conatiner>
  );
};

export default BackColor;
