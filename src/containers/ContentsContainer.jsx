import { useDispatch, useSelector } from 'react-redux';

import {
  selectContent,
  loadVerses,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function ContentsContainer() {
  const dispatch = useDispatch();

  const contents = useSelector(get('contents'));
  const selectedContent = useSelector(get('selectedContent'));

  function handleClick(contentId) {
    dispatch(selectContent(contentId));
    dispatch(loadVerses());
  }

  return (
    <ul>
      {contents.map((content) => (
        <li key={content.id}>
          <button
            type="button"
            onClick={() => handleClick(content.id)}
          >
            {content.name}
            {selectedContent ? (
              <>
                {content.id === selectedContent.id ? '(V)' : null}
              </>
            ) : null }
          </button>
        </li>
      ))}
    </ul>
  );
}
