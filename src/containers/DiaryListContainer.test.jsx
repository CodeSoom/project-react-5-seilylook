import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DiaryListContainer from './DiaryListContainer';

jest.mock('react-redux');

describe('DiaryListContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      diaries: [
        {
          id: 1,
          title: '제목 테스트',
          description: '설명 테스트',
        },
      ],
      accessToken: given.accessToken,
    }));
  });

  context('without logged-in', () => {
    it('renders empty diaries list', () => {
      const { container } = render((
        <DiaryListContainer />
      ));

      expect(container).not.toHaveTextContent('제목 테스트');
    });
  });

  context('with logged-in', () => {
    it('renders diaries list', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      const { container } = render((
        <DiaryListContainer />
      ));

      expect(container).toHaveTextContent('제목 테스트');
    });
  });
});
