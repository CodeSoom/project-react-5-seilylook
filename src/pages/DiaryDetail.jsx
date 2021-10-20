import React from 'react';

export default function DiaryDetail({ diary }) {
  const { title, description } = diary;

  return (
    <div>
      <h2>상세보기</h2>
      {title}
      {description}
    </div>
  );
}
