import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Name is require!'),
  email: yup.string().email('Invalid email').required('Email is required!'),
  password: yup.string().required('Password is required!'),
});
