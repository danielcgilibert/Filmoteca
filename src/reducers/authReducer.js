import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      console.log(action.payload);
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        photo: action.payload.photo

      };
      
      case types.logout:
      return { }

    default:
      return state;
  }
};
