import * as yup from 'yup';

export const ProductsSchema =yup
.object()
.shape({
  title: yup.string().required("Please Write Title"),
  price: yup.string().required("Please Write Price"),
  category: yup.string().required("Please Write Category"),

})