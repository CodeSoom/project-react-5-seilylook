import { useSelector } from 'react-redux';

import { get } from '../modules/utils';

export default function DiariesContainer({ onClickDiary }) {
  const diaries = useSelector(get('diaries'));

  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.id}>
          <button onClick={() => onClickDiary(diary)} type="button">
            {diary.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
