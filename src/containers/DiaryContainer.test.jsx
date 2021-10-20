import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryContainer from './DiaryContainer';

describe('DiaryContainer', () => {
  const dispatch = jest.fn();

  function renderDiaryContainer() {
    return render((
      <DiaryContainer diaryId="1" />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      diary: given.diary,
      commentFields: {
        text: '',
      },
      accessToken: given.accessToken,
    }));
  });

  context('with diary', () => {
    given('diary', () => ({
      id: 1,
      title: '오늘의 기도',
      description: '감사합니다',
      comments: [
        {
          id: 1,
          diaryId: 1,
          title: '첫 댓글',
          description: '내가 단 댓글',
          text: '복 받으세요',
        },
      ],
    }));

    it('renders title and description', () => {
      const { container } = renderDiaryContainer();

      expect(container).toHaveTextContent('오늘의 기도');
      expect(container).toHaveTextContent('감사합니다');
    });

    context('without logged-in', () => {
      it('renders no comment with fields', () => {
        const { queryByLabelText } = render((
          <DiaryContainer diaryId="1" />
        ));

        expect(queryByLabelText('댓글')).toBeNull();
      });
    });

    context('with logged-in', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      it('renders comment write fields', () => {
        const { queryByLabelText } = render((
          <DiaryContainer diaryId="1" />
        ));

        expect(queryByLabelText('댓글')).not.toBeNull();
      });

      it('listens change events', () => {
        const { getByLabelText } = render((
          <DiaryContainer diaryId="1" />
        ));

        const controls = [
          {
            label: '댓글',
            name: 'text',
            value: '첫 댓글 입니다',
          },
        ];

        controls.forEach(({ label, name, value }) => {
          fireEvent.change(getByLabelText(label), { target: { value } });

          expect(dispatch).toBeCalledWith({
            type: 'changeCommentField',
            payload: { name, value },
          });
        });
      });
    });
  });
});
