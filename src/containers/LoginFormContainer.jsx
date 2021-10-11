import { useDispatch, useSelector } from 'react-redux';

import { get } from '../modules/utils';

export default function LoginPageContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  return (
    <div>
      {loginFields}
    </div>
  );
}
