import { FETCH_POST, NEW_POST } from './types';

function fetchPosts() {
  return (dispatch) => {
    fetch('https://ngproductsparam.herokuapp.com/api/getProducts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POST,
        payload: posts
      }));
  }
}



export { fetchPosts };