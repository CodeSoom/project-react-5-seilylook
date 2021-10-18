import React from 'react';

import { useSelector } from 'react-redux';

import DiaryList from '../components/diary/DiaryList';

import { get } from '../modules/utils';

export default function DiaryDiaryListContainer() {
  const accessToken = useSelector(get('accessToken'));

  const { diaries } = useSelector((state) => ({
    diaries: state.diaries,
  }));

  return (
    <>
      {accessToken ? (
        <DiaryList diaries={diaries} />
      ) : null}
    </>
  );
}
