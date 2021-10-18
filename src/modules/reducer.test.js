import reducer from './reducer';

import {
  setDiaries,
  changeDiaryField,
  addDiary,
} from './actions';

import diaries from '../../fixtures/diaries';

describe('reducer', () => {
  describe('setDiaries', () => {
    it('shows diaries', () => {
      const initialState = {
        diaries: [],
      };

      const state = reducer(initialState, setDiaries(diaries));

      expect(state.diaries).not.toHaveLength(0);
    });
  });

  describe('changeDiaryField', () => {
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
});
