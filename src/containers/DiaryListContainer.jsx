import React from 'react';

import { useSelector } from 'react-redux';

import List from '../components/diary/List';

export default function DiaryListContainer() {
  const { contents } = useSelector((state) => ({
    contents: state.contents,
  }));

  return (
    <List contents={contents} />
  );
}
