import React from 'react';

import { render } from '@testing-library/react';

import DiaryList from './DiaryList';

import diaries from '../../../fixtures/diaries';

test('DiaryList', () => {
  const { container } = render((
    <DiaryList diaries={diaries} />
  ));

  expect(container).toHaveTextContent('훈민정음');
});
