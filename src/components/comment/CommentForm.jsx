import React from 'react';

import TextField from './TextField';

export default function CommentForm({ onChange, onSubmit }) {
  return (
    <>
      <TextField
        label="댓글"
        name="text"
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        댓글 남기기
      </button>
    </>
  );
}
