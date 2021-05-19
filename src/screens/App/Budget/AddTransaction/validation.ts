import * as yup from 'yup';

export default yup.object().shape({
  value: yup
    .number()
    .required('Value is required')
    .moreThan(0, 'Value must be bigger than 0'),
  description: yup.string().required('Description is required!'),
  category: yup.string().required('Category is required'),
  date: yup.string().required('Date is required'),
});
