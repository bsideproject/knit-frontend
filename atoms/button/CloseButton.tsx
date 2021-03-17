import styled from '@emotion/styled';

interface CloseButtonProps {
  sizePx?: number;
  iconSizePx?: number;
  iconHeightPx?: number;
}

const DEFAULT_SIZE_PX = 36;
const DEFAULT_ICON_SIZE_PX = 20;

export default styled.button<CloseButtonProps>`
  padding: 0;
  width: ${({ sizePx = DEFAULT_SIZE_PX }) => sizePx}px;
  height: ${({ sizePx = DEFAULT_SIZE_PX }) => sizePx}px;

  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;

  &::before {
    content: '';
    display: inline-block;
    width: ${({ iconSizePx = DEFAULT_ICON_SIZE_PX }) => iconSizePx}px;
    height: ${({ iconSizePx = DEFAULT_ICON_SIZE_PX }) => iconSizePx}px;
    background: url(./assets/close.png);
    background-size: ${({ iconSizePx = DEFAULT_ICON_SIZE_PX }) => {
      return `${iconSizePx}px ${iconSizePx}px`;
    }};
    background-repeat: no-repeat;
  }
`;
