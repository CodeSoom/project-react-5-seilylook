import reducer from './reducer';

import {
  changeContent,
  addContent,
} from './actions';

describe('reducer', () => {
  describe('changeContent', () => {
    it('shows changeContent action', () => {
      const state = reducer({
        inputTitles: [
          {
            name: 'title',
            placeholder: '제목',
            value: '',
          },
          {
            name: 'description',
            placeholder: '설명',
            value: '',
          },
        ],
      }, changeContent('title', 'new-title'));

      expect(state.inputTitles[0].value).toBe('new-title');
    });
  });

  describe('addContent', () => {
    function reduceAddContent(newTitle, newDescription) {
      return reducer({
        newId: 103,
        inputTitles: [
          {
            name: 'title',
            placeholder: '제목',
            value: newTitle,
          },
          {
            name: 'description',
            placeholder: '설명',
            value: newDescription,
          },
        ],
        contents: [
          {
            id: 101,
            title: '첫번째 제목',
            description: '첫번째 설명',
          },
          {
            id: 102,
            title: '두번째 제목',
            description: '두번째 설명',
          },
        ],
      }, addContent());
    }

    context('with existed content', () => {
      it('adds a new restaurant into contents', () => {
        const state = reduceAddContent('세번째 제목', '세번째 설명');

        expect(state.contents).toHaveLength(3);
        expect(state.contents[2].id).not.toBeUndefined();
        expect(state.contents[2].title).toBe('세번째 제목');
        expect(state.contents[2].description).toBe('세번째 설명');
      });

      it('clears input fields after add action finished', () => {
        const state = reduceAddContent('세번째 제목', '세번째 설명');

        expect(state.inputTitles[0].value).toBe('');
        expect(state.inputTitles[1].value).toBe('');
      });
    });

    context('without existed content', () => {
      it('does not add work', () => {
        const state = reduceAddContent('', '');

        expect(state.contents).toHaveLength(2);
      });
    });
  });

  describe('without contents', () => {
    it('shos empty content list', () => {
      const state = reducer(
        undefined, { type: '', payload: {} },
      );

      expect(state).toBe(state);
    });
  });
});
