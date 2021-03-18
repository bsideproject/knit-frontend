import { FC } from 'react';
import { Container, Aligner, RightSection, CloseButton } from './PromotionBanner.styled';

interface Props {
  onClickClose: () => void;
}

const PromotionBanner: FC<Props> = ({ onClickClose }) => {
  return (
    <Container>
      <Aligner>
        여러분의 시간은 소중하니까, IT종사자라면 Knit를 시작해 보세요.
        <RightSection>
          24시간 안보기
          <CloseButton iconSizePx={16} onClick={onClickClose} />
        </RightSection>
      </Aligner>
    </Container>
  );
};

export default PromotionBanner;
