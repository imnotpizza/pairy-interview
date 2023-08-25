import { render, screen } from '@testing-library/react';
import CtaPageItem from '.';
import { ctaList as mockCtaList } from '../../../../_mocks/dummy';

const mockProps = {
  item: mockCtaList[0],
  onClickItem: jest.fn(),
  isSelected: false,
};

describe('선택되었을 때 테스트', () => {
  it('선택되지 않은 경우, is-selected className 없음', () => {
    render(<CtaPageItem {...mockProps} />);
    // className이 is-selected인 요소가 없어야 함
    const elementWithIsSelectedClass = screen.queryAllByTestId('is-selected');
    expect(elementWithIsSelectedClass.length).toBe(0);
  });
  it('item이 선택되었을 때, is-selected className 추가', () => {
    render(<CtaPageItem {...mockProps} isSelected={true} />);
    const elementWithIsSelectedClass = screen.queryAllByTestId('is-selected');
    expect(elementWithIsSelectedClass.length).toBe(1);
  });
});

describe('버튼, 아이콘 UI 렌더링', () => {
  it('페이지 저장되지 않으면 렌더링되지 않음', () => {
    render(<CtaPageItem {...mockProps} item={mockCtaList[1]} />);
    const buttonText = screen.queryByText('버튼');
    const handTapIcon = screen.queryByAltText('hand tap icon');
    expect(buttonText).not.toBeInTheDocument();
    expect(handTapIcon).not.toBeInTheDocument();
  });

  it('페이지 저장되면 버튼, 아이콘 렌더링됨', () => {
    render(<CtaPageItem {...mockProps} item={mockCtaList[0]} />);
    const buttonText = screen.queryByText('버튼');
    const handTapIcon = screen.queryByAltText('hand tap icon');
    expect(buttonText).toBeInTheDocument();
    expect(handTapIcon).toBeInTheDocument();
  });
});
