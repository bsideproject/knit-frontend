import { VFC } from 'react';

export interface ViewIconProps {
  className?: string;
}
const ViewIcon: VFC<ViewIconProps> = () => {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 8.5C5.8 8.5 4.5 7.2 4.5 5.5C4.5 3.8 5.8 2.5 7.5 2.5C9.2 2.5 10.5 3.8 10.5 5.5C10.5 7.2 9.2 8.5 7.5 8.5ZM7.5 3.5C6.4 3.5 5.5 4.4 5.5 5.5C5.5 6.6 6.4 7.5 7.5 7.5C8.6 7.5 9.5 6.6 9.5 5.5C9.5 4.4 8.6 3.5 7.5 3.5Z"
        fill="#818189"
      />
      <path
        d="M7.5 11C2.8 11 0.7 7.3 0 5.7V5.5L0.1 5.3C0.8 3.7 2.9 0 7.5 0C12.2 0 14.3 3.7 15 5.3L15.1 5.5L15 5.7C14.3 7.3 12.2 11 7.5 11ZM1.1 5.5C1.9 7.3 3.8 10 7.5 10C11.3 10 13.1 7.3 14 5.5C13.2 3.7 11.3 1 7.5 1C3.8 1 1.9 3.7 1.1 5.5Z"
        fill="#818189"
      />
    </svg>
  );
};

export default ViewIcon;
