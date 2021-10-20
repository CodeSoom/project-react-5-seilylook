import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiariesContainer from './DiariesContainer';

test('DiariesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    diaries: [
      {
        id: 1,
        title: '오늘의 기도',
        description: '감사합니다',
      },
    ],
  }));

  const handleClick = jest.fn();

  const { container, getByText } = render((
    <DiariesContainer onClickDiary={handleClick} />
  ));

  expect(container).toHaveTextContent('오늘의 기도');

  fireEvent.click(getByText('오늘의 기도'));

  expect(handleClick).toBeCalledWith({ id: 1, title: '오늘의 기도', description: '감사합니다' });
});
