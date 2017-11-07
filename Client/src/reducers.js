const initialState = {
  token: null
}

export function cookieSaver(state=initialState, action){
  switch(action.type){
    case "APPLY_TOKEN":
      return Object.assign({}, state, {token: action.token});
    default:
      return state;
  }
}
