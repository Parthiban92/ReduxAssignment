
export const LIST_ACTION_TYPES = {
  GET_DATA: "GET_DATA",
  ERROR_DATA: "ERROR_DATA",
  FETCH_POST: "FETCH_POST",
  LIST_ACTION_ERROR: "LIST_ACTION_ERROR",
  GET_SUB_DATA: "GET_SUB_DATA",
  ERROR_SUB_DATA: "ERROR_SUB_DATA"
};


const listingSuccessAction = param => ({
  type: LIST_ACTION_TYPES.GET_DATA,
  payload: param
});

const listingErrorAction = param => ({
  type: LIST_ACTION_TYPES.ERROR_DATA,
  payload: param
});

const listingSubSuccessAction =  (data,param) => ({
  type: LIST_ACTION_TYPES.GET_SUB_DATA,
  payload: data,
  id:param
});

const listingSubErrorAction = param => ({
  type: LIST_ACTION_TYPES.ERROR_SUB_DATA,
  payload: param
});

export const fetchPosts = param => dispatch => {
	
     fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(response => response.json())
    .then(posts => {
    	
      dispatch(listingSuccessAction(posts.data));
    })
    .catch((error) => {
      dispatch(listingErrorAction(error));
    });
}
export const fetchSubPost = param => dispatch => {
 console.log(param)
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      dispatch(listingSubSuccessAction(posts,param));
    })
    .catch((error) => {
      dispatch(listingErrorAction(error));
    });
};

