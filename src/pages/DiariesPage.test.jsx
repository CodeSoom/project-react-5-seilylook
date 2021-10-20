import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import DiariesPage from './DiariesPage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('RestaurantsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      diaries: [
        {
          id: 1,
          title: '오늘의 기도',
          description: '감사합니다',
        },
      ],
    }));
  });

  function renderDiariesPage() {
    return render((
      <MemoryRouter>
        <DiariesPage />
      </MemoryRouter>
    ));
  }

  it('checks rendering', () => {
    renderDiariesPage();
  });
});
