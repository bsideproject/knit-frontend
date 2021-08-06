import styled from '@emotion/styled';

export const HEIGHT_PX = 80;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  height: ${HEIGHT_PX}px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(270deg, #81007f 0%, #5af5e1 100%), #81007f;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);

  div {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: none;
    height: 0;
  }
`;

export const LeftBox = styled.div`
  margin-right: 50px;
`;

export const RightBox = styled.div`
  width: 80%;
  justify-content: flex-end;
`;

export const RightContent = styled.div`
  width: 530px;
  position: relative;
  justify-content: space-around;
`;

export const AtagStyled = styled.a``;
