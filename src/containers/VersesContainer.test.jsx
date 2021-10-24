import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import VersesContainer from './VersesContainer';

describe('VersesContainer', () => {
  it('renders verses', () => {
    useSelector.mockImplementation((selector) => selector({
      verses: [
        { id: 1, name: '구절 테스트' },
      ],
    }));

    const handleClick = jest.fn();

    const { container } = render((
      <MemoryRouter>
        <VersesContainer onClickVerse={handleClick} />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('구절 테스트');
  });
});
