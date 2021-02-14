import classNames from 'classnames';
import { Container } from '~/atoms/layout';
import { MostView } from '~/molecules/preview';
import styles from './index.module.scss';

const mockData = {
  mostView: [
    {
      pageNo: '1111',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      pageNo: '2222',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      pageNo: '3333',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      pageNo: '4444',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      pageNo: '5555',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
    {
      pageNo: '6666',
      title:
        '여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...여기에 타이틀. 최근 많이 조회된 문서가 이자리 넘어가면 말줄임밑줄임...',
      desc:
        '여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...여기에 내용이 들어감 여기 내용을 블라블라 써내려감 넘어가면 말줄임말줄임...',
      viewCount: 9999,
      likeCount: 9999,
    },
  ],
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
                .map(({ pageNo, title, desc, viewCount, likeCount }, index) => (
                  <MostView
                    key={pageNo}
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
                .map(({ pageNo, title, desc, viewCount, likeCount }, index) => (
                  <MostView
                    key={pageNo}
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
