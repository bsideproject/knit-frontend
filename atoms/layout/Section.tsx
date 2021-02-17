import { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
}
export default function Section({ children }: SectionProps) {
  return <div className={styles.section}>{children}</div>;
}

interface SectionTitleProps {
  children: ReactNode;
}
Section.Title = function SectionTitle({ children }: SectionTitleProps) {
  return <span className={styles.title}>{children}</span>;
};
