import React from 'react';

import { useSelector } from 'react-redux';

import List from '../components/diary/List';

import { get } from '../modules/utils';

export default function DiaryListContainer() {
  const accessToken = useSelector(get('accessToken'));

  const { contents } = useSelector((state) => ({
    contents: state.contents,
  }));

  return (
    <>
      {accessToken ? (
        <List contents={contents} />
      ) : null}
    </>
  );
}
