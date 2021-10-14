import React from 'react';

export default function Item({ content: { title, description } }) {
  return (
    <li>
      <div>
        제목:
        {title}
      </div>
      <div>
        설명:
        {description}
      </div>
    </li>
  );
}
