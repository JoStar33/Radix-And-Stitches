import { styled } from '@/styles';

export default function Header() {
  return <S.Header>Header</S.Header>;
}

const S = {
  Header: styled('div', {
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    borderBottom: '1px solid $modernBlack',
  }),
};
