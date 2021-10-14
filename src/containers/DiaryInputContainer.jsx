/* eslint-disable react/jsx-no-bind */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import InputPage from '../components/diary/InputPage';

import {
  changeContent,
  addContent,
} from '../modules/actions';

export default function DiaryInputContainer() {
  const dispatch = useDispatch();

  const { inputTitles } = useSelector((state) => ({
    inputTitles: state.inputTitles,
  }));

  function handleChangeContent(name, event) {
    dispatch(changeContent(name, event.target.value));
  }

  function handleClickAddContent() {
    dispatch(addContent());
  }

  return (
    <InputPage
      inputTitles={inputTitles}
      onChange={handleChangeContent}
      onClick={handleClickAddContent}
    />
  );
}
