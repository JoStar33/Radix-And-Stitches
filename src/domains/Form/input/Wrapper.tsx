import { styled } from '@/styles';
import { ReactNode } from 'react';
import { FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  children: ReactNode;
  name: Path<T>;
}

export default function Wrapper<T extends FieldValues>({ name, children }: Props<T>) {
  return <S.Wrapper htmlFor={`form-input-${name}`}>{children}</S.Wrapper>;
}

const S = {
  Wrapper: styled('label', {
    display: 'flex',
    flexDirection: 'column',
  }),
};
