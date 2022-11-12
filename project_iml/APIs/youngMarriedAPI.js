import axios from 'react-native-axios';

const BACKEND_URL =
  'https://intimate-partner-violence-mobileapp.cyclic.app/api';

// export const createBlog = async ({title, body}, setIsCreationSuccess) => {
//   axios
//     .post(`${BACKEND_URL}/evidence/create-evidence`, {title, body})
//     .then(res => {
//       setIsCreationSuccess(res.data.success);
//     })
//     .catch(err => {
//       console.log(err);
//       setIsCreationSuccess(false);
//     });
// };

// export const viewBlogByID = async (blogId, setBlog) => {
//   try {
//     await axios.get(`${BACKEND_URL}/blog/` + blogId).then(result => {
//       if (result) {
//         setBlog(result.data.existingBlog);
//       } else {
//         setBlog([]);
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     setBlog([]);
//   }
// };

export const viewAllEvidence = async setEvidence => {
  try {
    await axios.get(`${BACKEND_URL}/evidence/get-all-evidence`).then(res => {
      if (res) {
        setEvidence(res.data.evidence);
      } else {
        setEvidence([]);
      }
    });
  } catch (err) {
    console.log(err);
    setEvidence([]);
  }
};

export const viewBlogsList = async setEvidence => {
  try {
    await axios.get(`${BACKEND_URL}/blog/getAll/blogs`).then(result => {
      if (result) {
        setEvidence(result.data.existingBlogs);
      } else {
        setEvidence([]);
      }
    });
  } catch (err) {
    console.log(err);
    setEvidence([]);
  }
};
