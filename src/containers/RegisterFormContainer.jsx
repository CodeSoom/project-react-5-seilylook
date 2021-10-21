/* eslint-disable import/named */
import { useDispatch, useSelector } from 'react-redux';

import RegisterForm from '../components/register/RegisterForm';

import {
  changeRegisterField,
} from '../modules/actions';

import { get } from '../modules/utils';

export default function RegisterFormContainer() {
  const dispatch = useDispatch();

  const registerFields = useSelector(get('registerFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeRegisterField({ name, value }));
  };

  return (
    <RegisterForm
      fields={registerFields}
      onChange={handleChange}
    />
  );
}
