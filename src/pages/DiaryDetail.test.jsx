import { render } from '@testing-library/react';

import DiaryDetail from './DiaryDetail';

describe('DiaryDetail', () => {
  const diary = {
    id: 1,
    title: '오늘의 기도',
    description: '감사합니다',
  };

  it('renders title and description', () => {
    const { container } = render((
      <DiaryDetail diary={diary} />
    ));

    expect(container).toHaveTextContent('오늘의 기도');
    expect(container).toHaveTextContent('감사합니다');
  });
});
