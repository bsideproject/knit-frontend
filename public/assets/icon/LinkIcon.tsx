import { VFC } from 'react';
import styled from '@emotion/styled';
import { useComponentID } from '~/utils/id';

export interface LinkIconProps {
  className?: string;
}
const LinkIcon: VFC<LinkIconProps> = ({ className }) => {
  const id = useComponentID();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <rect width="20" height="20" fill="#E5E5E5" />
      <g clipPath={`url(#clip${id})`}>
        <rect width="1280" height="1020" transform="translate(-1061 -843)" fill="white" />
        <g filter={`url(#filter${id}_d)`}>
          <rect
            x="29"
            y="-214"
            width="286"
            height="40"
            rx="4"
            transform="rotate(90 29 -214)"
            fill="white"
          />
        </g>
        <rect width="20" height="20" fill={`url(#pattern${id})`} />
        <rect width="20" height="20" style={{ mixBlendMode: 'lighten' }} />
      </g>
      <defs>
        <filter
          id={`filter${id}_d`}
          x="-26"
          y="-229"
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
        <pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#image${id}`} transform="scale(0.015625)" />
        </pattern>
        <clipPath id={`clip${id}`}>
          <rect width="1280" height="1020" fill="white" transform="translate(-1061 -843)" />
        </clipPath>
        <image
          id={`image${id}`}
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO3b3YtVVRjH8c+MpmaREr7RmxUo1EVjL5RYCYFaGl1YRIVIF4XlhdmFvVC3FUXkhUr/gIEQQVFkOSYEZUV6EYUXCWUQWKbmu6LjeLp4HJg5Z+999jl77zkzNl9YF3tmr+d5fmuvvdbaz1qHMcb4X9PV6QCaMBELsAj3YCamYzL+xn78hu3oxb+dCbN8ZuJdnEAtZ+nHNtFgo5bL8CZOyy88qXyJOcMce2GuxbeKCR9cjmLZsCooQA8OyC/uQgv3rRlGHW3Rg0OyhfTiadGtJ4jBezqWYCOOZdS9YAT3hHk4LD34H3F/DjvTsEEMhGmvw9ySYy/MHWLaShO/STztVliK4yn2ekuJuiSaiV9XwHaP9EbI05sqZ4rsAe/FEnwsk/w67CjBdmEekS5+bYl+NiXYv4AZJfpoi3sli3+hZD/TxOBX72dlyX5apgufGhpUVXP1eo0NsLkiXy0xHo/jFTEgVsUDGhtgZ4X+RhxTNDbA7x2NqAOcNbQBTg3+Z3cnIhpGujGu7m9n6m+4lLlGYwMcHnwxvkLnEzFfJCim4kpcgT/x08WyT8zNVZGUHDlUoT/dYnTfJl9SY69Y/EypKJ5PEny+V4WjbjyFPQkO85STeEv0mrK4M8XXgyX6QHTvz1OctVp+Fp/IRRmHrxPsnxEJ1dK4VXTjMsQPlHNYUTCud1Jsbyhodwjz5cva7hNL3y3YevG6WZ3zWN5mXKtTbJ7D9W3abGC+7DTUEbyG2Sn1r8Iz2JVh46zYD2iFVRn2Snv6zcR/IMaFPHThOekzxt4W4soSvwuTWrCVSjPxL2tvt6lH9Jp6e30562eJPyS9J7ZEM/GrCtq/T4zSg21uzVEvS/yxi3EXpmrxAywW3b5PiJ/V5P5RIX6WENMnxC0uIyijRDwhfnCdM6K7F2FYxM+WvWmRt9v3JdQ9Iga+VukSWaTKxU/C7gxHrbzzaSvF03he/lljqphiKxdPLBrKGvAWaczKDC678axYHCVxI16XPE1WIv4GsWxMcrS6TZvLxfI2TcBA2SfGjC1i+fxHjjonlSie2G1NcvR2QbsrpDdsu+VX3FIwriFM1rgYqYlPy/rUUjvMwy8J9tspn6kgkfJQirMyc/cTRfLjZIqvZmUPnlRRPjNpJ+XjKhyJp7dWvnzCKXHu5zElC6+fgnZqTCQ+gQ/LdJoQw03i9ZgnvtlPiR5yFN/hBzF+VE7S07huOByPFOpXfudd4nsH9eIur7vuV23evuPUN8CBuusJqsvZjwjqG+CvhHtur9D/3eLj5lHlrDMKs1njILi+Il/r6vx8ZAQc3l6psQGOiuMmZfJSgp8a7irZT8vMkBzYxhJ9pImvqWDbqh12aAysXznHTbPE7xe7xx1noeQAj2svizPAqyl2a2L9UcaeYGlsl94IS1u0NQHvp9iribx9kYathLnSk6H9YkzIMzAulL39NSLFD/Cw7HP5x0RDLBFH17vE054jjrb3ZtSt4SBuGzY1bbJGaz9OyPtNf8AoED/AUslHTtst34jDS6OKufhCMeGn8Yb4YdSoZYE4AJX2y4ykckKc2Oj4Ke0k2l17Xy32+JbgZtGlZ4mnfBD/iCzOV/he7AuMMcYYI4//AM/BZ3Hlx7EzAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default styled(LinkIcon)``;
