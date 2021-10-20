import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CommentsList from './CommentsList';

describe('CommentsList', () => {
  context('with comments list', () => {
    it('shows comments', () => {
      useSelector.mockImplementation((selector) => selector({
        comments: [
          {
            id: 1,
            text: '첫 댓글',
          },
        ],
      }));

      const { container } = render((
        <CommentsList />
      ));

      expect(container).toHaveTextContent('첫 댓글');
    });
  });

  context('without comments list', () => {
    it('notices empty sign', () => {
      useSelector.mockImplementation((selector) => selector({
      }));

      const { container } = render((
        <CommentsList />
      ));

      expect(container).toHaveTextContent('댓글이 없습니다.');
    });
  });
});
