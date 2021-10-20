import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import DiaryPage from './DiaryPage';

describe('DiaryPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((state) => state({
      diary: {
        id: 1,
        title: '오늘의 기도',
        description: '감사합니다',
        comments: [],
      },
      commentFields: {
        text: '',
      },
      accessToken: 'ACCESS_TOKEN',
    }));
  });

  context('with param props', () => {
    it('renders name', () => {
      const params = { id: '1' };

      const { container } = render((
        <DiaryPage params={params} />
      ));

      expect(container).toHaveTextContent('오늘의 기도');
    });

    it('renders comment write form', () => {
      const params = { id: '1' };

      const { queryByLabelText } = render((
        <DiaryPage params={params} />
      ));

      expect(queryByLabelText('댓글')).not.toBeNull();
    });
  });

  context('without params props', () => {
    it('renders name', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/diaries/1']}>
          <DiaryPage />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('오늘의 기도');
    });
  });
});
