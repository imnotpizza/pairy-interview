import styled from "@emotion/styled";
import Flex from "./_pds/components/Flex";
import Text from "./_pds/components/Text";
import Stack from "./_pds/components/Stack";
import Input from "./_pds/components/Input";

function App() {
  return (
    <>
      <Flex marginBottom={16}>
        <img src="/hand-tap.svg" alt="hand tap icon" />
        <Text variant="xl-semibold" color="zinc_500" marginLeft={8}>
          버튼 & 문의 양식
        </Text>
      </Flex>
      <Stack gap={16} width="715px">
        <Stack direction="column" gap={16}>
          <Text variant="sm-medium" color="zinc_400">
            원하는 페이지에 버튼(CTA)을 삽입하거나
            <br /> 문의 양식을 더해 이름, 이메일 등 고객 정보를 입력 받으세요.
          </Text>
          <CtaItemListContainer direction="column">
            <Item
              padding={16}
              alignItems="center"
              justifyContent="space-around"
            >
              <Stack gap={4} direction="column">
                <Text variant="md-semibold">1 페이지</Text>
                <Flex alignItems="center">
                  <Text variant="sm-medium" color="zinc_400" marginRight={4}>
                    버튼
                  </Text>
                  <img src="/hand-tap.svg" alt="hand tap icon" width={14} />
                </Flex>
              </Stack>
            </Item>
          </CtaItemListContainer>
        </Stack>
        <Stack as="form" direction="column" gap={16}>
          <Text variant="md-semibold" color="cerise_500" as="label">
            버튼 이름
            <Input
              paddingY={16}
              width="100%"
              textVariant="md-semibold"
              placeholder="예: 더 알아보기"
              isError
            />
            <Text variant="sm-semibold" color="cerise_500" marginTop={4}>
              유효성 검사 에러입니다.
            </Text>
          </Text>
          <Text variant="md-semibold" color="zinc_500" as="label">
            버튼에 연결될 링크
            <Input paddingY={16} width="100%" textVariant="md-semibold" />
          </Text>
          <SubmitButton disabled>변경사항 저장하기</SubmitButton>
        </Stack>
      </Stack>
    </>
  );
}

export default App;

const CtaItemListContainer = styled(Flex)`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.zinc_200};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

const Item = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.zinc_200};

  &.is-lasted {
    border-bottom: none;
  }

  &.is-selected {
    background-color: ${({ theme }) => theme.colors.zinc_100};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.zinc_100};
    cursor: pointer;
  }
`;

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
