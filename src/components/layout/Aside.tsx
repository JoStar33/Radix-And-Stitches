import { styled } from '@/styles';

export default function Aside() {
  return (
    <S.Aside>
      <S.AsideHeader>메뉴바</S.AsideHeader>
      <S.AsideElement>메뉴1</S.AsideElement>
      <S.AsideElement>메뉴2</S.AsideElement>
      <S.AsideElement>메뉴3</S.AsideElement>
      <S.AsideElement>메뉴4</S.AsideElement>
      <S.AsideElement>메뉴5</S.AsideElement>
    </S.Aside>
  );
}

const S = {
  Aside: styled('ul', {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '200px',
    padding: '15px',
  }),
  AsideHeader: styled('div', {
    fontWeight: 600,
    '& button': {
      width: '50px',
      aspectRatio: 1,
      border: '1px solid $modernBlack',
    },
  }),
  AsideElement: styled('li', {
    listStyle: 'none',
  }),
};
