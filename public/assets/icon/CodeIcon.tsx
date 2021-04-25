import { VFC } from 'react';
import styled from '@emotion/styled';

export interface CodeIconProps {
  className?: string;
}
const CodeIcon: VFC<CodeIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      className={className}
    >
      <rect width="25" height="19" fill="#E5E5E5" />
      <g clipPath="url(#clip_code)">
        <rect width="1280" height="1020" transform="translate(-1058 -803)" fill="white" />
        <g filter="url(#filter_code_d)">
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
          id="filter_code_d"
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
        <clipPath id="clip_code">
          <rect width="1280" height="1020" fill="white" transform="translate(-1058 -803)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default styled(CodeIcon)``;
