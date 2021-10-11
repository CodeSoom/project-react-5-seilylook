import { render } from '@testing-library/react';

import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders homepage', () => {
    render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));
  });
});
