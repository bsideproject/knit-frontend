import { VFC } from 'react';
import styled from '@emotion/styled';
import { useComponentID } from '~/utils/id';

export interface ImageIconProps {
  className?: string;
}
const ImageIcon: VFC<ImageIconProps> = ({ className }) => {
  const id = useComponentID();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="21"
      height="21"
      className={className}
      viewBox="0 0 21 21"
      fill="none"
    >
      <rect width="21" height="21" fill="#E5E5E5" />
      <g clipPath={`url(#clip${id})`}>
        <rect width="1920" height="1662" transform="translate(-1369 -641)" fill="white" />
        <g filter={`url(#filter${id}_d)`}>
          <rect
            x="31"
            y="-11"
            width="327"
            height="40"
            rx="4"
            transform="rotate(90 31 -11)"
            fill="white"
          />
        </g>
        <rect width="21" height="21" fill={`url(#pattern${id})`} />
        <rect width="21" height="21" style={{ mixBlendMode: 'lighten' }} />
      </g>
      <defs>
        <filter
          id={`filter${id}_d`}
          x="-24"
          y="-26"
          width="70"
          height="357"
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
        <pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#image${id}`} transform="scale(0.00195312)" />
        </pattern>
        <clipPath id={`clip${id}`}>
          <rect width="1920" height="1662" fill="white" transform="translate(-1369 -641)" />
        </clipPath>
        <image
          id={`image${id}`}
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default styled(ImageIcon)``;
