import { ErrorMessage } from '@hookform/error-message';
import { styled } from '@stitches/react';
import { FieldErrors, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  errors: FieldErrors<FieldValues>;
  margin?: string;
}

export default function ErrorText<T extends FieldValues>({ name, errors, margin }: Props<T>) {
  return (
    <S.ErrorText css={{ margin }}>
      <ErrorMessage errors={errors} name={name} />
    </S.ErrorText>
  );
}

const S = {
  ErrorText: styled('div', {
    height: '15px',
    fontSize: '12px',
    color: '$red',
    margin: '2px 0 0 0',
  }),
};
