import style from './Featured.module.scss';
import { Typograpy } from '~/atoms/typography';

export default function Featured() {
  return (
    <div style={{ display: 'block', width: '100%' }}>
      <Typograpy>Featured</Typograpy>
      <div className={style.featuredBox}>dd</div>
      <Typograpy>Featured</Typograpy>
      <div className={style.featuredBox}>dd</div>
      <Typograpy>Featured</Typograpy>
      <div className={style.featuredBox}>dd</div>
    </div>
  );
}
