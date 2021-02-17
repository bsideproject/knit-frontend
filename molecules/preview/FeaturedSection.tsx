import classNames from 'classnames';
import { Button } from '~/atoms/button';
import { Section } from '~/atoms/layout';
import styles from './FeaturedSection.module.scss';

export default function FeaturedSection() {
  return (
    <Section>
      <Section.Title>Featured</Section.Title>
      <Section.Contents>
        <div
          className={classNames(styles.container, {
            [styles.hasThumbnail]: true,
          })}
        >
          <img src="" alt="" className={styles.thumbnail} />
          <div className={styles.contentsWrapper}>
            <span className={styles.title}>효율적인 업무를 위한 협업툴</span>
            <span className={styles.contents}>
              Document description here. 문서들 중, 퀄리티가 우수하다고 판단되는 콘텐츠를 선정하여
              여기에서 그 내용을 접할 수 있도록 밖으로 꺼내서 보여주는 영역입니다. 몇 줄 까지
              보여주고, 이후의 내용은 우측 하단의 [이어서 읽기] 버튼을 눌러서 볼 수 있습니다. 대표
              이미지가 포함된 문서와, 이미지가 포함되지 않은 경우가 필요합니다. 3줄까지 보여주기
            </span>
            <div className={styles.buttonWrapper}>
              <Button className={styles.readMoreButton}>이어서 읽기</Button>
            </div>
          </div>
        </div>
      </Section.Contents>
    </Section>
  );
}
