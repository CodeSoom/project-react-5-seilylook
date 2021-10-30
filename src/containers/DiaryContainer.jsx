/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentForm from '../components/comment/CommentForm';
import CommentsList from '../components/comment/CommentsList';

import {
  changeCommentField,
  addComment,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function DiaryContainer({ diaryId }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleChange({ name, value }) {
    dispatch(changeCommentField({ name, value }));
  }

  function handleSubmit() {
    dispatch(addComment({ diaryId }));
  }

  return (
    <>
      {accessToken ? (
        <CommentForm
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <CommentsList />
    </>
  );
}
