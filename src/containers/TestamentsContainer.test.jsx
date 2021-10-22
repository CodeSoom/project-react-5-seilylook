import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TestamentsContainer from './TestamentsContainer';

import TESTAMENTS from '../../fixtures/testaments';

describe('TestamentsContainer', () => {
  const dispatch = jest.fn();

  const OLDTESTAMENT = TESTAMENTS[0];

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedTestament', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        testaments: TESTAMENTS,
        selectedTestament: OLDTESTAMENT,
      }));
    });

    it('renders testaments with selected testament', () => {
      const { container } = render((
        <TestamentsContainer />
      ));

      expect(container).toHaveTextContent(`${OLDTESTAMENT.name}(V)`);
    });
  });

  context('without selectedTestament', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        testaments: TESTAMENTS,
      }));
    });

    it('renders testaments', () => {
      const { container, getByText } = render((
        <TestamentsContainer />
      ));

      expect(container).toHaveTextContent(OLDTESTAMENT.name);

      fireEvent.click(getByText(OLDTESTAMENT.name));

      expect(dispatch).toBeCalled();
    });
  });
});
