/* eslint-disable react/jsx-no-bind */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import DiaryForm from '../components/diary/DiaryForm';

import {
  addDiary,
  changeDiaryField,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function DiaryInputContainer() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  const { diary } = useSelector((state) => ({
    diary: state.diary,
  }));

  function handleClick() {
    dispatch(addDiary());
  }

  function handleChange({ name, value }) {
    dispatch(changeDiaryField({ name, value }));
  }

  return (
    <>
      {accessToken ? (
        <DiaryForm
          diary={diary}
          onChange={handleChange}
          onClick={handleClick}
        />
      ) : null}
    </>
  );
}
