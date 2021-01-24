import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
} from '../Action/types';

const initialState = {
  user: null,
  token: null,
  profile: null,
  profiles: [],
  posts: [{}],
  isAdmin: false,
  results: [{}],
  loading: true,
  error: { msg: '', status: '' },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,token:payload.token,user:payload.loginUser,
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    
    case GET_PROFILE_ERROR:
    case LOGIN_FAILED:
      return {
        ...state,
        error: {
          msg: payload.msg,
          status: payload.status,
        },
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
