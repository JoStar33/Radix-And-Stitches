import { styled } from '@/styles';
import { ColorsType } from '@/styles/colors';
import { CSS } from '@stitches/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  style?: CSS;
  color?: ColorsType;
}

export default function Label({ children, style, color = 'modernBlack' }: Props) {
  return <S.Label css={{ ...style, color: `$${color}` }}>{children}</S.Label>;
}

const S = {
  Label: styled('p', {
    fontWeight: 600,
    fontSize: '1rem',
  }),
};
