import { styled } from '@/styles';
import { flexCenter } from '@/styles/common';
import { type CSS } from '@stitches/react';
import { type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  style?: CSS;
}

export default function Button({ children, style }: Props) {
  return <S.Button css={style}>{children}</S.Button>;
}

const S = {
  Button: styled('button', {
    ...flexCenter,
    padding: '1rem 2rem',
    fontWeight: 600,
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '3px',
    color: '$deepSkyblue',
  }),
};
