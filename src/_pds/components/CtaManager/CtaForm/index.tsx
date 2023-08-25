import styled from '@emotion/styled';
import React from 'react';
import Input from '../../Input';
import Stack from '../../Stack';
import Text from '../../Text';
import { Props } from './index.types';

const CtaForm = ({ page, buttonName, url }: Props) => {
  return (
    <Stack as="form" direction="column" gap={16}>
      {/* 버튼 이름 */}
      <Text variant="md-semibold" color="zinc_600" as="label">
        버튼 이름 {page}
        <Input
          paddingY={16}
          width="100%"
          textVariant="md-semibold"
          placeholder="버튼 이름 입력"
        />
        <Text variant="sm-semibold" color="cerise_500" marginTop={4}>
          텍스트
        </Text>
      </Text>
      {/* 버튼에 연결될 링크 */}
      <Text variant="md-semibold" color="zinc_600" as="label">
        링크
        <Input paddingY={16} width="100%" textVariant="md-semibold" placeholder="링크 입력" />
        <Text variant="sm-semibold" color="cerise_500" marginTop={4}>
          텍스트
        </Text>
      </Text>
      <SubmitButton type="submit">변경사항 저장하기</SubmitButton>
    </Stack>
  );
};

const CtaFormInput = ({ label, placeholder, errText, isError, register }) => {
  return (
    <Text variant="md-semibold" color="zinc_600" as="label">
      {label}
      <Input
        paddingY={16}
        width="100%"
        textVariant="md-semibold"
        placeholder={placeholder}
        {...register}
      />
      {isError && (
        <Text variant="sm-semibold" color="cerise_500" marginTop={4}>
          {errText}
        </Text>
      )}
    </Text>
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
