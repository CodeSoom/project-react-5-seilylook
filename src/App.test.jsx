import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      newId: '',
      inputTitles: [
        {
          name: 'title',
          placeholder: '제목',
          text: '',
        },
        {
          name: 'description',
          placeholder: '설명',
          text: '',
        },
      ],
      contents: [
        {
          id: 101,
          title: '첫번째 제목',
          description: '첫번째 설명',
          value: '',
        },
        {
          id: 102,
          title: '두번째 제목',
          description: '두번째 설명',
          value: '',
        },
      ],
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

      expect(container).toHaveTextContent('Home');
    });
  });
});
