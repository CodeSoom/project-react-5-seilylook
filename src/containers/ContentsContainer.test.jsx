import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ContentsContainer from './ContentsContainer';

import CONTENTS from '../../fixtures/contents';

describe('ContentsContainer', () => {
  const dispatch = jest.fn();

  const GENESIS = CONTENTS[0];

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedContent', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        contents: CONTENTS,
        selectedContent: GENESIS,
      }));
    });

    it('reners contents with selected content', () => {
      const { container } = render((
        <ContentsContainer />
      ));

      expect(container).toHaveTextContent(`${GENESIS.name}(V)`);
    });
  });

  context('without selectedContent', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        contents: CONTENTS,
      }));
    });

    it('renders contents with selected contents', () => {
      const { container, getByText } = render((
        <ContentsContainer />
      ));

      expect(container).toHaveTextContent(GENESIS.name);

      fireEvent.click(getByText(GENESIS.name));

      expect(dispatch).toBeCalled();
    });
  });
});
