import { useParams } from 'react-router-dom';

import DiaryContainer from '../containers/DiaryContainer';

export default function DiaryPage({ params }) {
  const { id } = params || useParams();

  return (
    <DiaryContainer diaryId={id} />
  );
}
