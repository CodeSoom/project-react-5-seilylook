import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputForm from './InputForm';

describe('InputForm', () => {
  const handleChange = jest.fn();

  const inputTitles = {
    name: 'title',
    placeholder: '제목',
    value: '',
  };

  it('renders input contexts and change event', () => {
    const { getByPlaceholderText } = render((
      <InputForm
        name={inputTitles.name}
        placeholder={inputTitles.placeholder}
        value={inputTitles.value}
        onChange={handleChange}
      />
    ));

    expect(getByPlaceholderText('제목')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('제목'), {
      target: { value: '글쿤 글쿤 그랫군' },
    });

    expect(handleChange).toBeCalled();
  });
});
