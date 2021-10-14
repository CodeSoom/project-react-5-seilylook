import React from 'react';

import { render } from '@testing-library/react';

import DiaryListPage from './DiaryListPage';

describe('DiaryListPage', () => {
  it('rneders diary list page', () => {
    const { container } = render((
      <DiaryListPage />
    ));

    expect(container).toHaveTextContent('기도 노트 목록');
  });
});
