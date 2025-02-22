import Aside from '@/components/layout/Aside';
import Header from '@/components/layout/Header';
import Body from '@/components/layout/Body';
import { ReactNode } from 'react';
import { styled } from '@/styles';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <S.LayoutWrapper>
        <Aside />
        <Body>{children}</Body>
      </S.LayoutWrapper>
    </div>
  );
}

const S = {
  LayoutWrapper: styled('div', {
    display: 'flex',
  }),
};
