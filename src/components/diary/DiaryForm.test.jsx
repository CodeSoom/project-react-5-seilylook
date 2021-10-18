import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import DiaryForm from './DiaryForm';

jest.mock('react-redux');

describe('DiaryForm', () => {
  given('accessToken', () => 'ACCESS_TOKEN');

  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const diary = {
    title: '오늘의',
    description: '동해물과 백',
  };

  it('renders diary input fields', () => {
    const { queryByDisplayValue, getByText } = render((
      <DiaryForm
        diary={diary}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(queryByDisplayValue('오늘의')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });

  it('changes diary input fields', () => {
    const { queryByDisplayValue, getByText } = render((
      <DiaryForm
        diary={diary}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    fireEvent.change(queryByDisplayValue('동해물과 백'), {
      target: { value: '동해물과 백두산이' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'description',
      value: '동해물과 백두산이',
    });

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
