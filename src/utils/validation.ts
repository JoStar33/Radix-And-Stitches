import { z } from 'zod';
import { regex } from '@/utils/regex';

const SIGN_IN_ID_VALID_TEXT = '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 입력 가능합니다.';
const EMAIL_VALID_TEXT = '이메일 형식을 확인해주세요';
const PASSWORD_VALID_TEXT = '영 대소문자,특수문자,숫자를 포함한 8자~16자';
const PASSWORD_MATCH_TEXT = '비밀번호와 일치해야 합니다.';
const PHONE_NUMBER_VALID_TEXT = '010으로 시작하는 "-"를 제외한 숫자만 입력 가능합니다';
const LOCAL_NUMBER_VALID_TEXT = '"-"를 제외한 지역 전화번호만 입력 가능합니다';

const REQUIRED_NUMBER_VALID_TEXT = '숫자만 입력 가능합니다.';
const REQUIRED_OPTION_VALID_TEXT = '필수항목';
const REQUIRED_AGREE_TEXT = '동의해주셔야 합니다.';
const REQUIRED_INPUT_VALID_TEXT = '필수입력';
const REQUIRED_IMAGE_VALID_TEXT = '이미지를 등록해주세요';
const REQUIRED_MORE_ONE_IMAGE_VALID_TEXT = '이미지를 등록해주세요';
const REQUIRED_TWO_DECIMAL_NUMBER_VALID_TEXT = '소수점 2자리 이내 숫자만 입력 가능';
const REQUIRED_ENG_WITH_DASH_AND_NUMBER_VALID_TEXT = '영문필수, 숫자와 _만 입력 가능';

const KO_VALID_TEXT_1 = '모음 입력제한';
const KO_VALID_TEXT_2 = '자음 입력제한';
const KO_VALID_TEXT_3 = '한글은 허용되지않습니다';
const KO_VALID_TEXT_4 = '한글입력만 허용됩니다';
const FIRST_SPACES_VALID_TEXT = '첫글자 공백';
const LAST_SPACES_VALID_TEXT = '마지막글자 공백';
const SPACES_VALID_TEXT_2 = '띄어쓰기 불가';
const SPECIAL_VALID_TEXT_1 = '특수문자는 허용되지않습니다';

const MORE_TEXT = (more: number) => `${more}글자 이상`;
const LESS_TEXT = (less: number) => `${less}글자 이하`;
const LESS_THAN_OR_EQUAL_NUMBER = (less: number) => `${less} 이하 숫자만 가능`;
const LESS_NUMBER = (less: number) => `${less} 미만 숫자만 가능`;
const MORE_THAN_OR_EQUAL_NUMBER = (less: number) => `${less} 이상 숫자만 가능`;
const MORE_NUMBER = (less: number) => `${less} 초과 숫자만 가능`;
const MORE_IMAGE = (more: number) => `${more}개 이상`;
const LESS_IMAGE = (less: number) => `${less}개 이하`;

export const validation = {
  REQUIRED_TEXT: z.string().nonempty(REQUIRED_INPUT_VALID_TEXT),
};
