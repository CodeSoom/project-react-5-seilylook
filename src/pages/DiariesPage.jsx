/* eslint-disable react/jsx-no-bind */
import { useHistory } from 'react-router-dom';

import DiariesContainer from '../containers/DiariesContainer';

export default function DiariesPage() {
  const history = useHistory();

  function handleClickDiary(diary) {
    const url = `/diaries/${diary.id}`;
    history.push(url);
  }

  return (
    <div>
      <DiariesContainer onClickDiary={handleClickDiary} />
    </div>
  );
}
