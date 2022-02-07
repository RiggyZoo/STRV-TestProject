import * as Yup from 'yup'
export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title has to be filled up'),
  description: Yup.string().required('Description has to be filled up'),
  startsAt: Yup.string().nullable().required('Date has to be filled up'),
  time: Yup.string().nullable().required('Time has to be filled up'),
  capacity: Yup.number()
    .typeError('Capacity has to be a number')
    .required('Capacity has to be filled up')
    .min(1, 'Capacity should be greater than zero'),
})
