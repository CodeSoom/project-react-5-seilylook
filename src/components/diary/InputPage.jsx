import React from 'react';

import InputForm from './InputForm';

export default function InputPage({ inputTitles, onChange, onClick }) {
  return (
    <div>
      {inputTitles.map((inputTitle) => (
        <InputForm
          key={inputTitle.name}
          name={inputTitle.name}
          placeholder={inputTitle.placeholder}
          value={inputTitle.value}
          onChange={onChange}
        />
      ))}
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
