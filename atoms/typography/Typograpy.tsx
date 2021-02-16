import { ReactNode } from 'react';
import style from './Typograpy.module.scss';

interface TypograpyProps {
  children: ReactNode;
}
export default function Typograpy({ children }: TypograpyProps) {
  return <span className={style.title}>{children}</span>;
}
