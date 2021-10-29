import React from 'react';

function DiaryDetail({ diary }) {
  const { title, description } = diary;

  return (
    <div>
      <h2>상세보기</h2>
      <p>
        제목:
        {' '}
        {title}
      </p>
      <p>
        내용:
        {' '}
        {description}
      </p>
    </div>
  );
}

export default React.memo(DiaryDetail);
