import { VFC } from 'react';

export interface BoldProps {
  className?: string;
}

const Bold: VFC<BoldProps> = () => {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.638 14H5.39C8.324 14 10.556 12.758 10.556 10.076C10.556 8.276 9.494 7.268 8.054 6.926V6.836C9.188 6.44 9.872 5.18 9.872 3.956C9.872 1.472 7.784 0.661999 5.048 0.661999H0.638V14ZM3.302 6.098V2.714H4.886C6.488 2.714 7.28 3.182 7.28 4.352C7.28 5.414 6.542 6.098 4.85 6.098H3.302ZM3.302 11.948V8.06H5.156C6.992 8.06 7.964 8.618 7.964 9.914C7.964 11.3 6.974 11.948 5.156 11.948H3.302Z"
        fill="#505055"
      />
    </svg>
  );
};

export default Bold;
