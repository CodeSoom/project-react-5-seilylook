import React from 'react';

import { useSelector } from 'react-redux';

import CommentsItems from './CommentsItems';

import { get } from '../../modules/utils';

export default function CommentList() {
  const comments = useSelector(get('comments'));

  return (
    <div>
      <h2>댓글</h2>
      {
        !(comments)
          ? (<p>댓글이 없습니다.</p>)
          : <CommentsItems comments={comments} />
      }
    </div>
  );
}
