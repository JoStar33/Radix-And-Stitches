import FormInput from '@/domains/Form/input';
import { styled } from '@/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HomeDataForm } from '@/domains/Home/types';
import FormPageProvider from '@/domains/Form/provider/FormPageProvider';
import Button from '@/components/style/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '@/utils/schema';

export default function Home() {
  const methods = useForm<HomeDataForm>({
    defaultValues: {
      title: '',
      description: '',
    },
    resolver: zodResolver(schema.homeSchema),
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
          <FormInput.ErrorText<HomeDataForm> name="title" errors={methods.formState.errors} />
        </FormInput.Wrapper>
        <FormInput.Wrapper<HomeDataForm> name="description">
          <FormInput.Label>설명이다</FormInput.Label>
          <FormInput.Input<HomeDataForm> name="description" />
          <FormInput.ErrorText<HomeDataForm> name="description" errors={methods.formState.errors} />
        </FormInput.Wrapper>
        <Button type="submit">등록해보기</Button>
      </FormPageProvider>
    </S.Home>
  );
}

const S = {
  Home: styled('div', {}),
};
