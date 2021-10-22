import { render } from '@testing-library/react';

import VersesPage from './VersesPage';

describe('VersesPage', () => {
  it('rendes VersesPage', () => {
    const { container } = render((
      <VersesPage />
    ));

    expect(container).toHaveTextContent('성경 구절');
  });
});
