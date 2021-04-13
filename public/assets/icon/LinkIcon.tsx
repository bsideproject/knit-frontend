import { VFC } from 'react';
import styled from '@emotion/styled';

export interface LinkIconProps {
  className?: string;
}
const LinkIcon: VFC<LinkIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <rect width="20" height="20" fill="url(#pattern_link)" />
      <rect width="20" height="20" style={{ mixBlendMode: 'lighten' }} />
      <defs>
        <pattern id="pattern_link" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image_link" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image_link"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO3b3YtVVRjH8c+MpmaREr7RmxUo1EVjL5RYCYFaGl1YRIVIF4XlhdmFvVC3FUXkhUr/gIEQQVFkOSYEZUV6EYUXCWUQWKbmu6LjeLp4HJg5Z+999jl77zkzNl9YF3tmr+d5fmuvvdbaz1qHMcb4X9PV6QCaMBELsAj3YCamYzL+xn78hu3oxb+dCbN8ZuJdnEAtZ+nHNtFgo5bL8CZOyy88qXyJOcMce2GuxbeKCR9cjmLZsCooQA8OyC/uQgv3rRlGHW3Rg0OyhfTiadGtJ4jBezqWYCOOZdS9YAT3hHk4LD34H3F/DjvTsEEMhGmvw9ySYy/MHWLaShO/STztVliK4yn2ekuJuiSaiV9XwHaP9EbI05sqZ4rsAe/FEnwsk/w67CjBdmEekS5+bYl+NiXYv4AZJfpoi3sli3+hZD/TxOBX72dlyX5apgufGhpUVXP1eo0NsLkiXy0xHo/jFTEgVsUDGhtgZ4X+RhxTNDbA7x2NqAOcNbQBTg3+Z3cnIhpGujGu7m9n6m+4lLlGYwMcHnwxvkLnEzFfJCim4kpcgT/x08WyT8zNVZGUHDlUoT/dYnTfJl9SY69Y/EypKJ5PEny+V4WjbjyFPQkO85STeEv0mrK4M8XXgyX6QHTvz1OctVp+Fp/IRRmHrxPsnxEJ1dK4VXTjMsQPlHNYUTCud1Jsbyhodwjz5cva7hNL3y3YevG6WZ3zWN5mXKtTbJ7D9W3abGC+7DTUEbyG2Sn1r8Iz2JVh46zYD2iFVRn2Snv6zcR/IMaFPHThOekzxt4W4soSvwuTWrCVSjPxL2tvt6lH9Jp6e30562eJPyS9J7ZEM/GrCtq/T4zSg21uzVEvS/yxi3EXpmrxAywW3b5PiJ/V5P5RIX6WENMnxC0uIyijRDwhfnCdM6K7F2FYxM+WvWmRt9v3JdQ9Iga+VukSWaTKxU/C7gxHrbzzaSvF03he/lljqphiKxdPLBrKGvAWaczKDC678axYHCVxI16XPE1WIv4GsWxMcrS6TZvLxfI2TcBA2SfGjC1i+fxHjjonlSie2G1NcvR2QbsrpDdsu+VX3FIwriFM1rgYqYlPy/rUUjvMwy8J9tspn6kgkfJQirMyc/cTRfLjZIqvZmUPnlRRPjNpJ+XjKhyJp7dWvnzCKXHu5zElC6+fgnZqTCQ+gQ/LdJoQw03i9ZgnvtlPiR5yFN/hBzF+VE7S07huOByPFOpXfudd4nsH9eIur7vuV23evuPUN8CBuusJqsvZjwjqG+CvhHtur9D/3eLj5lHlrDMKs1njILi+Il/r6vx8ZAQc3l6psQGOiuMmZfJSgp8a7irZT8vMkBzYxhJ9pImvqWDbqh12aAysXznHTbPE7xe7xx1noeQAj2svizPAqyl2a2L9UcaeYGlsl94IS1u0NQHvp9iribx9kYathLnSk6H9YkzIMzAulL39NSLFD/Cw7HP5x0RDLBFH17vE054jjrb3ZtSt4SBuGzY1bbJGaz9OyPtNf8AoED/AUslHTtst34jDS6OKufhCMeGn8Yb4YdSoZYE4AJX2y4ykckKc2Oj4Ke0k2l17Xy32+JbgZtGlZ4mnfBD/iCzOV/he7AuMMcYYI4//AM/BZ3Hlx7EzAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default styled(LinkIcon)``;
