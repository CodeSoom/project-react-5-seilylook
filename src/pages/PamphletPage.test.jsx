import React from 'react';

import { render } from '@testing-library/react';

import PamphletPage from './PamphletPage';

describe('PamphletPage', () => {
  it('renders /pamphlet page', () => {
    const { container } = render((
      <PamphletPage />
    ));

    expect(container).toHaveTextContent('경배와 찬양');
  });
});
