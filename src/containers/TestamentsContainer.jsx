import { useDispatch, useSelector } from 'react-redux';

import {
  selectTestament,
  loadVerses,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function TestamentsContainer() {
  const dispatch = useDispatch();

  const testaments = useSelector(get('testaments'));
  const selectedTestament = useSelector(get('selectedTestament'));

  function handleClick(testamentId) {
    dispatch(selectTestament(testamentId));
    dispatch(loadVerses());
  }

  return (
    <ul>
      {testaments.map((testament) => (
        <li key={testament.id}>
          <button
            type="button"
            onClick={() => handleClick(testament.id)}
          >
            {testament.name}
            {selectedTestament ? (
              <>
                {testament.id === selectedTestament.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
