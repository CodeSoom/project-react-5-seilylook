import React from 'react';

import TextField from './TextField';

export default function CommentForm({ onChange, onSubmit }) {
  return (
    <>
      <TextField
        label="댓글"
        name="text"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}
