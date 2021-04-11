import { VFC } from 'react';
import styled from '@emotion/styled';
import { useComponentID } from '~/utils/id';

export interface LineIconProps {
  className?: string;
  width?: number;
  height?: number;
}
const LineIcon: VFC<LineIconProps> = ({ className }) => {
  const id = useComponentID();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="2"
      className={className}
      viewBox="0 0 22 2"
      fill="none"
    >
      <rect width="22" height="2" fill="#E5E5E5" />
      <g clipPath={`url(#clip${id})`}>
        <rect width="1280" height="1020" transform="translate(-1059 -770)" fill="white" />
        <g filter={`url(#filter${id}_d)`}>
          <rect
            x="31"
            y="-141"
            width="286"
            height="40"
            rx="4"
            transform="rotate(90 31 -141)"
            fill="white"
          />
        </g>
        <line data-stroke y1="1" x2="22" y2="1" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id={`filter${id}_d`}
          x="-24"
          y="-156"
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
          <rect width="1280" height="1020" fill="white" transform="translate(-1059 -770)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default styled(LineIcon)``;
