import { styled } from '@/styles';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props) {
  return <S.Body>{children}</S.Body>;
}

const S = {
  Body: styled('div', {
    width: 'calc(100% - 200px)',
  }),
};
