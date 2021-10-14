import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import InputPage from './InputPage';

describe('InputPage', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const inputTitles = [
    {
      name: 'title',
      placeholder: '제목',
      value: '',
    },
    {
      name: 'description',
      placeholder: '설명',
      value: '',
    },
  ];

  function renderInputPage() {
    return render((
      <InputPage
        inputTitles={inputTitles}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  context('without input title and description', () => {
    it('renders without text page', () => {
      const { getByPlaceholderText } = renderInputPage();

      expect(getByPlaceholderText('제목')).not.toBeNull();
      expect(getByPlaceholderText('설명')).not.toBeNull();
    });
  });

  context('when input content changed', () => {
    it('changes input title and description', () => {
      const { getByPlaceholderText } = renderInputPage();

      fireEvent.change(getByPlaceholderText('제목'), {
        target: { value: '오늘 기도 제목' },
      });

      expect(handleChange).toBeCalled();

      fireEvent.change(getByPlaceholderText('설명'), {
        target: { value: '동해물과 백두산이' },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
