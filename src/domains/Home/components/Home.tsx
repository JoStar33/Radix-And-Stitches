import FormInput from '@/domains/Form/input';
import { styled } from '@/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HomeDataForm } from '@/domains/Home/types';
import FormPageProvider from '@/domains/Form/provider/FormPageProvider';
import Button from '@/components/style/Button';

export default function Home() {
  const methods = useForm<HomeDataForm>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit: SubmitHandler<HomeDataForm> = (submitData) => {
    console.log(submitData);
  };

  return (
    <S.Home>
      <FormPageProvider
        onSubmit={methods.handleSubmit(onSubmit)}
        css={{
          width: '500px',
        }}
        methods={methods}
      >
        <FormInput.Wrapper<HomeDataForm> name="title">
          <FormInput.Label>제목이다</FormInput.Label>
          <FormInput.Input<HomeDataForm> name="title" />
        </FormInput.Wrapper>
        <FormInput.Wrapper<HomeDataForm> name="description">
          <FormInput.Label>설명이다</FormInput.Label>
          <FormInput.Input<HomeDataForm> name="description" />
        </FormInput.Wrapper>
        <Button type="submit">등록해보기</Button>
      </FormPageProvider>
    </S.Home>
  );
}

const S = {
  Home: styled('div', {}),
};
