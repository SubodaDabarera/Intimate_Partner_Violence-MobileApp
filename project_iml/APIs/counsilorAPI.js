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

export const viewBlogsList = async setBlogs => {
  try {
    await axios.get(`${BACKEND_URL}/blog/getAll/blogs`).then(result => {
      if (result) {
        setBlogs(result.data.existingBlogs);
      } else {
        setBlogs([]);
      }
    });
  } catch (err) {
    console.log(err);
    setBlogs([]);
  }
};

export const viewBlogByID = async (blogId, setBlog) => {
  try {
    await axios.get(`${BACKEND_URL}/blog/` + blogId).then(result => {
      if (result) {
        setBlog(result.data.existingBlog);
      } else {
        setBlog([]);
      }
    });
  } catch (err) {
    console.log(err);
    setBlog([]);
  }
};
