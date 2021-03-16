import styled from '@emotion/styled';
import { CloseButton as AtomCloseButton } from '~/atoms/button';
import { wriggle } from '~/styles/animation';
import * as font from '~/styles/font';
import { Checkbox as AtomCheckbox } from '~/atoms/field';

export const Container = styled.div`
  padding: 64px 30px 30px;
  width: 480px;

  position: relative;

  background-color: white;
  box-shadow: 0px 10px 40px rgba(125, 125, 125, 0.5);
  border-radius: 16px;
`;

export const CloseButton = styled(AtomCloseButton)`
  padding: 0;
  width: 36px;
  height: 36px;

  position: absolute;
  top: 12px;
  right: 12px;
  background: none !important;

  &:hover {
    animation: ${wriggle} 0.5s ease;
  }
`;

export const Title = styled.span`
  display: block;

  ${font.set(32, 'bold')}
  line-height: 40px;
`;

export const SubTitle = styled.span`
  display: block;

  ${font.set(24, 'lighter')}
  line-height: 30px;
`;

export const Checkbox = styled(AtomCheckbox)`
  ${font.set(16, 'lighter')}
  line-height: 20px;
`;

export const SigninButtonContainer = styled.div`
  margin: 36px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Policy = styled.div`
  margin-top: 36px;
  text-align: right;
  ${font.set(12, 'lighter')}
`;
