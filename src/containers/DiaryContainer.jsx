/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DiaryDetail from '../pages/DiaryDetail';
import CommentForm from '../components/comment/CommentForm';
import CommentsList from '../components/comment/CommentsList';

import {
  changeCommentField,
  addComment,
  setDiary,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function DiaryContainer({ diaryId }) {
  const dispatch = useDispatch();

  const diary = useSelector(get('diary'));
  const accessToken = useSelector(get('accessToken'));

  useEffect(() => {
    dispatch(setDiary(diary));
  });

  function handleChange({ name, value }) {
    dispatch(changeCommentField({ name, value }));
  }

  function handleSubmit() {
    dispatch(addComment({ diaryId }));
  }

  if (!diary) {
    return (
      <p>기도 노트가 없습니다.</p>
    );
  }

  return (
    <>
      <DiaryDetail diary={diary} />
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
