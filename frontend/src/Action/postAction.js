import { CREATE_POST_FAIL, CREATE_POST_SUCCESS } from './types';
import postService from '../services/PostService';
export const postAction = (post) => (dispatch) => {
  const { title, body, url } = post;

  // fetch('http://localhost:4000/post/createpost', {
  //   method: 'post',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     //  Authorization: 'Bearer ' + localStorage.getItem('jwt'),
  //   },
  //   body: JSON.stringify({
  //     title,
  //     body,
  //     url,
  //   }),
  // })
  console.log('dddddddddddddddddddddddddddddddd', post);
  postService
    .createPost(post)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        dispatch({ type: CREATE_POST_FAIL, payload: data.error });
        // M.toast({html: data.error, classes:"#c62828 red darken-3" })
      } else {
        console.log('post success created');
        dispatch({ type: CREATE_POST_SUCCESS, payload: data });
      }
    })
    .catch((error) => {
      dispatch({ type: CREATE_POST_FAIL, payload: error });
    });
};
