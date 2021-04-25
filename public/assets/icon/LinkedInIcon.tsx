import { VFC } from 'react';

export interface LinkedInIconProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}
const LinkedInIcon: VFC<LinkedInIconProps> = ({ width = 16, height = 16, className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4286 0.5H1.56808C0.978795 0.5 0.5 0.985491 0.5 1.58147V14.4185C0.5 15.0145 0.978795 15.5 1.56808 15.5H14.4286C15.0179 15.5 15.5 15.0145 15.5 14.4185V1.58147C15.5 0.985491 15.0179 0.5 14.4286 0.5ZM5.03348 13.3571H2.81027V6.19866H5.03683V13.3571H5.03348ZM3.92187 5.22098C3.20871 5.22098 2.63281 4.64174 2.63281 3.93192C2.63281 3.2221 3.20871 2.64286 3.92187 2.64286C4.6317 2.64286 5.21094 3.2221 5.21094 3.93192C5.21094 4.64509 4.63504 5.22098 3.92187 5.22098ZM13.3672 13.3571H11.144V9.875C11.144 9.04464 11.1272 7.97656 9.98884 7.97656C8.83036 7.97656 8.6529 8.88058 8.6529 9.81473V13.3571H6.42969V6.19866H8.5625V7.17634H8.59263C8.89062 6.61384 9.61719 6.0212 10.6987 6.0212C12.9487 6.0212 13.3672 7.50446 13.3672 9.43303V13.3571Z"
        fill="#505055"
      />
    </svg>
  );
};

export default LinkedInIcon;
