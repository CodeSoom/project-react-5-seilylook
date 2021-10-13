import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import InputPage from '../components/diary/InputPage';

import {
  changeContent,
  addContent,
} from '../modules/slice';

export default function DiaryInputContainer() {
  const dispatch = useDispatch();

  const { inputTitles } = useSelector((state) => ({
    inputTitles: state.inputTitles,
  }));

  const handleChangeContent = ({ name, value }) => {
    dispatch(changeContent({ name, value }));
  };

  const handleClicksetContent = () => {
    dispatch(addContent());
  };

  return (
    <InputPage
      inputTitles={inputTitles}
      onChange={handleChangeContent}
      onClick={handleClicksetContent}
    />
  );
}
