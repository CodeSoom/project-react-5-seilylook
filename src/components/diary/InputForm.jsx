import React from 'react';

export default function InputForm({
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(name, event)}
    />
  );
}
