import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

interface ClassNameChildrenProp {
  className?: string;
  children?: ReactNode;
}

export default function Section({ className, children }: ClassNameChildrenProp) {
  return <div className={classNames(styles.section, className)}>{children}</div>;
}

Section.Title = function SectionTitle({ className, children }: ClassNameChildrenProp) {
  return (
    <div className={classNames(styles.titleCover, className)}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

Section.Contents = function SectionContents({ className, children }: ClassNameChildrenProp) {
  return <div className={classNames(styles.contents, className)}>{children}</div>;
};

Section.Column = function SectionColumn({ className, children }: ClassNameChildrenProp) {
  return <div className={classNames(styles.column, className)}>{children}</div>;
};
