import axios from 'react-native-axios';

const BACKEND_URL =
  'https://intimate-partner-violence-mobileapp.cyclic.app/api';

export const createBlog = async ({title, body}, setIsCreationSuccess) => {
  axios
    .post(`${BACKEND_URL}/blog/createBlog`, {title, body})
    .then(res => {
      setIsCreationSuccess(res.data.success);
    })
    .catch(err => {
      console.log(err);
      setIsCreationSuccess(false);
    });
};
