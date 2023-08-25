import styled from '@emotion/styled';
import React from 'react';
import Input from '../../Input';
import Stack from '../../Stack';
import Text from '../../Text';
import { Props } from './index.types';
import { useForm } from 'react-hook-form';
import CtaFormInput from './CtaFormInput';

const CtaForm = ({ page, buttonName, url }: Props) => {
  // form 상태
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      buttonName: buttonName || '',
      url: url || '',
    },
  });

  return (
    <Stack as="form" direction="column" gap={16}>
      {/* 버튼 이름 */}
      <CtaFormInput
        label="버튼 이름"
        placeholder="버튼 이름을 입력해주세요"
        errText="버튼 이름은 1글자 이상 20글자 이하로 입력해주세요"
        isError={!!errors.buttonName}
        register={register('buttonName', {
          required: '이름은 필수입니다.',
          minLength: { value: 1, message: '한 글자 이상 입력해주세요.' },
          maxLength: { value: 20, message: '스무 글자 이하로 입력해주세요.' },
        })}
      />
      {/* 버튼에 연결될 링크 */}
      <CtaFormInput
        label="버튼 이름"
        placeholder="버튼 이름을 입력해주세요"
        errText="버튼 이름은 1글자 이상 20글자 이하로 입력해주세요"
        isError={!!errors.buttonName}
        register={register('url', {
          required: '링크는 필수입니다.',
          pattern: {
            value: /^(http|https):\/\/[^ "]+$/,
            message: '올바른 링크 형식이 아닙니다.',
          },
        })}
      />
      <SubmitButton type="submit">변경사항 저장하기</SubmitButton>
    </Stack>
  );
};

const SubmitButton = styled.button`
  border-color: ${({ theme }) => theme.colors.black};
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  padding: 8px 12px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.zinc_700};
    background-color: ${({ theme }) => theme.colors.zinc_700};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.zinc_200};
    background-color: ${({ theme }) => theme.colors.zinc_200};
    color: ${({ theme }) => theme.colors.zinc_400};
    cursor: not-allowed;
  }

  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;
`;

export default CtaForm;
