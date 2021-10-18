export default function DiaryList({ diaries }) {
  return (
    <ul>
      {diaries.map((diary) => (
        <li key={diary.id}>
          제목:
          {diary.title}
          설명:
          {diary.description}
        </li>
      ))}
    </ul>
  );
}
