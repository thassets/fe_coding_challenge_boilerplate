import {
  GET_FEED_DATA_BEGIN,
  GET_FEED_DATA_SUCCESS,
  GET_FEED_DATA_ERROR,
  MARK_AS_FAVORITE_BEGIN,
  MARK_AS_FAVORITE_SUCCESS,
  MARK_AS_FAVORITE_ERROR,
} from "./types";

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FEED_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_FEED_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_FEED_DATA_ERROR:
      return {
        ...state,
        loading: false,
      };
    case MARK_AS_FAVORITE_BEGIN:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.value === 1) {
              return {
                ...item,
                vote: {
                  id: action.payload.id,
                  value: action.payload.value,
                },
              };
            } else {
              return {
                ...item,
                vote: undefined,
              };
            }
          } else {
            return item;
          }
        }),
      };
    case MARK_AS_FAVORITE_SUCCESS:
      return state;
    case MARK_AS_FAVORITE_ERROR:
      return state;
    default:
      return state;
  }
};
