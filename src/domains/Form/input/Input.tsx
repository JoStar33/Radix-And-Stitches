import { styled } from '@/styles';
import { type DetailedHTMLProps, type InputHTMLAttributes, useEffect } from 'react';
import { FieldValues, Path, useFormContext, useWatch } from 'react-hook-form';

interface Props<T> extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: Path<T>;
}

export default function Input<T extends FieldValues>({ name, ...rest }: Props<T>) {
  const { register, control, clearErrors } = useFormContext<T>();

  const watchValue = useWatch({
    control,
    name,
  });

  useEffect(() => {
    if (watchValue && watchValue.length !== 0) clearErrors(name);
  }, [clearErrors, name, watchValue]);

  return <S.Input id={`form-input-${name}`} {...rest} {...register(name)} />;
}

const S = {
  Input: styled('input', {
    height: '30px',
    border: '1px solid $modernBlack',
    borderRadius: '5px',
    paddingLeft: '15px',
  }),
};
