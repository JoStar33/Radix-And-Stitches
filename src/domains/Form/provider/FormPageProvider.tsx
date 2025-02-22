import { styled } from '@/styles';
import { CSS } from '@stitches/react';
import { HTMLAttributes, ReactNode } from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

interface Props<T extends FieldValues> extends HTMLAttributes<HTMLFormElement> {
  methods: UseFormReturn<T>;
  children: ReactNode;
  css?: CSS;
}

export default function FormPageProvider<T extends FieldValues>({ methods, children, css, ...rest }: Props<T>) {
  return (
    <FormProvider {...methods}>
      <S.Form css={css} {...rest}>
        {children}
      </S.Form>
    </FormProvider>
  );
}

const S = {
  Form: styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }),
};
