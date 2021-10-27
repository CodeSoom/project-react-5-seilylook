import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      testaments: [
        { id: 1, name: '구약' },
      ],
      contents: [],
      verses: [],
      diaries: [],
      diary: {},
    }));
  });

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders / page', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('구름이노트');
    });
  });
});
