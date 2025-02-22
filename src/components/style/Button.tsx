import { styled } from '@/styles';
import { flexCenter } from '@/styles/common';
import { type CSS } from '@stitches/react';
import { ButtonHTMLAttributes, type ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  css?: CSS;
}

export default function Button({ children, css, ...rest }: Props) {
  return (
    <S.Button css={css} {...rest}>
      {children}
    </S.Button>
  );
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
    width: '100%',
  }),
};
