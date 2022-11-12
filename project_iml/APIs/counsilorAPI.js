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

export const update_Blog = async (
  blogId,
  {title, body},
  setIsCreationSuccess,
) => {
  const updateBlog = {
    title,
    body,
  };

  try {
    await axios
      .put(`${BACKEND_URL}/blog/update/` + blogId, updateBlog)
      .then(result => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

export const deleteBlog = async blogId => {
  console.log('deleted', blogId);
  await axios
    .delete(`${BACKEND_URL}/blog/delete/` + blogId)
    .then(() => {
      console.log('blog deleted');
    })
    .catch(err => {
      console.log(err);
    });
};
