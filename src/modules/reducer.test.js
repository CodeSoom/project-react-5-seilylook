import reducer from './reducer';

import {
  setTestaments,
  selectTestament,
  setDiaries,
  changeDiaryField,
  addDiary,
  changeCommentField,
  addComment,
} from './actions';

import diaries from '../../fixtures/diaries';

describe('reducer', () => {
  describe('setTestaments', () => {
    it('changes testaments', () => {
      const initialState = {
        testaments: [],
      };

      const testaments = [
        { id: 1, name: '구약' },
      ];

      const state = reducer(initialState, setTestaments(testaments));

      expect(state.testaments).toHaveLength(1);
    });
  });

  describe('selectTestament', () => {
    it('changes selected testament', () => {
      const initialState = {
        testaments: [
          { id: 1, name: '구약' },
        ],
        selectedTestament: null,
      };

      const state = reducer(initialState, selectTestament(1));

      expect(state.selectedTestament).toEqual({
        id: 1,
        name: '구약',
      });
    });
  });

  describe('setDiaries', () => {
    it('shows diaries', () => {
      const initialState = {
        diaries: [],
        diary: {
          title: '',
          description: '',
        },
        commentFields: {
          text: '',
        },
      };

      const state = reducer(initialState, setDiaries(diaries));

      expect(state.diaries).not.toHaveLength(0);
    });
  });

  describe('changeDiaryField', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('changes diary field', () => {
      const initialState = {
        diary: {
          title: '제목',
          description: '설명',
        },
      };

      const state = reducer(initialState, changeDiaryField({
        name: 'title',
        value: '수정된 제목',
      }));

      expect(state.diary.title).toBe('수정된 제목');
    });
  });

  describe('changeCommentField', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('changes commet field', () => {
      const initialState = {
        comment: {
          text: '댓글',
        },
      };

      const state = reducer(initialState, changeCommentField({
        name: 'text',
        value: '첫 댓글 입니다.',
      }));

      expect(state.comment.text).toBe('첫 댓글 입니다.');
    });
  });

  describe('add diary', () => {
    it('adds new diary', () => {
      const initialState = {
        newId: 101,
        diaries: [],
        diary: {
          title: '새로운 제목',
          description: '새로운 설명',
        },
      };

      const state = reducer(initialState, addDiary());

      expect(state.diaries).toHaveLength(1);

      const diary = state.diaries[state.diaries.length - 1];

      expect(diary.id).toBe(101);
      expect(state.diary.title).toBe('');
      expect(state.newId).toBe(102);
    });
  });

  describe('addComment', () => {
    it('adds new comment', () => {
      const initialState = {
        comments: [],
        comment: {
          text: '새로운 댓글',
        },
      };

      const state = reducer(initialState, addComment());

      expect(state.comments).toHaveLength(1);

      expect(state.comment.text).toBe('');
    });
  });
});
