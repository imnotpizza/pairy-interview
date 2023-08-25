import { render, screen } from '@testing-library/react';
import CtaPageItem from '.';
import { ctaList as mockCtaList } from '../../../../_mocks/dummy';
import TestProviders from '../../../../_utils/TestProviders';
import withTestProviders from '../../../../_utils/TestProviders';

const mockProps = {
  item: mockCtaList[0],
  onClickItem: jest.fn(),
  isSelected: false,
};

describe('선택되었을 때 테스트', () => {
  it('선택되지 않은 경우, is-selected className 없음', () => {
    render(
      <TestProviders>
        <CtaPageItem {...mockProps} />
      </TestProviders>,
    );
    // className이 is-selected인 요소가 없어야 함
    const elementWithIsSelectedClass = screen.queryAllByTestId('is-selected');
    expect(elementWithIsSelectedClass.length).toBe(0);
  });
  it('item이 선택되었을 때, is-selected className 추가', () => {
    render(
      <TestProviders>
        <CtaPageItem {...mockProps} isSelected={true} />
      </TestProviders>,
    );
    const elementWithIsSelectedClass = screen.queryAllByTestId('is-selected');
    expect(elementWithIsSelectedClass.length).toBe(1);
  });
});

describe('버튼, 아이콘 UI 렌더링', () => {
  it('페이지 저장되지 않으면 렌더링되지 않음', () => {
    render(
      <TestProviders>
        <CtaPageItem {...mockProps} item={{ ...mockCtaList[1] }} />
      </TestProviders>,
    );
    const buttonText = screen.queryByText('버튼');
    const handTapIcon = screen.queryByAltText('hand tap icon');
    expect(buttonText).not.toBeInTheDocument();
    expect(handTapIcon).not.toBeInTheDocument();
  });

  it('페이지 저장되면 버튼, 아이콘 렌더링됨', () => {
    render(
      <TestProviders>
        <CtaPageItem {...mockProps} />
      </TestProviders>,
    );
    const buttonText = screen.queryByText('버튼');
    const handTapIcon = screen.queryByAltText('hand tap icon');
    expect(buttonText).toBeInTheDocument();
    expect(handTapIcon).toBeInTheDocument();
  });
});
