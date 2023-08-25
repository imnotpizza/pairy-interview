import React from 'react';
import Flex from '../../Flex';
import Stack from '../../Stack';
import Text from '../../Text';
import { CTAItemContainer } from './index.styles';
import { Props } from './index.types';

const CtaPageItem = ({ item, onClickItem, isSelected }: Props) => {
  return (
    <CTAItemContainer
      padding={16}
      alignItems="center"
      justifyContent="space-around"
      onClick={() => onClickItem(item)}
      className={isSelected ? 'is-selected' : ''}
    >
      <Stack gap={4} direction="column">
        <Text variant="md-semibold">{item.page} 페이지</Text>
        <Flex alignItems="center">
          {item.detail && (
            <>
              <Text variant="sm-medium" color="zinc_400" marginRight={4}>
                버튼
              </Text>
              <img src="/hand-tap.svg" alt="hand tap icon" width={14} />
            </>
          )}
        </Flex>
      </Stack>
    </CTAItemContainer>
  );
};

export default CtaPageItem;
