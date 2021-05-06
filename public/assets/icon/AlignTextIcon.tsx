import { VFC } from 'react';

export interface AlignTextIconProps {
  className?: string;
}

export const AlignLeftPanelIcon: VFC<AlignTextIconProps> = () => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.5H15M0 12.5298H15M0 6.52002H9.16" stroke="#505055" strokeMiterlimit="10" />
    </svg>
  );
};

export const AlignLeftIcon: VFC<AlignTextIconProps> = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H16M0 14H16M0 7.59192H9.16" stroke="#2F2F2F" strokeMiterlimit="10" />
    </svg>
  );
};

export const AlignCenterIcon: VFC<AlignTextIconProps> = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H16M0 14H16M0 7H16" stroke="#2F2F2F" strokeMiterlimit="10" />
    </svg>
  );
};
export const AlignRightIcon: VFC<AlignTextIconProps> = () => {
  return (
    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H16M0 14H16M7 7H16.16" stroke="#2F2F2F" strokeMiterlimit="10" />
    </svg>
  );
};
