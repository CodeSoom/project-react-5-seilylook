import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import VersesPage from './VersesPage';

describe('VersesPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      testaments: [
        { id: 1, name: '구약' },
      ],
      contents: [
        { id: 1, name: '창세기' },
      ],
      verses: [
        { id: 1, name: '두려워 하지 말라. 나는 네 방패요, 지극히 큰 상급이니라' },
      ],
    }));
  });

  function renderTestamentsPage() {
    return render((
      <MemoryRouter>
        <VersesPage />
      </MemoryRouter>
    ));
  }

  context('with testaments and verses', () => {
    it('renders testament and content select button', () => {
      const { queryByText } = renderTestamentsPage();

      expect(dispatch).toBeCalled();

      expect(queryByText('구약')).not.toBeNull();
    });
  });
});
