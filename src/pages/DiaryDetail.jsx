import React from 'react';

export default function DiaryDetail({ diary }) {
  const { title, description } = diary;

  return (
    <div>
      <h2>상세보기</h2>
      <p>
        제목:
        {title}
      </p>
      <p>
        설명:
        {description}
      </p>
    </div>
  );
}
