import { VFC } from 'react';
import styled from '@emotion/styled';
import { useComponentID } from '~/utils/id';

export interface CodeIconProps {
  className?: string;
}
const CodeIcon: VFC<CodeIconProps> = ({ className }) => {
  const id = useComponentID();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="19"
      className={className}
      viewBox="0 0 23 19"
      fill="none"
    >
      <rect width="25" height="19" fill="#E5E5E5" />
      <g clipPath={`url(#clip${id})`}>
        <rect width="1280" height="1020" transform="translate(-1058 -803)" fill="white" />
        <g filter={`url(#filter${id}_d)`}>
          <rect
            x="32"
            y="-174"
            width="286"
            height="40"
            rx="4"
            transform="rotate(90 32 -174)"
            fill="white"
          />
        </g>
        <text
          xmlSpace="preserve"
          style={{ whiteSpace: 'pre' }}
          fontFamily="Noto Sans KR"
          fontSize="18"
          letterSpacing="-1px"
        >
          <tspan x="0" y="14.848">
            {'{ / }'}
          </tspan>
        </text>
      </g>
      <defs>
        <filter
          id={`filter${id}_d`}
          x="-23"
          y="-189"
          width="70"
          height="316"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id={`clip${id}`}>
          <rect width="1280" height="1020" fill="white" transform="translate(-1058 -803)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default styled(CodeIcon)``;
