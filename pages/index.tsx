import classNames from 'classnames';
import { MostViewData } from '~/@types/MostView';
import { Container } from '~/atoms/layout';
import { MostView } from '~/molecules/preview';
import styles from './index.module.scss';

const mockData = {
  mostView: [
    {
      id: 1,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 2,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 3,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 4,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 5,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      id: 6,
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
  ] as ReadonlyArray<MostViewData>,
};

export default function MainPage() {
  return (
    <Container className={styles.main}>
      <div className={classNames(styles.column, styles.left)}>
        <div className={styles.section}>
          <div className={styles.titleCover}>
            <span className={styles.title}>최근 많이 조회된 문서</span>
          </div>
          <div className={styles.contents}>
            <div className={styles.sectionColumn}>
              {mockData.mostView
                .filter((_, index) => index % 2 === 0)
                .map(({ id, title, desc, viewCount, likeCount }, index) => (
                  <MostView
                    key={id}
                    number={index * 2 + 1}
                    title={title}
                    desc={desc}
                    viewCount={viewCount}
                    likeCount={likeCount}
                  />
                ))}
            </div>
            <div className={styles.sectionColumn}>
              {mockData.mostView
                .filter((_, index) => index % 2 === 1)
                .map(({ id, title, desc, viewCount, likeCount }, index) => (
                  <MostView
                    key={id}
                    number={index * 2 + 2}
                    title={title}
                    desc={desc}
                    viewCount={viewCount}
                    likeCount={likeCount}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.column, styles.right)}>가이드 배너 들어가야하는 위치</div>
    </Container>
  );
}
