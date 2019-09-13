import * as Yup from 'yup';

const addRecipeValidation = Yup.object({
  title: Yup.string().required('Required'),
  season: Yup.string().required('Required'),
  timeOptions: Yup.string().required('Required'),
  cuisineCategories: Yup.array()
    .of(Yup.string())
    .required('Required'),
  image: Yup.mixed().required('Required'),
  instructions: Yup.array().of(
    Yup.object({
      instruction: Yup.string().required('Required'),
      image: Yup.mixed().required('Required')
    })
  )
});

export default addRecipeValidation;
